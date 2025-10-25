"use client";
import { useState, useRef, useEffect } from "react";
import {
  IconChevronRight,
  IconFolder,
  IconGitBranch,
} from "@tabler/icons-react";

import {
  WelcomeMessage,
  HelpOutput,
  AboutOutput,
  SkillsOutput,
  ProjectsOutput,
  ExperienceOutput,
  ContactOutput,
} from "@/components/terminal/terminal-outputs";

import ThemeIcons from "../theme/theme-icons";
import { Theme } from "../app";

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export interface TerminalProps {
  theme: "dark" | "light";
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
  isMobile?: boolean;
}

export function Terminal({
  theme,
  currentTheme,
  onThemeChange,
}: TerminalProps) {
  const [input, setInput] = useState("");
  // Initialize history with welcome message directly
  const [history, setHistory] = useState<CommandOutput[]>(() => [
    {
      command: "",
      output: <WelcomeMessage />,
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const trimmedInput = input.trim();

    if (trimmedInput === "clear") {
      setHistory([
        {
          command: "",
          output: null,
        },
      ]);
      setInput("");
      return;
    }
    const output = executeCommand(trimmedInput);

    setHistory([...history, { command: trimmedInput, output }]);
    setCommandHistory([...commandHistory, trimmedInput]);
    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  const executeCommand = (cmd: string): React.ReactNode => {
    const args = cmd.split(" ");
    const command = args[0].toLowerCase();

    switch (command) {
      case "help":
        return <HelpOutput />;
      case "about":
        return <AboutOutput />;
      case "skills":
        return <SkillsOutput />;
      case "projects":
        return <ProjectsOutput />;
      case "experience":
        return <ExperienceOutput />;
      case "contact":
        return <ContactOutput />;
      case "theme": {
        const newTheme = args[1]?.toLowerCase();
        if (
          newTheme === "dark" ||
          newTheme === "light" ||
          newTheme === "system"
        ) {
          onThemeChange(newTheme);
          return (
            <div
              className={theme === "dark" ? "text-[#a6e3a1]" : "text-[#40a02b]"}
            >
              Theme changed to: {newTheme}
            </div>
          );
        } else {
          return (
            <div
              className={theme === "dark" ? "text-[#f38ba8]" : "text-[#d20f39]"}
            >
              Invalid theme. Usage: theme [dark|light|system]
            </div>
          );
        }
      }
      case "clear":
        setHistory([]);
        return null;
      case "whoami":
        return (
          <div
            className={theme === "dark" ? "text-[#89dceb]" : "text-[#209fb5]"}
          >
            penLelis.dev
          </div>
        );
      case "date":
        return (
          <div
            className={theme === "dark" ? "text-[#cdd6f4]" : "text-[#4c4f69]"}
          >
            {new Date().toString()}
          </div>
        );
      case "ls":
        return (
          <div
            className={`flex gap-4 ${
              theme === "dark" ? "text-[#89b4fa]" : "text-[#1e66f5]"
            }`}
          >
            <span>about.txt</span>
            <span>skills.json</span>
            <span>projects/</span>
            <span>contact.md</span>
          </div>
        );
      default:
        return (
          <div
            className={theme === "dark" ? "text-[#f38ba8]" : "text-[#d20f39]"}
          >
            Command not found: {command}. Type {"help"} for available commands.
          </div>
        );
    }
  };

  const bgPrimary = theme === "dark" ? "bg-[#1e1e2e]" : "bg-[#eff1f5]";
  const bgSecondary = theme === "dark" ? "bg-[#181825]" : "bg-[#e6e9ef]";
  const borderColor =
    theme === "dark" ? "border-[#313244]" : "border-[#dce0e8]";
  const textPrimary = theme === "dark" ? "text-[#cdd6f4]" : "text-[#4c4f69]";

  return (
    <div className={`flex-1 ${bgPrimary} flex flex-col`}>
      {/* Terminal Header - Hidden on mobile */}
      <div
        className={`hidden md:flex ${bgSecondary} px-4 py-3 items-center justify-between border-b ${borderColor}`}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#cb3b64]"></div>
            <div className="w-3 h-3 rounded-full bg-[#e9bc5b]"></div>
            <div className="w-3 h-3 rounded-full bg-[#4bbb41]"></div>
          </div>
          <div className={`ml-4 ${textPrimary} text-sm`}>
            penLelis.dev@terminal ~ zsh
          </div>
        </div>
        <ThemeIcons
          theme={theme}
          currentTheme={currentTheme}
          onThemeChange={onThemeChange}
        />
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-3 sm:p-4 font-mono text-xs sm:text-sm relative"
      >
        {history.map((item, index) => (
          <div key={index} className="mb-4">
            {item.command && (
              <div className="flex items-center gap-2 mb-2">
                <Prompt theme={theme} />
                <span className={textPrimary}>{item.command}</span>
              </div>
            )}
            <div className="ml-0">{item.output}</div>
          </div>
        ))}

        {/* Current Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <Prompt theme={theme} />
          <input
            id="terminalInput"
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`flex-1 bg-transparent ${textPrimary} outline-none ${
              theme === "dark" ? "caret-[#f5e0dc]" : "caret-[#dc8a78]"
            }`}
            aria-label="Command input"
            autoFocus
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
}

function Prompt({ theme }: { theme: "dark" | "light" }) {
  const folderBg = theme === "dark" ? "bg-[#89b4fa]" : "bg-[#1e66f5]";
  const gitBg = theme === "dark" ? "bg-[#a6e3a1]" : "bg-[#40a02b]";
  const chevronColor = theme === "dark" ? "text-[#a6e3a1]" : "text-[#40a02b]";
  const textColor = theme === "dark" ? "text-[#1e1e2e]" : "text-[#eff1f5]";

  return (
    <div className="flex items-center gap-1 sm:gap-2 shrink-0">
      <div
        className={`flex items-center gap-1 sm:gap-1.5 ${folderBg} ${textColor} px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs`}
      >
        <IconFolder className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
        <span className="xs:hidden">~</span>
      </div>
      <div
        className={`flex items-center gap-1 sm:gap-1.5 ${gitBg} ${textColor} px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs`}
      >
        <IconGitBranch className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
        <span>main</span>
      </div>
      <IconChevronRight
        className={`w-3 h-3 sm:w-4 sm:h-4 ${chevronColor} animate-pulse`}
      />
    </div>
  );
}
