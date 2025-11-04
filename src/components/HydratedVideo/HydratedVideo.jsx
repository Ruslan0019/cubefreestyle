"use client";

import { useEffect, useRef, useState } from "react";

export default function HydratedVideo() {
  const ref = useRef(null);
  const [canPlay, setCanPlay] = useState(false);
  // по умолчанию считаем, что экран мобильный/планшет
  const [isMobile, setIsMobile] = useState(true);

  // Определяем, мобильный (до 1024) или нет
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(max-width: 1023px)");

    const update = () => {
      setIsMobile(mq.matches);
    };

    update();

    if (mq.addEventListener) {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    }

    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  // Ленивая подгрузка видео только на НЕ-мобилках (>= 1024px)
  useEffect(() => {
    if (isMobile) return;

    const connection = navigator.connection;
    const saveData = connection?.saveData;
    const slow = ["slow-2g", "2g"].includes(connection?.effectiveType || "");

    if (saveData || slow) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCanPlay(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (ref.current) io.observe(ref.current);

    return () => io.disconnect();
  }, [isMobile]);

  // До 1024px — всегда только постер (Image под этим div’ом)
  // и пока видео не разрешено — тоже только постер.
  if (isMobile || !canPlay) {
    return <div ref={ref} className="absolute inset-0" aria-hidden="true" />;
  }

  // Десктоп (>= 1024) — показываем видео поверх постера
  return (
    <video
      className="absolute inset-0 w-full h-full object-cover z-0"
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      aria-hidden="true"
    >
      <source src="/videos/freestyle.webm" type="video/webm" />
    </video>
  );
}
