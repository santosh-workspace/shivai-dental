"use client";

import { useEffect, useState } from "react";

const themes: Record<string, { color: string; vars: Record<string, string> }> = {
  blue: {
    color: "#0066cc",
    vars: {
      "--accent": "#0066cc",
      "--accent-hover": "#0052a3",
      "--accent-deep": "#004080",
      "--border": "rgba(0, 102, 204, 0.12)",
      "--border-strong": "rgba(0, 102, 204, 0.3)",
    },
  },
  green: {
    color: "#16a34a",
    vars: {
      "--accent": "#16a34a",
      "--accent-hover": "#15803d",
      "--accent-deep": "#14532d",
      "--border": "rgba(22, 163, 74, 0.12)",
      "--border-strong": "rgba(22, 163, 74, 0.3)",
    },
  },
  purple: {
    color: "#7c3aed",
    vars: {
      "--accent": "#7c3aed",
      "--accent-hover": "#6d28d9",
      "--accent-deep": "#5b21b6",
      "--border": "rgba(124, 58, 237, 0.12)",
      "--border-strong": "rgba(124, 58, 237, 0.3)",
    },
  },
  orange: {
    color: "#ea580c",
    vars: {
      "--accent": "#ea580c",
      "--accent-hover": "#c2410c",
      "--accent-deep": "#9a3412",
      "--border": "rgba(234, 88, 12, 0.12)",
      "--border-strong": "rgba(234, 88, 12, 0.3)",
    },
  },
  teal: {
    color: "#0d9488",
    vars: {
      "--accent": "#0d9488",
      "--accent-hover": "#0f766e",
      "--accent-deep": "#115e59",
      "--border": "rgba(13, 148, 136, 0.12)",
      "--border-strong": "rgba(13, 148, 136, 0.3)",
    },
  },
};

const themeList = [
  { id: "blue", label: "Blue" },
  { id: "green", label: "Green" },
  { id: "purple", label: "Purple" },
  { id: "orange", label: "Orange" },
  { id: "teal", label: "Teal" },
];

export default function ThemeSwitcher() {
  const [active, setActive] = useState("blue");
  const [open, setOpen] = useState(false);

  const apply = (id: string) => {
    setActive(id);
    const t = themes[id];
    Object.entries(t.vars).forEach(([k, v]) => {
      document.documentElement.style.setProperty(k, v);
    });
    localStorage.setItem("theme", id);
    setOpen(false);
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "blue";
    apply(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "var(--space-6)",
        left: "var(--space-6)",
        zIndex: 900,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "var(--space-3)",
      }}
    >
      {open && (
        <div
          style={{
            display: "flex",
            gap: "var(--space-2)",
            background: "var(--bg-card)",
            border: "1px solid var(--border-strong)",
            borderRadius: "var(--radius-pill)",
            padding: "var(--space-2) var(--space-3)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          {themeList.map((t) => (
            <button
              key={t.id}
              onClick={() => apply(t.id)}
              aria-label={t.label}
              title={t.label}
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: themes[t.id].color,
                border: active === t.id ? "3px solid var(--fg)" : "2px solid transparent",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
            />
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change color theme"
        title="Change color theme"
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "var(--accent)",
          color: "#fff",
          boxShadow: "var(--shadow-md)",
          display: "grid",
          placeItems: "center",
          fontSize: "1.25rem",
          border: "none",
          cursor: "pointer",
        }}
      >
        🎨
      </button>
    </div>
  );
}
