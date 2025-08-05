import { useEffect, useState } from 'react';

function CustomCursor() {
  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  const [isPressed, setIsPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailingPos, setTrailingPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isTouchDevice) return;

    let animationFrame;
    const animate = () => {
      setTrailingPos(prev => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [position, isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: trailingPos.x,
          top: trailingPos.y,
          transform: 'translate(-50%, -50%)',
          width: isPressed ? '28px' : '14px',
          height: isPressed ? '28px' : '14px',
          borderRadius: '50%',
          backgroundColor: 'white',
          opacity: 0.15,
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          transition: 'width 0.2s ease, height 0.2s ease',
          zIndex: 9998,
        }}
      />
      <div
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          width: isPressed ? '20px' : '8px',
          height: isPressed ? '20px' : '8px',
          borderRadius: '50%',
          backgroundColor: 'white',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          transition: 'width 0.15s ease, height 0.15s ease',
          zIndex: 9999,
        }}
      />
      <style>{`* { cursor: none !important; }`}</style>
    </>
  );
}

export default CustomCursor;
