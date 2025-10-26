import { Theme } from "@/components/app";
import ThemeIcons from "@/components/theme/theme-icons";

interface TerminalHeaderProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}
const TerminalHeader = ({
  currentTheme,
  onThemeChange,
}: TerminalHeaderProps) => {
  return (
    <div className="hidden md:flex bg-secondary px-4 py-3 items-center justify-between border-b border-color">
      <div className="flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#cb3b64]" />
          <div className="w-3 h-3 rounded-full bg-[#e9bc5b]" />
          <div className="w-3 h-3 rounded-full bg-[#4bbb41]" />
        </div>
        <div className="ml-4 text-primary text-sm">
          penLelis.dev@terminal ~ zsh
        </div>
      </div>
      <ThemeIcons currentTheme={currentTheme} onThemeChange={onThemeChange} />
    </div>
  );
};
export default TerminalHeader;
