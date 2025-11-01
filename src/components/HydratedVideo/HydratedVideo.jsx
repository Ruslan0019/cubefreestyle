// app/components/HydratedVideo.jsx  (Client Component)
"use client";
import { useEffect, useRef, useState } from "react";

export default function HydratedVideo() {
  const ref = useRef(null);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    // 1) Не трогаем мобильных пользователей со слабой сетью
    const saveData = navigator.connection?.saveData;
    const slow = ["slow-2g", "2g"].includes(
      navigator.connection?.effectiveType || ""
    );
    if (saveData || slow) return;

    // 2) Включаем, когда секция попала в вьюпорт
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setCanPlay(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  if (!canPlay)
    return <div ref={ref} className="absolute inset-0" aria-hidden="true" />;

  return (
    <video
      className="absolute inset-0 w-full h-full object-cover z-0"
      poster="/uploads/poster.webp"
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      aria-hidden="true"
    >
      <source
        src="/videos/freestyle.webm"
        type="video/webm"
        media="(max-width: 767px)"
      />
      <source src="/videos/freestyle.webm" type="video/webm" />
    </video>
  );
}
