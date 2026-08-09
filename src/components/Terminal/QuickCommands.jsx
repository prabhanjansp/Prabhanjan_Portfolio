import PropTypes from "prop-types";

const QuickCommands = ({ onQuickCommand, darkMode }) => {
    const commands = ['help', 'whoami', 'cat about', 'ls', 'cat skills', 'date', 'download cv', 'clear'];

    return (
        <div className="mt-3 flex flex-wrap gap-1.5 font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {commands.map((cmd) => (
                <button
                    key={cmd}
                    onClick={() => onQuickCommand(cmd)}
                    className={`text-[10px] px-2 py-1 rounded transition-all font-mono ${cmd === 'download cv' ? (darkMode ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-500 text-white hover:bg-blue-600") : (darkMode ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-200 text-gray-600 hover:bg-gray-300")}`}
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                    {cmd === 'download cv' ? '📥 download cv' : cmd}
                </button>
            ))}
        </div>
    );
};

QuickCommands.propTypes = {
    onQuickCommand: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired,
};

export default QuickCommands;