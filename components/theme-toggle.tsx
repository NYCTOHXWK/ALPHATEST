"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const DEVICE_ID_KEY = "portfolio-device-id";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(getThemeStorageKey());
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getThemeStorageKey() {
  const storedDeviceId = window.localStorage.getItem(DEVICE_ID_KEY);
  if (storedDeviceId) {
    return `theme:${storedDeviceId}`;
  }

  const generatedDeviceId = `${Math.random().toString(36).slice(2, 10)}-${Date.now().toString(36)}`;
  window.localStorage.setItem(DEVICE_ID_KEY, generatedDeviceId);
  return `theme:${generatedDeviceId}`;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const isDark = theme === "dark";
  const nextThemeLabel = isDark ? "light" : "dark";
  const nextThemeSymbol = isDark ? "☀" : "☾";

  useEffect(() => {
    const nextTheme = getPreferredTheme();
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = isDark ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(getThemeStorageKey(), nextTheme);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextThemeLabel} mode`}
      aria-pressed={isDark}
      title={`Switch to ${nextThemeLabel} mode`}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb" aria-hidden="true">
          {nextThemeSymbol}
        </span>
      </span>
    </button>
  );
}
