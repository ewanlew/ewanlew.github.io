import { useEffect, useRef } from 'react';

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const dots = [];

    for (let i = 0; i < 100; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2
      });
    }

    let mouseX = null;
    let mouseY = null;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, width, height);
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#acacacff';
        ctx.fill();

        dot.x += dot.vx;
        dot.y += dot.vy;

        // bounce off edges
        if (dot.x < 0 || dot.x > width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > height) dot.vy *= -1;

        // draw lines
        for (let j = i + 1; j < dots.length; j++) {
          const other = dots[j];
          const dx = dot.x - other.x;
          const dy = dot.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(83, 83, 83,${1 - dist / 100})`;
            ctx.stroke();
          }
        }

        if (mouseX !== null && mouseY !== null) {
          const dx = dot.x - mouseX;
          const dy = dot.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const minDist = 50;
          if (dist < minDist && dist > 0) {
            const force = (minDist - dist) / minDist; // range from 1 (close) to 0 (far)
            const angle = Math.atan2(dy, dx);

            dot.vx += Math.cos(angle) * force * 0.005;
            dot.vy += Math.sin(angle) * force * 0.005;
          }
        }
      }

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      const xRatio = newWidth / width;
      const yRatio = newHeight / height;

      dots.forEach(dot => {
        dot.x *= xRatio;
        dot.y *= yRatio;
      });

      width = canvas.width = newWidth;
      height = canvas.height = newHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      }}
    />
  );
}

export default Background;
