"use client";

import { useRef, useState } from "react";

export default function BeforeAfter({
  before,
  after,
  beforeAlt = "Before",
  afterAlt = "After",
}: {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
}) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = (clientX: number) => {
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    setPos((x / rect.width) * 100);
  };

  return (
    <div
      ref={sliderRef}
      className="ba-slider"
      onMouseDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        setFromClientX(e.touches[0].clientX);
      }}
      onMouseMove={(e) => {
        if (dragging.current) setFromClientX(e.clientX);
      }}
      onTouchMove={(e) => {
        if (dragging.current) setFromClientX(e.touches[0].clientX);
      }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchEnd={() => (dragging.current = false)}
    >
      <img className="ba-slider__img" src={before} alt={beforeAlt} />
      <img
        className="ba-slider__img ba-slider__img--after"
        src={after}
        alt={afterAlt}
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <span className="ba-slider__label ba-slider__label--before">Before</span>
      <span className="ba-slider__label ba-slider__label--after">After</span>
      <div className="ba-slider__handle" style={{ left: `${pos}%` }}>
        <span className="ba-slider__arrows">‹ ›</span>
      </div>
    </div>
  );
}
