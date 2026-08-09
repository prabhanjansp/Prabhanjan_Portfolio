import PropTypes from "prop-types";
import { FaTerminal } from "react-icons/fa";

const TerminalHeader = ({ darkMode }) => {
  return (
    <div className={`px-4 py-2 flex items-center gap-2 ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className={`text-xs flex-1 text-center font-mono ${darkMode ? "text-gray-300" : "text-gray-600"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        <FaTerminal className="inline mr-2" />
        prabhanjan@portfolio:~
      </div>
    </div>
  );
};
TerminalHeader.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default TerminalHeader;