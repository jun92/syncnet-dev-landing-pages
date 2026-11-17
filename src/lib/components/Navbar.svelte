<script>
  import { langState } from '../stores/lang.svelte.js';
  import { translations } from '../i18n/translations.js';

  const t = $derived(translations[langState.current]);
</script>

<header class="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-7">
  <a href="/" class="group flex items-center gap-3 focus:outline-none">
    <span class="relative flex h-3 w-3">
      <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
      <span class="relative inline-flex h-3 w-3 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 shadow-[0_0_12px_rgba(56,189,248,0.85)]"></span>
    </span>
    <div class="flex items-center gap-2.5 text-base font-bold tracking-tight">
      <span class="text-slate-100 transition-colors group-hover:text-white">{t.brandName}</span>
      <span class="text-slate-600">/</span>
      <span class="font-mono text-sm font-semibold text-cyan-400">{t.brandSub}</span>
    </div>
  </a>

  <div
    class="flex items-center gap-1 rounded-full border border-slate-800/90 bg-slate-900/75 p-1 backdrop-blur-md"
    role="group"
    aria-label="Language Switcher"
  >
    <button
      type="button"
      onclick={() => langState.set('ko')}
      class="cursor-pointer rounded-full px-3 py-1 text-xs font-semibold transition-all {langState.current === 'ko'
        ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 shadow-inner ring-1 ring-cyan-400/40'
        : 'text-slate-400 hover:text-slate-200'}"
    >
      KO
    </button>
    <button
      type="button"
      onclick={() => langState.set('en')}
      class="cursor-pointer rounded-full px-3 py-1 text-xs font-semibold transition-all {langState.current === 'en'
        ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 shadow-inner ring-1 ring-cyan-400/40'
        : 'text-slate-400 hover:text-slate-200'}"
    >
      EN
    </button>
  </div>
</header>
