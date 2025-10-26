import { useState, useRef, useEffect } from "react";
import { Theme } from "../app";

import {
  SuccessOutput,
  ErrorOutput,
  InfoOutput,
  BlueOutput,
} from "./command-outputs";
import WelcomeMessage from "./welcome-message";
import HelpOutput from "./help-output";
import AboutOutput from "./about-output";
import SkillsOutput from "./skills-output";
import ProjectsOutput from "./projects-output";
import ExperienceOutput from "./experience-output";
import ContactOutput from "./contact-output";

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

const COMMANDS = [
  "help",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
  "theme",
  "clear",
  "whoami",
  "ls",
  "date",
];

export const useTerminal = (onThemeChange: (theme: Theme) => void) => {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>(() => [
    { command: "", output: <WelcomeMessage /> },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Auto-focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Update suggestion
  const updateSuggestion = (value: string) => {
    if (value) {
      const match = COMMANDS.find(cmd => cmd.startsWith(value.toLowerCase()));
      setSuggestion(match || "");
    } else {
      setSuggestion("");
    }
  };

  const handleInputChange = (value: string) => {
    setInput(value);
    updateSuggestion(value);
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
          return <SuccessOutput>Theme changed to: {newTheme}</SuccessOutput>;
        }
        return (
          <ErrorOutput>
            Invalid theme. Usage: theme [dark|light|system]
          </ErrorOutput>
        );
      }
      case "clear":
        setHistory([]);
        return null;
      case "whoami":
        return <InfoOutput>penLelis.dev</InfoOutput>;
      case "date":
        return <div className="text-primary">{new Date().toString()}</div>;
      case "ls":
        return (
          <BlueOutput>
            <div className="flex gap-4">
              <span>about.txt</span>
              <span>skills.json</span>
              <span>projects/</span>
              <span>contact.md</span>
            </div>
          </BlueOutput>
        );
      default:
        return (
          <ErrorOutput>
            Command not found: {command}. Type {"help"} for available commands.
          </ErrorOutput>
        );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const trimmedInput = input.trim();

    if (trimmedInput === "clear") {
      setHistory([{ command: "", output: null }]);
      setInput("");
      setSuggestion("");
      return;
    }

    const output = executeCommand(trimmedInput);
    setHistory([...history, { command: trimmedInput, output }]);
    setCommandHistory([...commandHistory, trimmedInput]);
    setHistoryIndex(-1);
    setInput("");
    setSuggestion("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Autocomplete with Tab or Right Arrow
    if ((e.key === "Tab" || e.key === "ArrowRight") && suggestion && input) {
      e.preventDefault();
      setInput(suggestion);
      setSuggestion("");
      return;
    }

    // Navigate command history
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
        setSuggestion("");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
          setSuggestion("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
          setSuggestion("");
        }
      }
    }
  };

  return {
    input,
    suggestion,
    history,
    inputRef,
    terminalRef,
    handleInputChange,
    handleSubmit,
    handleKeyDown,
  };
};
