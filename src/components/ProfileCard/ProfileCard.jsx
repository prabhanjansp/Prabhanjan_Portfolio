import PropTypes from "prop-types";
import {
    FaCode,
    FaMapMarkerAlt,
    FaBriefcase,
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { aboutData } from "../../data/AboutData";
import pp from "../../assets/pp.jpg";
import resume from "../../assets/Prabhanjan.pdf";

const ProfileCard = ({ darkMode }) => {
    return (
        <div
            className={`rounded-2xl overflow-hidden shadow-2xl ${darkMode ? "bg-zinc-800" : "bg-white"} border ${darkMode ? "border-zinc-700" : "border-zinc-200"} transition-all duration-300 hover:shadow-3xl`}
        >
            {/* Profile Image Section */}
            <div className="relative h-72 overflow-hidden">
                <img
                    src={pp}
                    alt="Prabhanjan Puranik"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                />
                {/* Gradient Overlay */}
                <div
                    className={`absolute inset-0 bg-gradient-to-t ${darkMode ? "from-zinc-900 via-zinc-900/60 to-transparent" : "from-white via-white/40 to-transparent"}`}
                />
                
                {/* Decorative Badge */}
                <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-orange-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full shadow-lg">
                        Available
                    </span>
                </div>
            </div>

            {/* Profile Info */}
            <div className="px-6 pb-6 relative">
                {/* Avatar Overlay */}
                <div className="relative -mt-12 mb-4">
                    <div className={`w-24 h-24 rounded-2xl border-4 ${darkMode ? "border-zinc-800" : "border-white"} shadow-xl overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600`}>
                        <img
                            src={pp}
                            alt="Prabhanjan Puranik"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    {/* Name & Title */}
                    <div>
                        <h2
                            className={`text-2xl font-bold ${darkMode ? "text-white" : "text-zinc-900"}`}
                        >
                            Prabhanjan Puranik
                        </h2>
                        <div className="flex items-center gap-2 mt-1">
                            <FaCode className="text-orange-500 text-sm" />
                            <p className="text-sm font-medium text-orange-600">
                                {aboutData?.tagline || "Full Stack Developer"}
                            </p>
                        </div>
                    </div>

                    {/* Info Grid */}
                    <div className={`grid grid-cols-1 gap-2 pt-2 border-t ${darkMode ? 'border-zinc-700' : 'border-zinc-200'}`}>
                        <div className="flex items-center gap-3 text-sm">
                            <div className={`p-1.5 rounded-lg ${darkMode ? "bg-zinc-700" : "bg-zinc-100"}`}>
                                <FaMapMarkerAlt className="text-orange-500" />
                            </div>
                            <span className={darkMode ? "text-zinc-300" : "text-zinc-600"}>
                                Bangalore, India
                            </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <div className={`p-1.5 rounded-lg ${darkMode ? "bg-zinc-700" : "bg-zinc-100"}`}>
                                <FaBriefcase className="text-orange-500" />
                            </div>
                            <span className={darkMode ? "text-zinc-300" : "text-zinc-600"}>
                                3+ Years Experience
                            </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <div className={`p-1.5 rounded-lg ${darkMode ? "bg-zinc-700" : "bg-zinc-100"}`}>
                                <FaEnvelope className="text-orange-500" />
                            </div>
                            <span className={`truncate ${darkMode ? "text-zinc-300" : "text-zinc-600"}`}>
                                puranikchetan97@gmail.com
                            </span>
                        </div>
                    </div>

                    {/* Social & Action Buttons */}
                    <div className="flex items-center gap-3 pt-3">
                        <div className="flex gap-2">
                            <motion.a
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://github.com/prabhanjansp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2.5 rounded-xl transition-all ${darkMode ? "bg-zinc-700 hover:bg-zinc-600" : "bg-zinc-100 hover:bg-zinc-200"} text-orange-600`}
                            >
                                <FaGithub size={18} />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2.5 rounded-xl transition-all ${darkMode ? "bg-zinc-700 hover:bg-zinc-600" : "bg-zinc-100 hover:bg-zinc-200"} text-orange-600`}
                            >
                                <FaLinkedin size={18} />
                            </motion.a>
                        </div>
                        
                        <div className="flex-1">
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href={resume}
                                download
                                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold transition-all bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white shadow-lg shadow-orange-500/25"
                            >
                                <FaDownload size={16} />
                                Download CV
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProfileCard.propTypes = {
    darkMode: PropTypes.bool.isRequired,
};

export default ProfileCard;