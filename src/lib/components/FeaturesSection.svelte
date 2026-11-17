<script>
  import { langState } from '../stores/lang.svelte.js';
  import { translations } from '../i18n/translations.js';

  const t = $derived(translations[langState.current]);
</script>

<section class="relative z-10 mx-auto max-w-6xl px-6 py-12">
  <div class="mb-10 text-center">
    <h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">{t.featuresTitle}</h2>
    <p class="mt-2.5 text-sm text-slate-400 sm:text-base">{t.featuresSubtitle}</p>
  </div>

  <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
    {#each t.features as feature, idx}
      <article class="group relative overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-900/60 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_12px_36px_-12px_rgba(56,189,248,0.22)]">
        <div class="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cyan-500/5 blur-2xl transition-opacity duration-300 group-hover:bg-cyan-400/15"></div>

        <div class="mb-4 inline-flex items-center rounded-md border border-cyan-500/20 bg-cyan-950/40 px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wider text-cyan-400">
          {feature.tag}
        </div>

        <h3 class="text-lg font-bold text-slate-100 transition-colors group-hover:text-white">
          {feature.title}
        </h3>

        <p class="mt-3 text-sm leading-relaxed text-slate-400">
          {feature.desc}
        </p>
      </article>
    {/each}
  </div>
</section>
