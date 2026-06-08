"use client";
import { useState, useEffect, useCallback } from "react";

export default function MottoCarousel({ mottos }: { mottos: string[] }) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 300);
  }, []);

  const prev = useCallback(() => {
    goTo((current - 1 + mottos.length) % mottos.length);
  }, [current, mottos.length, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % mottos.length);
  }, [current, mottos.length, goTo]);

  useEffect(() => {
    if (mottos.length <= 1) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, mottos.length]);

  const showControls = mottos.length > 1;

  return (
    <div className="text-center max-w-4xl px-16 relative">
      {showControls && (
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl text-gray-300 hover:text-[#E8503E] transition-colors leading-none"
          aria-label="Vorheriges Motto"
        >
          ‹
        </button>
      )}

      <div className={`transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}>
        <div className="accent-bar mx-auto mb-8" />
        <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight shimmer-text">
          &bdquo;{mottos[current]}&ldquo;
        </p>
        <div className="accent-bar mx-auto mt-8" />
      </div>

      {showControls && (
        <>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl text-gray-300 hover:text-[#E8503E] transition-colors leading-none"
            aria-label="Nächstes Motto"
          >
            ›
          </button>
          <div className="flex justify-center gap-2 mt-6">
            {mottos.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-[#E8503E]" : "bg-gray-300"
                }`}
                aria-label={`Motto ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
