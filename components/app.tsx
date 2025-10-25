"use client";

import { useEffect, useEffectEvent, useState } from "react";
import { useTheme } from "next-themes";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { IconMenu2 } from "@tabler/icons-react";
import ThemeIcons from "@/components/theme/theme-icons";
import { Sidebar } from "@/components/sidebar/sidebar";
import { Terminal } from "@/components/terminal/terminal";
export type Theme = "dark" | "light" | "system";

export default function App() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const onMount = useEffectEvent(() => {
    setMounted(true);
  });

  useEffect(() => {
    onMount();
  }, []);

  if (!mounted) {
    return null;
  }
  // resolvedTheme gives us "dark" or "light" even when theme is "system"
  const effectiveTheme = (resolvedTheme as "dark" | "light") || "dark";

  const bgColor = effectiveTheme === "dark" ? "bg-[#1e1e2e]" : "bg-[#eff1f5]";
  const borderColor =
    effectiveTheme === "dark" ? "border-[#313244]" : "border-[#dce0e8]";
  const bgSecondary =
    effectiveTheme === "dark" ? "bg-[#181825]" : "bg-[#e6e9ef]";
  const textPrimary =
    effectiveTheme === "dark" ? "text-[#cdd6f4]" : "text-[#4c4f69]";

  return (
    <div
      className={`min-h-screen ${bgColor} flex items-center justify-center p-2 sm:p-4`}
    >
      <div
        className={`w-full max-w-7xl h-[calc(100svh-1rem)] sm:h-[700px] ${bgColor}
          rounded-lg shadow-2xl border ${borderColor}
          overflow-x-hidden overflow-y-visible
          flex flex-col md:flex-row`}
      >
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar theme={effectiveTheme} />
        </div>

        {/* Mobile Sidebar - Sheet */}
        <div className="md:hidden">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetContent
              side="left"
              className={`${bgSecondary} ${borderColor} p-0 w-80`}
            >
              <Sidebar theme={effectiveTheme} />
            </SheetContent>
          </Sheet>
        </div>

        {/* Mobile Header with Menu Button */}
        <div
          className={`md:hidden ${bgSecondary} px-4 py-3 flex items-center gap-3 border-b ${borderColor}`}
        >
          <button
            title="Menu"
            type="button"
            onClick={() => setSidebarOpen(true)}
            className={`p-2 rounded-lg ${bgColor} ${textPrimary} hover:opacity-80 transition-opacity`}
          >
            <IconMenu2 className="w-5 h-5" />
          </button>
          <div className={`${textPrimary} text-sm flex-1`}>
            penLelis@terminal ~ zsh
          </div>

          <ThemeIcons
            theme={effectiveTheme}
            currentTheme={(theme as Theme) || "dark"}
            onThemeChange={newTheme => setTheme(newTheme)}
          />
        </div>

        <Terminal
          theme={effectiveTheme}
          currentTheme={(theme as Theme) || "dark"}
          onThemeChange={newTheme => setTheme(newTheme)}
          isMobile={false}
        />
      </div>
    </div>
  );
}
