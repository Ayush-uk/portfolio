"use client";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { getCommandData } from "./CommandData";
import { isGlowCommand, isValidCommand } from "./data/commands";
import { terminalThemes } from "./data/themes";

type Line = {
  text?: string;
  type?: "info" | "error" | "success";
  component?: React.ReactNode;
};

type Props = {
  setTerminalMode: (v: boolean) => void;
  setUiType: (v: "landing" | "modular") => void;
};

const TerminalMode = ({ setTerminalMode, setUiType }: Props) => {
  const [history, setHistory] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [glow, setGlow] = useState(false);
  const commandData = getCommandData(setTerminalMode);
  const [commandHistory, setCommandHistory] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("terminalHistory");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          return [];
        }
      }
    }
    return [];
  });
  const [, setHistoryIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [theme, setTheme] = useState("blackboard");
  const currentTheme = terminalThemes[theme];

  const pushLine = (line: Line) => setHistory((prev) => [...prev, line]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

   pushLine({
    text: `ayush@terminal:~$ ${trimmed}`,
    type: "success",
});

    // Ensure we clear input and save history before any specific command logic
    setCommandHistory((prev) => {
      const newHistory = [...prev, trimmed];
      if (typeof window !== "undefined") {
        localStorage.setItem("terminalHistory", JSON.stringify(newHistory));
      }
      return newHistory;
    });
    setInput("");
    setHistoryIndex(null);
    setCursorPos(0);

    if (trimmed === "clear") {
      setHistory([]);
      return;
    }

    if (trimmed === "gui" || trimmed === "gui on" || trimmed === "exit") {
      pushLine({ text: "Switching to GUI mode...", type: "info" });
      setTimeout(() => setTerminalMode(false), 500);
      return;
    }

    if (trimmed.startsWith("settings")) {
      const args = trimmed.split(" ");
      const setting = args[1];
      const value = args[2];

      if (setting === "ui") {
        if (value === "landing" || value === "modular") {
          setUiType(value);
          pushLine({ text: `UI set to ${value}`, type: "success" });
        } else {
          pushLine({ text: "❌ Invalid UI type. Use 'landing' or 'modular'.", type: "error" });
        }
      } else {
        pushLine({ text: "Available settings: ui [landing|modular]", type: "info" });
      }
      return;
    }

    if (trimmed.startsWith("themes")) {
      const args = trimmed.split(" ");
      const command = args[1];
      const targetTheme = args[2];
      if (command === "list" || (command === "set" && targetTheme === "list")) {
        pushLine({
          component: (
            <ul className="list-disc ml-4">
              <strong> Available themes: </strong>
              {Object.keys(terminalThemes).map((theme) => (
                <li key={theme}>{theme}</li>
              ))}
            </ul>
          ),
          type: "info",
        });
        return;
      }
      if (targetTheme && terminalThemes.hasOwnProperty(targetTheme)) {
        setTheme(targetTheme);
        pushLine({ text: `Theme set to ${targetTheme}`, type: "success" });
      } else {
        pushLine({ text: "❌ Invalid theme name", type: "error" });
        pushLine({
          text: "Try 'themes list' for available themes",
          type: "info",
        });
        pushLine({ text: "Example usage: themes set onedark", type: "info" });
      }
      return;
    }

    if (isGlowCommand(trimmed)) {
      setGlow(trimmed === "glow on");
      pushLine({
        text: trimmed === "glow on" ? "✨ Glow enabled" : "❌ Glow disabled",
      });
      return;
    }

    if (isValidCommand(trimmed)) {
      const data = commandData[trimmed];
      if (data) {
        pushLine({ component: data, type: "info" });
      }
    } else {
      pushLine({
        text: `'${trimmed}' is not recognized. Type 'help' to see commands.`,
        type: "error",
      });
    }
  };

  const updateCursor = () => {
    if (inputRef.current) {
      setCursorPos(inputRef.current.selectionStart || 0);
    }
  };

  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      // Auto-run `whoami` on mount
      handleCommand("whoami");
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      const terminal = terminalRef.current;
      // Scroll to bottom instantly like a real terminal
      const scrollToBottom = () => {
        terminal.scrollTo({
          top: terminal.scrollHeight,
          behavior: "auto",
        });
      };

      scrollToBottom();
      // Also scroll after a tiny delay in case images or layout shifts occur
      setTimeout(scrollToBottom, 50);
    }
  }, [history]);

  useEffect(() => {
    if (terminalRef.current && input.length > 0) {
      terminalRef.current.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: "auto",
      });
    }
  }, [input]);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      onClick={handleContainerClick}
      className={clsx(
        "relative h-dvh flex flex-col overflow-hidden bg-[#08090b] px-3 py-4 font-mono text-[13px] transition-colors duration-500 sm:px-6 sm:py-6 md:px-10",
        currentTheme.bg,
        currentTheme.text
      )}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between border border-[#252a34] bg-[#11141a] px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-[#858b98] shadow-2xl">
        <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-[#ef4444]" /><span className="size-2 rounded-full bg-[#eab308]" /><span className="size-2 rounded-full bg-[#22c55e]" /></div>
        <span className="hidden sm:block">ayush@terminal · interactive portfolio shell</span>
        <span className="text-[#6ee7b7]">online</span>
      </div>
      <div className="relative z-10 mx-auto mt-3 flex w-full max-w-6xl flex-1 overflow-hidden border border-[#252a34] bg-[#0d1015] shadow-2xl">
      {glow && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -inset-20 bg-green-400 opacity-10 blur-3xl rounded-full" />
        </div>
      )}

      <div
        ref={terminalRef}
        className="z-10 relative flex-1 overflow-y-auto whitespace-pre-wrap space-y-3 p-4 pr-2 sm:p-6"
      >
        {history.map((line, i) => (
          <div
            key={i}
            className={clsx(
              line.type === "error" && "text-red-400",
              line.type === "success" && "text-green-500",
              line.type === "info" && "text-green-400"
            )}
          >
            {line.text}
            {line.component}
          </div>
        ))}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(input);
          }}
          className="sticky bottom-0 -mx-4 -mb-4 flex items-center border-t border-[#252a34] bg-[#11141a] px-4 py-4 sm:-mx-6 sm:-mb-6 sm:px-6"
        >
          <span className="pr-2 text-green-300">ayush@terminal:~$</span>
          <div className="relative flex-1 min-h-[1.5rem]">
            {/* Visual block cursor and text */}
            <div className="absolute inset-0 pointer-events-none flex items-center whitespace-pre">
              <span>{input.slice(0, cursorPos)}</span>
              <span className="inline-block min-w-[0.7em] bg-[#4f7cff] text-[#08090b] text-center shadow-sm animate-[pulse_1s_step-end_infinite]" style={{ minWidth: "0.7em" }}>
                {input.slice(cursorPos, cursorPos + 1) || " "}
              </span>
              <span>{input.slice(cursorPos + 1)}</span>
            </div>

            {/* Actual invisible input handling logic */}
            <input
              ref={inputRef}
              type="text"
              spellCheck={false}
              autoComplete="off"
              className="absolute inset-0 w-full bg-transparent text-transparent caret-transparent focus:outline-none"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setCursorPos(e.target.selectionStart || 0);
              }}
              onKeyUp={updateCursor}
              onClick={updateCursor}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                  setTimeout(updateCursor, 0);
                }
                if (e.key === "ArrowUp") {
                  e.preventDefault();
                  if (commandHistory.length) {
                    setHistoryIndex((i) => {
                      const newIndex =
                        i === null
                          ? commandHistory.length - 1
                          : Math.max(i - 1, 0);
                      setInput(commandHistory[newIndex]);
                      setTimeout(() => {
                        if (inputRef.current) {
                          inputRef.current.selectionStart = commandHistory[newIndex].length;
                          setCursorPos(commandHistory[newIndex].length);
                        }
                      }, 0);
                      return newIndex;
                    });
                  }
                } else if (e.key === "ArrowDown") {
                  e.preventDefault();
                  if (commandHistory.length) {
                    setHistoryIndex((i) => {
                      if (i === null) return null;
                      if (i === commandHistory.length - 1) {
                        setInput("");
                        setCursorPos(0);
                        return null;
                      }
                      const newIndex = Math.min(i + 1, commandHistory.length - 1);
                      setInput(commandHistory[newIndex]);
                      setTimeout(() => {
                        if (inputRef.current) {
                          inputRef.current.selectionStart = commandHistory[newIndex].length;
                          setCursorPos(commandHistory[newIndex].length);
                        }
                      }, 0);
                      return newIndex;
                    });
                  }
                }
              }}
            />
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default TerminalMode;
