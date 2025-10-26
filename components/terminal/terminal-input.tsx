import { forwardRef } from "react";
import Prompt from "./prompt";

interface TerminalInputProps {
  input: string;
  suggestion: string;
  onInputChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(
  ({ input, suggestion, onInputChange, onKeyDown, onSubmit }, ref) => {
    return (
      <form onSubmit={onSubmit} className="flex items-center gap-2 prompt-glow">
        <Prompt />
        <div className="relative flex-1">
          <input
            id="terminalInput"
            ref={ref}
            type="text"
            value={input}
            onChange={e => onInputChange(e.target.value)}
            onKeyDown={onKeyDown}
            className="w-full bg-transparent text-primary outline-none caret-pink"
            aria-label="Command input"
            autoFocus
            spellCheck={false}
          />
          {suggestion && input && (
            <span className="absolute left-0 pointer-events-none opacity-30 text-primary">
              {suggestion}
            </span>
          )}
        </div>
      </form>
    );
  }
);

TerminalInput.displayName = "TerminalInput";
