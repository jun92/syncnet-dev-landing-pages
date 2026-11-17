<script>
  import { langState } from '../stores/lang.svelte.js';
  import { translations } from '../i18n/translations.js';

  const t = $derived(translations[langState.current]);
</script>

<footer class="relative z-10 mx-auto max-w-6xl px-6 pt-8 pb-12 text-center">
  <div class="border-t border-slate-800/70 pt-8 text-xs text-slate-500">
    {t.footer}
  </div>
</footer>
