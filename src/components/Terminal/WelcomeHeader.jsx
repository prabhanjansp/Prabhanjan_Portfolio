import PropTypes from "prop-types";
import { renderAsciiName } from "../../utils/terminalUtils";

const WelcomeHeader = ({ darkMode }) => {
    return (
        <>
            {/* Smaller ASCII Name Header */}
            <div className="mb-3">
                <pre className={`text-[8px] sm:text-[9px] md:text-[10px] ${darkMode ? "text-yellow-400" : "text-orange-600"} font-bold leading-[1.2] overflow-x-auto`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {renderAsciiName()}
                </pre>
                <div className={`text-center text-[10px] mt-0.5 font-mono ${darkMode ? "text-orange-400" : "text-orange-700"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    ═══ Frontend Developer | React ═══
                </div>
            </div>

            {/* Tips Section */}
            <div className={`mb-3 border-t pt-2 font-mono ${darkMode ? 'border-gray-700' : 'border-gray-300'}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <div className={`${darkMode ? "text-blue-400" : "text-blue-600"} text-[10px] font-semibold`}>
                    Tips for getting started:
                </div>
                <div className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-[10px] ml-4`}>
                    1. Ask questions, explore commands, or view projects
                </div>
                <div className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-[10px] ml-4`}>
                    2. Be specific for the best results
                </div>
                <div className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-[10px] ml-4`}>
                    3. Try help &apos; to see all available commands
                </div>
                <div className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-[10px] ml-4`}>
                    4. Navigate using: home, projects, skills, education, contact
                </div>
                <div className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-[10px] ml-4`}>
                    5. Download my CV using: download cv
                </div>

                <div className={`${darkMode ? "text-orange-400" : "text-orange-700"} text-[10px] mt-2 font-bold`}>
                    ## Get started
                </div>

                <div className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-[10px] mt-0.5`}>
                    How would you like to explore?
                </div>

                <div className="ml-4 mt-0.5 space-y-0 text-[10px]">
                    <div className={`flex items-center gap-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        <span className={darkMode ? "text-yellow-400" : "text-yellow-600"}>- 1.</span>
                        <span>View my projects</span>
                        <span className={darkMode ? "text-blue-400" : "text-blue-600"}>(projects)</span>
                    </div>
                    <div className={`flex items-center gap-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        <span className={darkMode ? "text-yellow-400" : "text-yellow-600"}>- 2.</span>
                        <span>Learn about me</span>
                        <span className={darkMode ? "text-blue-400" : "text-blue-600"}>(cat about)</span>
                    </div>
                    <div className={`flex items-center gap-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        <span className={darkMode ? "text-yellow-400" : "text-yellow-600"}>- 3.</span>
                        <span>Check my education</span>
                        <span className={darkMode ? "text-blue-400" : "text-blue-600"}>(cat education)</span>
                    </div>
                    <div className={`flex items-center gap-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        <span className={darkMode ? "text-yellow-400" : "text-yellow-600"}>- 4.</span>
                        <span>Contact me</span>
                        <span className={darkMode ? "text-blue-400" : "text-blue-600"}>(contact)</span>
                    </div>
                    <div className={`flex items-center gap-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        <span className={darkMode ? "text-yellow-400" : "text-yellow-600"}>- 5.</span>
                        <span>Download my CV</span>
                        <span className={darkMode ? "text-blue-400" : "text-blue-600"}>(download cv)</span>
                    </div>
                </div>

                <div className={`${darkMode ? "text-yellow-400" : "text-yellow-700"} text-[10px] mt-1.5`}>
                    No authentication method selected.
                </div>
                <div className={`${darkMode ? "text-gray-500" : "text-gray-500"} text-[10px]`}>
                    (Use Enter to execute, Tab to autocomplete)
                </div>

                <div className={`${darkMode ? "text-gray-600" : "text-gray-400"} text-[9px] mt-1.5 border-t pt-1.5 font-mono ${darkMode ? 'border-gray-700' : 'border-gray-300'}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    Portfolio CLI v1.0.0 | https://prabhanjansp.web.app
                </div>
            </div>
        </>
    );
};

WelcomeHeader.propTypes = {
    darkMode: PropTypes.bool.isRequired,
};

export default WelcomeHeader;