<script>
  import { langState } from '../stores/lang.svelte.js';
  import { translations } from '../i18n/translations.js';

  const t = $derived(translations[langState.current]);

  let email = $state('');
  let needCustom = $state(false);
  let engine = $state('ue5');
  let note = $state('');
  let submittedMessage = $state('');

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    // 추후 실제 백엔드 API(예: ASP.NET Core / n8n Webhook / Supabase) 연동 지점
    const payload = {
      email: trimmed,
      needCustom,
      engine: needCustom ? engine : null,
      note: needCustom ? note.trim() : null,
      lang: langState.current,
      submittedAt: new Date().toISOString()
    };
    console.info('[SyncnetPlatform Waitlist]', payload);

    submittedMessage = t.successMsg(trimmed, needCustom);
    email = '';
    note = '';
    needCustom = false;
  }
</script>

<section class="relative z-10 mx-auto max-w-3xl px-6 py-12">
  <div class="relative overflow-hidden rounded-3xl border border-indigo-500/25 bg-gradient-to-b from-slate-900/85 to-slate-950/90 p-7 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.9)] backdrop-blur-xl sm:p-10">
    <!-- 상단 은은한 하이라이트 라인 -->
    <div class="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

    <div class="text-center">
      <h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">{t.ctaTitle}</h2>
      <p class="mt-2.5 text-sm text-slate-400 sm:text-base">{t.ctaDesc}</p>
    </div>

    <form onsubmit={handleSubmit} class="mt-8 space-y-4">
      <div class="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          bind:value={email}
          required
          placeholder={t.emailPlaceholder}
          class="flex-1 rounded-xl border border-slate-700/80 bg-slate-950/90 px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none"
        />
        <button
          type="submit"
          class="cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:from-cyan-400 hover:to-indigo-500 active:scale-[0.99]"
        >
          {t.submitBtn}
        </button>
      </div>

      <label class="flex cursor-pointer items-center gap-2.5 pt-1 text-sm text-slate-300 select-none">
        <input
          type="checkbox"
          bind:checked={needCustom}
          class="h-4 w-4 rounded border-slate-700 bg-slate-950 text-cyan-500 focus:ring-cyan-500/30"
        />
        <span>{t.customToggleLabel}</span>
      </label>

      {#if needCustom}
        <div class="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2">
          <select
            bind:value={engine}
            class="rounded-xl border border-slate-700/80 bg-slate-950/90 px-3.5 py-3 text-sm text-slate-200 transition focus:border-cyan-400 focus:outline-none"
          >
            {#each t.engineOptions as opt}
              <option value={opt.value}>{opt.label}</option>
            {/each}
          </select>

          <input
            type="text"
            bind:value={note}
            placeholder={t.notePlaceholder}
            class="rounded-xl border border-slate-700/80 bg-slate-950/90 px-3.5 py-3 text-sm text-slate-100 placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none"
          />
        </div>
      {/if}

      {#if submittedMessage}
        <div
          role="status"
          class="rounded-xl border border-emerald-500/30 bg-emerald-950/40 px-4 py-3 text-center text-sm font-medium text-emerald-300"
        >
          {submittedMessage}
        </div>
      {/if}
    </form>
  </div>
</section>
