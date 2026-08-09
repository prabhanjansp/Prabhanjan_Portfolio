import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import TerminalHeader from "./TerminalHeader";
import WelcomeHeader from "./WelcomeHeader";
import CommandOutput from "./CommandOutput";
import QuickCommands from "./QuickCommands";
import { executeCommand, downloadCV } from "../../utils/commandExecutor";

const Terminal = ({ darkMode }) => {
    const [showCursor, setShowCursor] = useState(true);
    const [commandHistory, setCommandHistory] = useState([]);
    const [currentCommand, setCurrentCommand] = useState("");
    const inputRef = useRef(null);
    const terminalBodyRef = useRef(null);

    // Blinking cursor
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    // Auto-focus input
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    // Scroll to bottom when command history changes
    useEffect(() => {
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [commandHistory]);

    // Handle click on terminal to focus input
    const handleTerminalClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleCommandSubmit = (e) => {
        e.preventDefault();
        if (!currentCommand.trim()) return;

        const command = currentCommand.trim();

        // Check if command is 'clear'
        if (command.toLowerCase() === 'clear') {
            setCommandHistory([]);
            setCurrentCommand("");
            return;
        }

        const output = executeCommand(command);
        const newHistory = [...commandHistory, {
            command: command,
            output: output
        }];
        setCommandHistory(newHistory);
        setCurrentCommand("");

        // Handle download action
        if (output.type === 'download' && output.action === 'download_cv') {
            // Trigger download after a small delay to show the message
            setTimeout(() => {
                const success = downloadCV();
                if (success) {
                    const successOutput = {
                        type: 'info',
                        content: '✅ CV downloaded successfully!'
                    };
                    setCommandHistory(prev => [...prev, {
                        command: '📥 Download status:',
                        output: successOutput
                    }]);
                } else {
                    const errorOutput = {
                        type: 'error',
                        content: '❌ Failed to download CV. Please try again or use the download button.'
                    };
                    setCommandHistory(prev => [...prev, {
                        command: '⚠️ Download status:',
                        output: errorOutput
                    }]);
                }
            }, 500);
        }
    };

    const handleQuickCommand = (cmd) => {
        setCurrentCommand(cmd);
        setTimeout(() => {
            const form = document.querySelector('form');
            if (form) {
                const event = new Event('submit', { bubbles: true });
                form.dispatchEvent(event);
            }
        }, 100);
    };

    // Handle keyboard shortcuts
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setCurrentCommand('');
        }
        // Up arrow for previous command
        if (e.key === 'ArrowUp' && commandHistory.length > 0) {
            e.preventDefault();
            const lastCommand = commandHistory[commandHistory.length - 1];
            setCurrentCommand(lastCommand.command);
        }
    };

    return (
        <div 
            className={`rounded-2xl overflow-hidden shadow-2xl ${darkMode ? "bg-zinc-800" : "bg-white"} border ${darkMode ? "border-zinc-700" : "border-zinc-200"} transition-all duration-300 hover:shadow-3xl h-full flex flex-col`}
        >
            <TerminalHeader darkMode={darkMode} />

            <div
                ref={terminalBodyRef}
                onClick={handleTerminalClick}
                className={`flex-1 p-5 text-sm ${darkMode ? "bg-zinc-900/90 text-green-400" : "bg-zinc-50 text-zinc-800"} overflow-y-auto cursor-text min-h-[400px] max-h-[500px]`}
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
                <WelcomeHeader darkMode={darkMode} />

                {/* Command Output History */}
                <div className="space-y-2 font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {commandHistory.map((item, index) => (
                        <div key={index} className="group">
                            <div className="flex items-center gap-2 flex-wrap text-xs">
                                <span className={`font-mono px-1 py-0.5 rounded ${darkMode ? "text-orange-700 bg-orange-400/10" : "text-orange-600 bg-orange-50"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                                    prabhanjan@portfolio:~$
                                </span>
                                <span className={`font-mono font-medium ${darkMode ? "text-white" : "text-zinc-800"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                                    {item.command}
                                </span>
                            </div>
                            {item.output && <CommandOutput output={item.output} darkMode={darkMode} />}
                        </div>
                    ))}
                </div>

                {/* Command Input */}
                <form onSubmit={handleCommandSubmit} className="mt-3 flex items-center gap-2 flex-wrap font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    <span className={`flex-shrink-0 text-xs font-mono px-1 py-0.5 rounded ${darkMode ? "text-orange-700 bg-orange-400/10" : "text-orange-600 bg-orange-50"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        prabhanjan@portfolio:~$
                    </span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={currentCommand}
                        onChange={(e) => setCurrentCommand(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className={`flex-1 min-w-[80px] bg-transparent outline-none text-xs font-mono ${darkMode ? "text-white placeholder-zinc-500" : "text-zinc-800 placeholder-zinc-400"}`}
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        placeholder={darkMode ? "Type a command..." : "Type a command..."}
                        autoFocus
                        spellCheck="false"
                    />
                    <span 
                        className={`w-2 h-4 rounded-sm transition-all duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'} ${darkMode ? 'bg-orange-700' : 'bg-orange-600'}`}
                        style={{ boxShadow: darkMode ? '0 0 8px rgba(52, 211, 153, 0.5)' : '0 0 8px rgba(5, 150, 105, 0.3)' }}
                    />
                </form>

                {/* Hint Text */}
                <div className={`mt-2 flex items-center gap-2 text-[10px] font-mono ${darkMode ? "text-zinc-500" : "text-zinc-400"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    <span className="flex items-center gap-1">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-700 animate-pulse" />
                        Ready
                    </span>
                    <span className="opacity-30">|</span>
                    <span>↑ for last command</span>
                    <span className="opacity-30">|</span>
                    <span>Esc to clear</span>
                    <span className="opacity-30">|</span>
                    <span className="text-orange-700">Tab for commands</span>
                </div>
            </div>

            <QuickCommands onQuickCommand={handleQuickCommand} darkMode={darkMode} />
        </div>
    );
};

Terminal.propTypes = {
    darkMode: PropTypes.bool.isRequired,
};

export default Terminal;