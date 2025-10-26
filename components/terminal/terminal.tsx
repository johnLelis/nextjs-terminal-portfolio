"use client";
import { Theme } from "../app";

import { TerminalInput } from "./terminal-input";
import { useTerminal } from "./use-terminal";
import TerminalHeader from "./terminal-header";
import HistoryItem from "./history-item";

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

  return (
    <div className="flex-1 bg-color flex flex-col">
      <TerminalHeader
        currentTheme={currentTheme}
        onThemeChange={onThemeChange}
      />

      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-3 sm:p-4 font-mono text-xs sm:text-sm relative"
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
    </div>
  );
}
