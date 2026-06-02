const dictionaries = {
  bm: () => import('../dictionaries/bm.json').then((module) => module.default),
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  zh: () => import('../dictionaries/zh.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
  const normalizedLocale = ['en', 'zh'].includes(locale) ? locale : 'bm';
  return dictionaries[normalizedLocale]();
};
