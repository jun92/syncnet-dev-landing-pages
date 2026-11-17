class LanguageState {
  current = $state('ko');

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('syncnet_lang');
      if (saved === 'ko' || saved === 'en') {
        this.current = saved;
      }
    }
  }

  set(lang) {
    if (lang !== 'ko' && lang !== 'en') return;
    this.current = lang;
    if (typeof window !== 'undefined') {
      localStorage.setItem('syncnet_lang', lang);
      document.documentElement.lang = lang;
    }
  }
}

export const langState = new LanguageState();
