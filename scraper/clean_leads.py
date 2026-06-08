import os
import json
import re
import pandas as pd

def clean_malaysian_phone(phone_str):
    phone = re.sub(r'\D', '', phone_str)
    if phone.startswith('01'):
        phone = '6' + phone
    elif phone.startswith('1') and len(phone) in [9, 10]:
        phone = '60' + phone
    
    if phone.startswith('601') and (11 <= len(phone) <= 12):
        return phone
    return None

def extract_phone(text):
    if not text or not isinstance(text, str):
        return None
    
    # Strategi 1: Imbas pautan wa.me dengan rentetan nombor terus
    wa_match = re.search(r'(?:wa\.me|whatsapp\.com/send\?phone=)(\+?6?01\d{7,9}|\+?1\d{8,9})', text, re.IGNORECASE)
    if wa_match:
        phone = clean_malaysian_phone(wa_match.group(1))
        if phone:
            return phone

    # Strategi 2: Fallback imbas nombor telefon mentah dalam copywriting
    raw_match = re.search(r'(?:\+?6?01\d{1}[- \s]?\d{7,8})', text)
    if raw_match:
        phone = clean_malaysian_phone(raw_match.group(0))
        if phone:
            return phone
            
    return None

def detect_language_labels(text):
    # Menggabungkan terus tag bahasa dan tag punca mengikut arahan Bos Amin
    if not text or not isinstance(text, str):
        return "Lang-EN,fb ads library"
    
    # Deteksi karakter Cina (Hanzi)
    if re.search(r'[\u4e00-\u9fff]', text):
        return "Lang-ZH,fb ads library"
    
    # Deteksi kata kunci utama Bahasa Melayu
    bm_keywords = ['dan', 'yang', 'nak', 'jualan', 'bisnes', 'kau', 'saya', 'bantu', 'klik', 'dapatkan', 'bos', 'terima', 'kasih', 'anda', 'kami']
    text_lower = text.lower()
    if any(word in text_lower for word in bm_keywords):
        return "Lang-BM,fb ads library"
        
    return "Lang-EN,fb ads library"

def execute_pipeline():
    base_dir = r'c:\Users\amin8\Desktop\aros-salespage-ai\scraper'
    input_json_path = os.path.join(base_dir, 'apify_raw.json')
    output_csv_path = os.path.join(base_dir, 'replyla_import.csv')
    enrichment_json_path = os.path.join(base_dir, 'pending_enrichment.json')
    ledger_path = os.path.join(base_dir, 'processed_ads.log')

    os.makedirs(base_dir, exist_ok=True)

    processed_ad_ids = set()
    if os.path.exists(ledger_path):
        with open(ledger_path, 'r', encoding='utf-8') as ledger_file:
            processed_ad_ids = set(line.strip() for line in ledger_file if line.strip())

    if not os.path.exists(input_json_path):
        print(f"[RALAT] Fail tidak dijumpai! Sila pastikan fail 'apify_raw.json' ada di: {base_dir}")
        return

    with open(input_json_path, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except Exception as e:
            print(f"[RALAT] Gagal membaca fail JSON: {str(e)}")
            return

    processed_leads = []
    pending_enrichment = []
    seen_phones_current_run = set()
    skipped_by_history_count = 0
    duplicate_phones_count = 0

    for item in data:
        ad_id = item.get('ad_archive_id') or 'N/A'
        
        if ad_id in processed_ad_ids and ad_id != 'N/A':
            skipped_by_history_count += 1
            continue

        customer_name = item.get('page_name') or 'Owner Bisnes'
        body = item.get('snapshot', {}).get('body', {})
        cw_text = body.get('text', '') if isinstance(body, dict) else (body if isinstance(body, str) else "")
        ad_link = item.get('ad_library_url') or f"https://www.facebook.com/ads/library/?id={ad_id}"

        phone_number = extract_phone(cw_text)

        if not phone_number:
            pending_enrichment.append({
                'ad_id': ad_id,
                'customer_name': customer_name,
                'language_tag': detect_language_labels(cw_text).split(',')[0],
                'ad_link': ad_link,
                'copywriting': cw_text[:150]
            })
            processed_ad_ids.add(ad_id)
            continue

        if phone_number in seen_phones_current_run:
            duplicate_phones_count += 1
            processed_ad_ids.add(ad_id)
            continue
            
        seen_phones_current_run.add(phone_number)
        labels = detect_language_labels(cw_text)

        # OUTPUT BERSIH: HANYA 3 KOLUM PARIPURNA UNTUK REPLYLA
        processed_leads.append({
            'Phone': f"+{phone_number}",
            'name': customer_name,
            'labels': labels
        })
        processed_ad_ids.add(ad_id)

    if processed_leads:
        df = pd.DataFrame(processed_leads)
        df.to_csv(output_csv_path, index=False, encoding='utf-8-sig')
    
    with open(enrichment_json_path, 'w', encoding='utf-8') as f_out:
        json.dump(pending_enrichment, f_out, indent=4, ensure_ascii=False)

    # PEMBETULAN PENUTUP STRING LEDGER
    with open(ledger_path, 'w', encoding='utf-8') as ledger_file:
        for pid in processed_ad_ids:
            ledger_file.write(f"{pid}\n")

    print("=" * 60)
    print("[PROOF OF WORK] AROS LEADS SCRAPER PIPELINE REPORT (V2.8)")
    print("=" * 60)
    print(f"- Total Raw Records in Current File        : {len(data)}")
    print(f"- Skipped (Already Processed in Past Runs) : {skipped_by_history_count}")
    print(f"- Skipped Duplicate Phone Numbers (Current): {duplicate_phones_count}")
    print(f"- New Clean Leads Exported to CSV (Step 1) : {len(processed_leads)}")
    print(f"- New Ignored Leads Dumped to JSON (Step 2): {len(pending_enrichment)}")
    print("=" * 60)

if __name__ == "__main__":
    execute_pipeline()