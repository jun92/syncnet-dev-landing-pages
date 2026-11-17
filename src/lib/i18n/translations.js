export const translations = {
  ko: {
    brandName: '눈오는밤',
    brandSub: 'SyncnetPlatform',
    badge: 'COMING SOON · 차세대 게임 백엔드 인프라',
    heroTitleTop: '코어 백엔드는',
    heroTitleHighlight1: '완전 무료',
    heroTitleMid: '로,',
    heroTitleBottom: '성장은',
    heroTitleHighlight2: '맞춤형 엔지니어링',
    heroTitleEnd: '으로.',
    heroDescLine1: '분산 가상 액터와 초저지연 바이너리 프로토콜 기반의 게임 서버 엔진을 무료로 배포합니다.',
    heroDescLine2: '눈오는밤은 귀사의 게임 장르와 트래픽 규모에 맞춘 아키텍처 커스터마이징과 전담 기술 지원을 제공합니다.',
    metrics: [
      { label: '코어 라이선스 비용', value: '$0 / CCU 무제한' },
      { label: '바이너리 직렬화 오버헤드', value: 'Zero-Copy FlatBuffers' },
      { label: '아키텍처 기반', value: 'Distributed Virtual Actor' }
    ],
    featuresTitle: '왜 SyncnetPlatform 인가요?',
    featuresSubtitle: '검증된 분산 코어 엔진 위에 스튜디오 고유의 게임플레이와 비즈니스 로직을 유연하게 결합합니다.',
    features: [
      {
        tag: '01 · ZERO-COST CORE',
        title: '라이선스 비용 없는 코어 솔루션',
        desc: '매치메이킹, 실시간 세션, 인벤토리, 랭킹 및 OIDC 인증 파이프라인을 초기 비용과 CCU 로열티 없이 즉시 도입할 수 있습니다.'
      },
      {
        tag: '02 · BESPOKE ARCHITECTURE',
        title: '프로젝트 맞춤형 아키텍처 설계',
        desc: '단일 코옵 액션부터 대규모 심리스 월드까지, 게임 고유의 서버 권위 로직과 데이터 파이프라인을 직접 커스터마이징합니다.'
      },
      {
        tag: '03 · DEDICATED LIVE-OPS',
        title: '론칭부터 라이브까지 전담 지원',
        desc: '부하 테스트, 프로파일링 최적화, 무중단 배포 및 긴급 장애 대응까지 시니어 백엔드 엔지니어 팀이 밀착 지원합니다.'
      }
    ],
    ctaTitle: '출시 알림 및 사전 기술 상담 신청',
    ctaDesc: '서비스 오픈 소식과 초기 파트너 스튜디오 커스터마이징 우선 혜택을 가장 먼저 받아보세요.',
    emailPlaceholder: '업무용 이메일 주소를 입력하세요 (예: dev@studio.com)',
    submitBtn: '사전 등록하기',
    submittingBtn: '접수 중...',
    customToggleLabel: '커스터마이징 / 아키텍처 기술 지원 사전 문의 함께 접수하기',
    engineOptions: [
      { value: 'ue5', label: 'Unreal Engine 5' },
      { value: 'unity', label: 'Unity (NGO / Mirror / Custom)' },
      { value: 'godot', label: 'Godot 4' },
      { value: 'custom', label: 'Custom / In-house Engine' }
    ],
    notePlaceholder: '예상 장르 또는 필요한 백엔드 기능 (선택)',
    successMsg: (email, withCustom) =>
      withCustom
        ? `감사합니다! (${email}) 출시 알림과 커스터마이징 기술 상담 요청이 함께 접수되었습니다.`
        : `감사합니다! (${email}) 서비스 출시 알림이 정상적으로 등록되었습니다.`,
    footer: '© 2026 눈오는밤 (Snowy Night Inc.) · SyncnetPlatform. All rights reserved.'
  },
  en: {
    brandName: 'SNOWY NIGHT',
    brandSub: 'SyncnetPlatform',
    badge: 'COMING SOON · NEXT-GEN GAME BACKEND INFRASTRUCTURE',
    heroTitleTop: 'Core Backend',
    heroTitleHighlight1: '100% Free',
    heroTitleMid: ',',
    heroTitleBottom: 'Scale with',
    heroTitleHighlight2: 'Tailored Engineering',
    heroTitleEnd: '.',
    heroDescLine1: 'We provide a high-throughput game backend engine built on distributed virtual actors and ultra-low latency protocols—completely free.',
    heroDescLine2: 'Snowy Night delivers bespoke architecture customization and dedicated engineering support tailored to your title.',
    metrics: [
      { label: 'Core Licensing Fee', value: '$0 / Unlimited CCU' },
      { label: 'Serialization Overhead', value: 'Zero-Copy FlatBuffers' },
      { label: 'Runtime Foundation', value: 'Distributed Virtual Actor' }
    ],
    featuresTitle: 'Why SyncnetPlatform?',
    featuresSubtitle: 'Combine a battle-tested distributed core engine with bespoke server logic built specifically for your game.',
    features: [
      {
        tag: '01 · ZERO-COST CORE',
        title: 'Zero-Cost Core Backend',
        desc: 'Deploy matchmaking, real-time sessions, inventory, leaderboards, and OIDC auth pipelines with zero licensing fees or CCU royalties.'
      },
      {
        tag: '02 · BESPOKE ARCHITECTURE',
        title: 'Bespoke Architecture & Logic',
        desc: 'From co-op action titles to large-scale worlds, we customize server-authoritative game logic and data pipelines for your exact needs.'
      },
      {
        tag: '03 · DEDICATED LIVE-OPS',
        title: 'Dedicated Live-Ops Support',
        desc: 'Senior backend engineers partner with your studio from load testing and profiling to zero-downtime launches and live-ops response.'
      }
    ],
    ctaTitle: 'Get Notified & Request Early Consultation',
    ctaDesc: 'Be the first to know when we launch and secure priority customization onboarding for your studio.',
    emailPlaceholder: 'Enter your work email (e.g. dev@studio.com)',
    submitBtn: 'Notify Me',
    submittingBtn: 'Submitting...',
    customToggleLabel: 'Include pre-launch inquiry for customization & architecture support',
    engineOptions: [
      { value: 'ue5', label: 'Unreal Engine 5' },
      { value: 'unity', label: 'Unity (NGO / Mirror / Custom)' },
      { value: 'godot', label: 'Godot 4' },
      { value: 'custom', label: 'Custom / In-house Engine' }
    ],
    notePlaceholder: 'Target genre or desired backend features (Optional)',
    successMsg: (email, withCustom) =>
      withCustom
        ? `Thank you! Launch alert and customization consultation request confirmed for ${email}.`
        : `Thank you! Launch notification registered for ${email}.`,
    footer: '© 2026 Snowy Night Inc. · SyncnetPlatform. All rights reserved.'
  }
};
