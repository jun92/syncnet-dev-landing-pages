<script>
  import { langState } from '../stores/lang.svelte.js';
  import { translations } from '../i18n/translations.js';

  const t = $derived(translations[langState.current]);
</script>

<section class="relative z-10 mx-auto max-w-4xl px-6 pt-8 pb-16 text-center md:pt-14 md:pb-20">
  <!-- 상단 상태 배지 -->
  <div class="mb-8 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/25 bg-cyan-950/35 px-4 py-1.5 text-xs font-semibold tracking-wider text-cyan-300 shadow-[0_0_24px_rgba(56,189,248,0.12)] backdrop-blur-md">
    <span class="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
    <span>{t.badge}</span>
  </div>

  <!-- 메인 타이틀 -->
  <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.18]">
    {t.heroTitleTop}
    <span class="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
      {t.heroTitleHighlight1}
    </span>{t.heroTitleMid}
    <br class="hidden sm:inline" />
    {t.heroTitleBottom}
    <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
      {t.heroTitleHighlight2}
    </span>{t.heroTitleEnd}
  </h1>

  <!-- 서브 설명 -->
  <p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
    {t.heroDescLine1}
    <br class="hidden md:inline" />
    {t.heroDescLine2}
  </p>

  <!-- 핵심 아키텍처 하이라이트 바 -->
  <div class="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
    {#each t.metrics as item}
      <div class="rounded-xl border border-slate-800/80 bg-slate-900/50 px-4 py-3.5 backdrop-blur-md">
        <div class="text-[11px] font-medium tracking-wide text-slate-400">{item.label}</div>
        <div class="mt-1 font-mono text-sm font-semibold text-cyan-300">{item.value}</div>
      </div>
    {/each}
  </div>
</section>
