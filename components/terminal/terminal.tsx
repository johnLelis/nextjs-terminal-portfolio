"use client";
import { useState } from "react";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import { Theme } from "../app";
import HistoryItem from "./components/history-item";
import TerminalHeader from "./components/terminal-header";
import { TerminalInput } from "./components/terminal-input";
import { useTerminal } from "./hooks/use-terminal";

export interface TerminalProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export function Terminal({ currentTheme, onThemeChange }: TerminalProps) {
  const {
    input,
    suggestion,
    history,
    inputRef,
    terminalRef,
    handleInputChange,
    handleSubmit,
    handleKeyDown,
  } = useTerminal(onThemeChange);

  const [showTopButton, setShowTopButton] = useState(false);
  const [showBottomButton, setShowBottomButton] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    const clientHeight = target.clientHeight;

    setShowTopButton(scrollTop > 100);
    setShowBottomButton(scrollTop < scrollHeight - clientHeight - 100);
  };

  const scrollToTop = () => {
    terminalRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex-1 bg-color flex flex-col">
      <TerminalHeader
        currentTheme={currentTheme}
        onThemeChange={onThemeChange}
      />

      <div className="flex-1 relative">
        <div
          className={`scroll-indicator-top ${showTopButton ? "visible" : ""}`}
        />

        <div
          ref={terminalRef}
          onScroll={handleScroll}
          className="hide-scrollbar absolute inset-0 overflow-y-auto p-3 sm:p-4 font-mono text-xs sm:text-sm"
        >
          {history.map((item, index) => (
            <HistoryItem
              key={index}
              command={item.command}
              output={item.output}
            />
          ))}

          <TerminalInput
            ref={inputRef}
            input={input}
            suggestion={suggestion}
            onInputChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onSubmit={handleSubmit}
          />
        </div>

        <div
          className={`scroll-indicator-bottom ${
            showBottomButton ? "visible" : ""
          }`}
        />

        {showTopButton && (
          <button
            type="button"
            onClick={scrollToTop}
            className="scroll-button scroll-button-top"
            aria-label="Scroll to top"
          >
            <IconChevronUp className="w-4 h-4" />
          </button>
        )}

        {showBottomButton && (
          <button
            type="button"
            onClick={scrollToBottom}
            className="scroll-button scroll-button-bottom"
            aria-label="Scroll to bottom"
          >
            <IconChevronDown className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
