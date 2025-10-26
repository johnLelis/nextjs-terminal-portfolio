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

  return (
    <div
      className={`min-h-screen bg-color flex items-center justify-center p-2 sm:p-4`}
    >
      <div
        className={`w-full max-w-7xl h-[calc(100svh-1rem)] sm:h-[700px] bg-color
          rounded-lg shadow-2xl border border-color
          overflow-x-hidden overflow-y-visible
          flex flex-col md:flex-row`}
      >
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Mobile Sidebar - Sheet */}
        <div className="md:hidden">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetContent
              side="left"
              className={`bg-primary border-color p-0 w-80`}
            >
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>

        {/* Mobile Header with Menu Button */}
        <div
          className={`md:hidden bg-primary px-4 py-3 flex items-center gap-3 border-b border-color`}
        >
          <button
            title="Menu"
            type="button"
            onClick={() => setSidebarOpen(true)}
            className={`p-2 rounded-lg bg-color text-primary hover:opacity-80 transition-opacity`}
          >
            <IconMenu2 className="w-5 h-5" />
          </button>
          <div className={`text-primary text-sm flex-1`}>
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
