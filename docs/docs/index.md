---
title: SyncnetPlatform - Coming Soon
hide:
  - navigation
  - toc
---

<section class="hero-section">
  <div class="status-badge">
    <span class="pulse-dot"></span>
    <span data-lang="ko">COMING SOON · 차세대 게임 백엔드 인프라</span>
    <span data-lang="en">COMING SOON · NEXT-GEN GAME BACKEND INFRASTRUCTURE</span>
  </div>

  <h1 class="hero-title" data-lang="ko">
    코어 백엔드는 <span class="gradient-text">완전 무료</span>로,<br>
    성장은 <span class="gradient-text">맞춤형 엔지니어링</span>으로.
  </h1>
  <h1 class="hero-title" data-lang="en">
    Core Backend <span class="gradient-text">100% Free</span>,<br>
    Scale with <span class="gradient-text">Tailored Engineering</span>.
  </h1>

  <p class="hero-desc" data-lang="ko">
    분산 가상 액터와 초저지연 바이너리 프로토콜 기반의 게임 서버 엔진을 무료로 배포합니다.<br>
    눈오는밤은 귀사의 게임 장르와 트래픽 규모에 맞춘 아키텍처 커스터마이징과 전담 기술 지원을 제공합니다.
  </p>
  <p class="hero-desc" data-lang="en">
    We provide a high-throughput game backend engine built on distributed virtual actors and ultra-low latency protocols—completely free.<br>
    Snowy Night delivers bespoke architecture customization and dedicated engineering support tailored to your title.
  </p>
</section>

<section class="features-grid">
  <div class="feature-card">
    <div class="feature-tag">01 · CORE ENGINE</div>
    <h3 data-lang="ko">라이선스 비용 없는 코어 솔루션</h3>
    <h3 data-lang="en">Zero-Cost Core Backend</h3>
    <p data-lang="ko">매치메이킹, 실시간 세션, 인벤토리, 랭킹 및 인증 파이프라인을 초기 비용과 CCU 로열티 없이 즉시 도입할 수 있습니다.</p>
    <p data-lang="en">Deploy matchmaking, real-time sessions, inventory, leaderboards, and OIDC auth pipelines with zero licensing fees or CCU royalties.</p>
  </div>

  <div class="feature-card">
    <div class="feature-tag">02 · CUSTOMIZATION</div>
    <h3 data-lang="ko">프로젝트 맞춤형 아키텍처 설계</h3>
    <h3 data-lang="en">Bespoke Architecture &amp; Logic</h3>
    <p data-lang="ko">단일 코옵 액션부터 대규모 심리스 월드까지, 게임 고유의 서버 권위 로직과 데이터 파이프라인을 직접 커스터마이징합니다.</p>
    <p data-lang="en">From co-op action titles to large-scale worlds, we customize server-authoritative game logic and data pipelines for your exact needs.</p>
  </div>

  <div class="feature-card">
    <div class="feature-tag">03 · ENTERPRISE SLA</div>
    <h3 data-lang="ko">론칭부터 라이브까지 전담 지원</h3>
    <h3 data-lang="en">Dedicated Live-Ops Support</h3>
    <p data-lang="ko">부하 테스트, 프로파일링 최적화, 무중단 배포 및 긴급 장애 대응까지 시니어 백엔드 엔지니어 팀이 밀착 지원합니다.</p>
    <p data-lang="en">Senior backend engineers partner with your studio from load testing and profiling to zero-downtime launches and live-ops response.</p>
  </div>
</section>

<section class="notify-card">
  <div class="notify-header">
    <h2 data-lang="ko">출시 알림 및 사전 기술 상담 신청</h2>
    <h2 data-lang="en">Get Notified &amp; Request Early Consultation</h2>
    <p data-lang="ko">서비스 오픈 소식과 초기 파트너 스튜디오 커스터마이징 우선 혜택을 가장 먼저 받아보세요.</p>
    <p data-lang="en">Be the first to know when we launch and secure priority customization onboarding for your studio.</p>
  </div>

  <form id="teaser-form" class="teaser-form">
    <div class="input-row">
      <input type="email" id="user-email" required
        data-placeholder-ko="업무용 이메일 주소를 입력하세요 (예: dev@studio.com)"
        data-placeholder-en="Enter your work email (e.g. dev@studio.com)"
        placeholder="업무용 이메일 주소를 입력하세요 (예: dev@studio.com)">
      <button type="submit" class="submit-btn">
        <span data-lang="ko">사전 등록하기</span>
        <span data-lang="en">Notify Me</span>
      </button>
    </div>

    <label class="custom-toggle">
      <input type="checkbox" id="need-custom">
      <span data-lang="ko">커스터마이징 / 아키텍처 기술 지원 사전 문의 함께 접수하기</span>
      <span data-lang="en">Include pre-launch inquiry for customization &amp; architecture support</span>
    </label>

    <div id="custom-fields" class="custom-fields hidden">
      <select id="game-engine">
        <option value="ue5">Unreal Engine 5</option>
        <option value="unity">Unity (NGO / Mirror / Custom)</option>
        <option value="godot">Godot 4</option>
        <option value="custom">Custom / In-house Engine</option>
      </select>
      <input type="text" id="project-note"
        data-placeholder-ko="예상 장르 또는 필요한 백엔드 기능 (선택)"
        data-placeholder-en="Target genre or desired backend features (Optional)"
        placeholder="예상 장르 또는 필요한 백엔드 기능 (선택)">
    </div>

    <div id="form-feedback" class="form-feedback" aria-live="polite"></div>
  </form>
</section>
