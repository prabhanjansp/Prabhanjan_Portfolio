import PropTypes from "prop-types";

const CommandOutput = ({ output, darkMode }) => {
    if (!output) return null;

    const baseClasses = "ml-4 mt-1 whitespace-pre-wrap font-mono";

    const getColorClass = () => {
        switch (output.type) {
            case 'error':
                return darkMode ? "text-red-400" : "text-red-600";
            case 'help':
                return darkMode ? "text-cyan-400" : "text-cyan-700";
            case 'exit':
                return darkMode ? "text-yellow-400" : "text-yellow-700";
            case 'bio':
            case 'info':
                return darkMode ? "text-gray-300" : "text-gray-700";
            case 'skills':
                return darkMode ? "text-green-400" : "text-green-700";
            case 'experience':
                return darkMode ? "text-blue-400" : "text-blue-700";
            case 'education':
                return darkMode ? "text-purple-400" : "text-purple-700";
            case 'navigation':
                return darkMode ? "text-yellow-400" : "text-yellow-600";
            case 'date':
                return `${darkMode ? "text-green-400" : "text-orange-600"} font-bold text-sm`;
            case 'download':
                return darkMode ? "text-blue-400" : "text-blue-600";
            default:
                return darkMode ? "text-gray-300" : "text-gray-700";
        }
    };

    const getFontClass = () => {
        return output.type === 'date' ? "'JetBrains Mono', monospace" : "inherit";
    };

    // Special rendering for download type with animation
    if (output.type === 'download') {
        return (
            <div className={`${baseClasses} ${getColorClass()} flex items-center gap-2`} style={{ fontFamily: getFontClass() }}>
                <span className="animate-pulse">📥</span>
                <span>{output.content}</span>
                <span className="animate-spin inline-block">⏳</span>
            </div>
        );
    }

    return (
        <div className={`${baseClasses} ${getColorClass()}`} style={{ fontFamily: getFontClass() }}>
            {output.content}
        </div>
    );
};

CommandOutput.propTypes = {
    output: PropTypes.shape({
        type: PropTypes.oneOf([
            'error', 'help', 'exit', 'bio', 'info',
            'skills', 'experience', 'education', 'navigation', 'date', 'download'
        ]).isRequired,
        content: PropTypes.string.isRequired,
        section: PropTypes.string,
        action: PropTypes.string,
    }).isRequired,
    darkMode: PropTypes.bool.isRequired,
};

export default CommandOutput;