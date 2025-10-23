
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Lottie from "lottie-react";
import sent from "../assets/animations/sent.json";

const Contact = ({ darkMode, id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await addDoc(collection(db, "contactSubmissions"), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,

        submittedAt: Timestamp.now(),
      });

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.error("Error submitting form: ", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  const socialLinks = [
    {
      icon: <FaEnvelope />,
      url: "mailto:puranikchetan97@gmail.com",
      color: "bg-red-500",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/prabhanjanpuranik/",
      color: "bg-blue-600",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/prabhanjansp",
      color: "bg-gray-800",
    },
    // {
    //   icon: <FaTwitter />,
    //   url: "https://twitter.com/yourusername",
    //   color: "bg-blue-400",
    // },
    // {
    //   icon: <FaInstagram />,
    //   url: "https://instagram.com/yourusername",
    //   color: "bg-pink-600",
    // },
  ];

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              rotate: Math.random() * 360,
            }}
            animate={{
              x: [null, Math.random() * 100 - 50],
              y: [null, Math.random() * 100 - 50],
              transition: {
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            className={`absolute rounded-full ${
              darkMode ? "bg-teal-900/20" : "bg-amber-400/20"
            }`}
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(12px)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2
            className={`text-4xl font-bold bg-clip-text text-transparent ${
              darkMode
                ? "bg-gradient-to-r from-emerald-400 to-teal-400"
                : "bg-gradient-to-r from-amber-500 to-amber-700"
            }`}
          >
            Get In Touch
          </h2>
          <p
            className={`mt-4 max-w-2xl mx-auto ${
              darkMode ? "text-teal-100" : "text-amber-800"
            }`}
          >
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                darkMode ? "text-teal-100" : "text-amber-900"
              }`}
            >
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block mb-2 font-medium ${
                      darkMode ? "text-teal-100" : "text-amber-800"
                    }`}
                  >
                    Name *
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                      darkMode
                        ? "bg-gray-800 border-teal-900/50 focus:border-teal-400"
                        : "bg-white border-amber-200 focus:border-amber-500"
                    }`}
                    placeholder="Your name"
                  />
                  {/* {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>} */}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block mb-2 font-medium ${
                      darkMode ? "text-teal-100" : "text-amber-800"
                    }`}
                  >
                    Email *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                      darkMode
                        ? "bg-gray-800 border-teal-900/50 focus:border-teal-400"
                        : "bg-white border-amber-200 focus:border-amber-500"
                    }`}
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className={`block mb-2 font-medium ${
                    darkMode ? "text-teal-100" : "text-amber-800"
                  }`}
                >
                  Subject *
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.02 }}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                    darkMode
                      ? "bg-gray-800 border-teal-900/50 focus:border-teal-400"
                      : "bg-white border-amber-200 focus:border-amber-500"
                  }`}
                  placeholder="Subject"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`block mb-2 font-medium ${
                    darkMode ? "text-teal-100" : "text-amber-800"
                  }`}
                >
                  Message *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.02 }}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                    darkMode
                      ? "bg-gray-800 border-teal-900/50 focus:border-teal-400"
                      : "bg-white border-amber-200 focus:border-amber-500"
                  }`}
                  placeholder="Your message"
                ></motion.textarea>
              </div>
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: darkMode
                    ? "0 4px 15px rgba(16, 185, 129, 0.3)"
                    : "0 4px 15px rgba(245, 158, 11, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-4 px-6 rounded-lg font-medium ${
                  darkMode
                    ? "bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
                    : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
                } text-white transition-all ${
                  status === "sending" ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </motion.button>
              {status === "success" && (
                <div className="flex justify-center items-center mb-12">
                  <Lottie animationData={sent} loop className="w-20 md:w-20" />

                  <p className="text-green-800 text-center mt-4">
                    Message sent successfully!
                  </p>
                </div>
              )}
            </form>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                darkMode ? "text-teal-100" : "text-amber-900"
              }`}
            >
              Connect with me
            </h3>

            <div
              className={`p-8 rounded-2xl ${
                darkMode ? "bg-gray-800/70" : "bg-white/90"
              } backdrop-blur-sm border ${
                darkMode ? "border-teal-800/50" : "border-amber-200"
              } shadow-lg`}
            >
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex items-center justify-center w-16 h-16 rounded-full text-white text-2xl ${social.color} shadow-lg transition-transform`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              <div
                className={`text-center mt-8 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <p>Prefer direct communication?</p>
                <p className="mt-2">
                  Feel free to reach out through any of the platforms above.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div
              className={`mt-12 text-center ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <p>
                © {new Date().getFullYear()} Prabhanjan❤️. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
