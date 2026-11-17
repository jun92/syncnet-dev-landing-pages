<script>
  import { onMount } from 'svelte';

  let canvasEl;

  onMount(() => {
    const ctx = canvasEl.getContext('2d');
    let width = (canvasEl.width = window.innerWidth);
    let height = (canvasEl.height = window.innerHeight);
    let animationId;

    const mouse = { x: -9999, y: -9999 };

    const handleResize = () => {
      width = canvasEl.width = window.innerWidth;
      height = canvasEl.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const nodeCount = Math.min(72, Math.floor((width * height) / 18000));
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.38,
      vy: Math.random() * 0.45 + 0.18,
      r: Math.random() * 2.1 + 1.1,
      isAccent: Math.random() > 0.78
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;

        if (a.x < 0) a.x = width;
        if (a.x > width) a.x = 0;
        if (a.y > height) {
          a.y = -5;
          a.x = Math.random() * width;
        }

        // 마우스 주변 노드 인력 및 하이라이트
        const mdx = mouse.x - a.x;
        const mdy = mouse.y - a.y;
        const mDist = Math.hypot(mdx, mdy);
        if (mDist < 190) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(129, 140, 248, ${(1 - mDist / 190) * 0.35})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = a.isAccent
          ? 'rgba(56, 189, 248, 0.85)'
          : 'rgba(226, 232, 240, 0.55)';
        ctx.fill();

        // 노드 간 분산 메시 연결
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 145) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - dist / 145) * 0.22})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  });
</script>

<canvas
  bind:this={canvasEl}
  class="pointer-events-none fixed inset-0 z-0 h-full w-full"
  aria-hidden="true"
></canvas>
