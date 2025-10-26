"use client";
import { IconSun, IconMoon, IconDeviceDesktop } from "@tabler/icons-react";
import { Theme } from "@/components/app";
import { useState, useEffect, useEffectEvent } from "react";

interface ThemeIconsProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const ThemeIcons = ({ currentTheme, onThemeChange }: ThemeIconsProps) => {
  const [mounted, setMounted] = useState(false);

  const onMount = useEffectEvent(() => {
    setMounted(true);
  });

  useEffect(() => {
    onMount();
  }, []);

  const getButtonClass = (themeType: Theme) => {
    const isActive = currentTheme === themeType;

    if (isActive) {
      const activeColors = {
        light: "bg-secondary text-yellow",
        dark: "bg-secondary text-blue",
        system: "bg-secondary text-green",
      };
      return `p-1.5 rounded transition-colors ${activeColors[themeType]}`;
    }

    return "p-1.5 rounded transition-colors text-tertiary hover:text-primary hover:bg-secondary";
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => onThemeChange("light")}
        className={getButtonClass("light")}
        title="Light theme"
        aria-label="Light theme"
      >
        <IconSun className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => onThemeChange("dark")}
        className={getButtonClass("dark")}
        title="Dark theme"
        aria-label="Dark theme"
      >
        <IconMoon className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => onThemeChange("system")}
        className={getButtonClass("system")}
        title="System theme"
        aria-label="System theme"
      >
        <IconDeviceDesktop className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ThemeIcons;
