// path: src/app/layout.js
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Setup Font Plus Jakarta Sans secara global menggunakan path rasmi moden
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "AROS System | Productized AI Sales Infrastructure",
  description: "Bina Funnel Pancingan Laju + Otak AI Closer Gred Enterprise 24/7 Untuk Bisnes Anda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ms" className="scroll-smooth">
      <body
        className={`${jakartaSans.variable} font-sans bg-[#0B0F19] text-white antialiased selection:bg-orange-500/30 selection:text-orange-300`}
      >
        {children}
      </body>
    </html>
  );
}