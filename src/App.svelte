<script>
  import SnowNetworkCanvas from './lib/components/SnowNetworkCanvas.svelte';
  import Navbar from './lib/components/Navbar.svelte';
  import HeroSection from './lib/components/HeroSection.svelte';
  import FeaturesSection from './lib/components/FeaturesSection.svelte';
  import WaitlistForm from './lib/components/WaitlistForm.svelte';
  import Footer from './lib/components/Footer.svelte';
</script>

<div class="relative min-h-screen w-full overflow-x-hidden bg-[#050811] text-slate-100">
  <!-- 상단 은은한 오로라/글로우 배경 -->
  <div
    class="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(56,189,248,0.16),rgba(99,102,241,0.06)_50%,transparent_80%)]"
    aria-hidden="true"
  ></div>

  <!-- 분산 노드 & 눈꽃 파티클 캔버스 -->
  <SnowNetworkCanvas />

  <!-- 메인 레이아웃 -->
  <div class="relative z-10 flex min-h-screen flex-col justify-between">
    <Navbar />

    <main class="flex-1">
      <HeroSection />
      <FeaturesSection />
      <WaitlistForm />
    </main>

    <Footer />
  </div>
</div>
