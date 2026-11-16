(function () {
  function initTeaser() {
    // 1. 다국어(KO/EN) 전환 처리
    const savedLang = localStorage.getItem('syncnet_lang') || 'ko';
    setLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-set-lang');
        setLanguage(lang);
      });
    });

    function setLanguage(lang) {
      document.body.setAttribute('data-current-lang', lang);
      localStorage.setItem('syncnet_lang', lang);

      document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-set-lang') === lang);
      });

      document.querySelectorAll('[data-placeholder-' + lang + ']').forEach(el => {
        el.setAttribute('placeholder', el.getAttribute('data-placeholder-' + lang));
      });
    }

    // 2. 커스터마이징 문의 토글 및 폼 제출 처리
    const needCustom = document.getElementById('need-custom');
    const customFields = document.getElementById('custom-fields');
    const form = document.getElementById('teaser-form');
    const feedback = document.getElementById('form-feedback');

    if (needCustom && customFields) {
      needCustom.addEventListener('change', () => {
        customFields.classList.toggle('hidden', !needCustom.checked);
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('user-email').value.trim();
        if (!email) return;

        const lang = document.body.getAttribute('data-current-lang') || 'ko';
        feedback.textContent = lang === 'ko'
          ? `감사합니다! (${email}) 출시 알림 및 사전 문의가 정상 접수되었습니다.`
          : `Thank you! Pre-launch registration confirmed for ${email}.`;
        form.reset();
        if (customFields) customFields.classList.add('hidden');
      });
    }

    // 3. 분산 네트워크 & 눈꽃 파티클 배경 애니메이션
    const canvas = document.getElementById('network-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const nodes = Array.from({ length: 48 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: Math.random() * 0.4 + 0.15,
      r: Math.random() * 2 + 1.2
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;

        if (a.x < 0) a.x = width;
        if (a.x > width) a.x = 0;
        if (a.y > height) { a.y = 0; a.x = Math.random() * width; }

        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(186, 230, 253, 0.65)';
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - dist / 140) * 0.22})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  // MkDocs Material instant navigation 호환
  if (typeof document$ !== 'undefined') {
    document$.subscribe(initTeaser);
  } else {
    document.addEventListener('DOMContentLoaded', initTeaser);
  }
})();
