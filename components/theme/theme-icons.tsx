import { IconSun, IconMoon, IconDeviceDesktop } from "@tabler/icons-react";
import type { TerminalProps } from "@/components/terminal/terminal";

const ThemeIcons = ({ theme, currentTheme, onThemeChange }: TerminalProps) => {
  return (
    <>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => onThemeChange("light")}
          className={`p-1.5 rounded transition-colors ${
            currentTheme === "light"
              ? theme === "dark"
                ? "bg-[#313244] text-[#f9e2af]"
                : "bg-[#dce0e8] text-[#df8e1d]"
              : theme === "dark"
              ? "text-[#6c7086] hover:text-[#cdd6f4] hover:bg-[#313244]"
              : "text-[#9ca0b0] hover:text-[#4c4f69] hover:bg-[#dce0e8]"
          }`}
          title="Light theme"
        >
          <IconSun className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => onThemeChange("dark")}
          className={`p-1.5 rounded transition-colors ${
            currentTheme === "dark"
              ? theme === "dark"
                ? "bg-[#313244] text-[#89b4fa]"
                : "bg-[#dce0e8] text-[#1e66f5]"
              : theme === "dark"
              ? "text-[#6c7086] hover:text-[#cdd6f4] hover:bg-[#313244]"
              : "text-[#9ca0b0] hover:text-[#4c4f69] hover:bg-[#dce0e8]"
          }`}
          title="Dark theme"
        >
          <IconMoon className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => onThemeChange("system")}
          className={`p-1.5 rounded transition-colors ${
            currentTheme === "system"
              ? theme === "dark"
                ? "bg-[#313244] text-[#a6e3a1]"
                : "bg-[#dce0e8] text-[#40a02b]"
              : theme === "dark"
              ? "text-[#6c7086] hover:text-[#cdd6f4] hover:bg-[#313244]"
              : "text-[#9ca0b0] hover:text-[#4c4f69] hover:bg-[#dce0e8]"
          }`}
          title="System theme"
        >
          <IconDeviceDesktop className="w-4 h-4" />
        </button>
      </div>
    </>
  );
};
export default ThemeIcons;
