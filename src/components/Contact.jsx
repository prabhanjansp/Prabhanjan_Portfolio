import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,

  FaCheckCircle,

  FaComment,
  FaExclamationCircle,
  FaSpinner,
  FaCheck,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const Contact = ({ darkMode, id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation rules
  const validationRules = {
    name: (value) => {
      if (!value.trim()) return "Name is required";
      if (value.length < 2) return "Too short";
      return null;
    },
    email: (value) => {
      if (!value) return "Email is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Invalid email";
      return null;
    },
    subject: (value) => {
      if (!value.trim()) return "Subject is required";
      if (value.length < 3) return "Too short";
      return null;
    },
    message: (value) => {
      if (!value.trim()) return "Message is required";
      if (value.length < 10) return "Min 10 characters";
      return null;
    },
  };

  const validateField = (name, value) => {
    const error = validationRules[name](value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) validateField(name, value);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, formData[name]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = {};
    Object.keys(formData).forEach((key) => (allTouched[key] = true));
    setTouched(allTouched);

    const isValid = Object.keys(validationRules).every((key) => {
      const error = validationRules[key](formData[key]);
      if (error) setErrors((prev) => ({ ...prev, [key]: error }));
      return !error;
    });

    if (!isValid) return;

    setStatus("sending");
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "contactSubmissions"), {
        ...formData,
        submittedAt: Timestamp.now(),
        read: false,
      });
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTouched({});
      setTimeout(() => {
        setStatus("");
        setIsSubmitting(false);
      }, 4000);
    } catch (error) {
      setStatus(error,"error");
      setTimeout(() => {
        setStatus("");
        setIsSubmitting(false);
      }, 3000);
    }
  };

  const isFormValid = useMemo(() => {
    return Object.keys(validationRules).every((key) => {
      const error = validationRules[key](formData[key]);
      return !error;
    });
  }, [formData]);

  const contactInfo = [
    { icon: <FaEnvelope />, label: "Email", value: "puranikchetan97@gmail.com", href: "mailto:puranikchetan97@gmail.com" },
    { icon: <FaPhone />, label: "Phone", value: "+91 9876543210", href: "tel:+919876543210" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Bengaluru, India", href: "#" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/prabhanjanpuranik/", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com/prabhanjansp", label: "GitHub" },
    { icon: <FaInstagram />, href: "https://instagram.com/notprabhanjan/", label: "Instagram" },
  ];

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-zinc-900" : "bg-zinc-50"}`}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl ${darkMode ? "bg-orange-500/5" : "bg-orange-200/15"}`} />
        <div className={`absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl ${darkMode ? "bg-amber-500/5" : "bg-amber-200/15"}`} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h1 className={`text-3xl md:text-4xl font-bold ${darkMode ? "text-zinc-100" : "text-zinc-900"}`}>
            Let&apos;s
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
              Connect
            </span>
          </h1>
          <div className={`h-0.5 w-16 mx-auto mt-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600`} />
          <p className={`mt-3 text-sm md:text-base ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
            Have a project? Let&apos;s talk
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <div className={`rounded-2xl p-6 backdrop-blur-sm border ${darkMode
              ? "bg-zinc-800/60 border-zinc-700/50"
              : "bg-white/90 border-orange-100"
              }`}>
              <h3 className={`text-lg font-bold mb-5 ${darkMode ? "text-orange-200" : "text-orange-800"}`}>
                Get in Touch
              </h3>

              {/* Contact Items */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${darkMode
                      ? "hover:bg-zinc-700/50"
                      : "hover:bg-orange-50"
                      }`}
                  >
                    <div className={`p-2 rounded-lg ${darkMode ? "bg-orange-900/30 text-orange-400" : "bg-orange-100 text-orange-600"}`}>
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-xs font-medium ${darkMode ? "text-zinc-400" : "text-zinc-500"}`}>
                        {item.label}
                      </div>
                      <div className={`text-sm truncate ${darkMode ? "text-zinc-200" : "text-zinc-800"}`}>
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${darkMode ? "text-zinc-400" : "text-zinc-500"}`}>
                  Social
                </h4>
                <div className="flex gap-2">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2.5 rounded-xl transition-all ${darkMode
                        ? "bg-zinc-700/50 hover:bg-zinc-600 text-orange-400"
                        : "bg-orange-50 hover:bg-orange-100 text-orange-600"
                        }`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className={`mt-6 p-3 rounded-xl ${darkMode ? "bg-zinc-700/30" : "bg-orange-50/50"}`}>
                <p className={`text-xs ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                  ⚡ Usually responds within 24 hours
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className={`rounded-2xl p-6 backdrop-blur-sm border ${darkMode
              ? "bg-zinc-800/60 border-zinc-700/50"
              : "bg-white/90 border-orange-100"
              }`}>
              <div className="flex items-center gap-2 mb-5">
                <FaComment className={darkMode ? "text-orange-400" : "text-orange-600"} />
                <h3 className={`text-lg font-bold ${darkMode ? "text-orange-200" : "text-orange-800"}`}>
                  Send Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${darkMode ? "text-zinc-300" : "text-zinc-700"}`}>
                      Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-3 py-2.5 rounded-lg text-sm border transition-all ${errors.name && touched.name
                          ? darkMode
                            ? "border-red-500 bg-red-900/20"
                            : "border-red-500 bg-red-50"
                          : darkMode
                            ? "bg-zinc-700/50 border-zinc-600 focus:border-orange-500"
                            : "bg-white border-orange-200 focus:border-orange-500"
                          } outline-none`}
                        placeholder="Your name"
                      />
                      {touched.name && !errors.name && formData.name && (
                        <FaCheck className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-xs" />
                      )}
                    </div>
                    {touched.name && errors.name && (
                      <p className={`text-xs mt-1 flex items-center gap-1 ${darkMode ? "text-red-400" : "text-red-500"}`}>
                        <FaExclamationCircle className="text-[10px]" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${darkMode ? "text-zinc-300" : "text-zinc-700"}`}>
                      Email *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-3 py-2.5 rounded-lg text-sm border transition-all ${errors.email && touched.email
                          ? darkMode
                            ? "border-red-500 bg-red-900/20"
                            : "border-red-500 bg-red-50"
                          : darkMode
                            ? "bg-zinc-700/50 border-zinc-600 focus:border-orange-500"
                            : "bg-white border-orange-200 focus:border-orange-500"
                          } outline-none`}
                        placeholder="your@email.com"
                      />
                      {touched.email && !errors.email && formData.email && (
                        <FaCheck className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-xs" />
                      )}
                    </div>
                    {touched.email && errors.email && (
                      <p className={`text-xs mt-1 flex items-center gap-1 ${darkMode ? "text-red-400" : "text-red-500"}`}>
                        <FaExclamationCircle className="text-[10px]" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${darkMode ? "text-zinc-300" : "text-zinc-700"}`}>
                    Subject *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-3 py-2.5 rounded-lg text-sm border transition-all ${errors.subject && touched.subject
                        ? darkMode
                          ? "border-red-500 bg-red-900/20"
                          : "border-red-500 bg-red-50"
                        : darkMode
                          ? "bg-zinc-700/50 border-zinc-600 focus:border-orange-500"
                          : "bg-white border-orange-200 focus:border-orange-500"
                        } outline-none`}
                      placeholder="What's this about?"
                    />
                    {touched.subject && !errors.subject && formData.subject && (
                      <FaCheck className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-xs" />
                    )}
                  </div>
                  {touched.subject && errors.subject && (
                    <p className={`text-xs mt-1 flex items-center gap-1 ${darkMode ? "text-red-400" : "text-red-500"}`}>
                      <FaExclamationCircle className="text-[10px]" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${darkMode ? "text-zinc-300" : "text-zinc-700"}`}>
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-3 py-2.5 rounded-lg text-sm border resize-none transition-all ${errors.message && touched.message
                        ? darkMode
                          ? "border-red-500 bg-red-900/20"
                          : "border-red-500 bg-red-50"
                        : darkMode
                          ? "bg-zinc-700/50 border-zinc-600 focus:border-orange-500"
                          : "bg-white border-orange-200 focus:border-orange-500"
                        } outline-none`}
                      placeholder="Tell me about your project..."
                    />
                    {touched.message && !errors.message && formData.message && (
                      <FaCheck className="absolute right-3 top-3 text-green-500 text-xs" />
                    )}
                  </div>
                  {touched.message && errors.message && (
                    <p className={`text-xs mt-1 flex items-center gap-1 ${darkMode ? "text-red-400" : "text-red-500"}`}>
                      <FaExclamationCircle className="text-[10px]" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Status Messages */}
                {status === "sending" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`flex items-center gap-3 p-3 rounded-lg ${darkMode ? "bg-orange-900/20" : "bg-blue-50"}`}
                  >
                    <FaSpinner className="animate-spin text-orange-500" />
                    <span className={`text-sm ${darkMode ? "text-orange-300" : "text-blue-600"}`}>
                      Sending...
                    </span>
                  </motion.div>
                )}

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`flex items-center gap-3 p-3 rounded-lg ${darkMode ? "bg-green-900/20" : "bg-green-50"}`}
                  >
                    <FaCheckCircle className="text-green-500" />
                    <div>
                      <p className={`text-sm font-medium ${darkMode ? "text-green-300" : "text-green-700"}`}>
                        Message sent successfully!
                      </p>
                      <p className={`text-xs ${darkMode ? "text-green-300/70" : "text-green-600"}`}>
                        I&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`flex items-center gap-3 p-3 rounded-lg ${darkMode ? "bg-red-900/20" : "bg-red-50"}`}
                  >
                    <FaTimes className={darkMode ? "text-red-400" : "text-red-500"} />
                    <p className={`text-sm ${darkMode ? "text-red-300" : "text-red-600"}`}>
                      Something went wrong. Please try again.
                    </p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: isFormValid ? 1.01 : 1 }}
                  whileTap={{ scale: isFormValid ? 0.98 : 1 }}
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className={`w-full py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all ${isFormValid && !isSubmitting
                    ? darkMode
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/20"
                      : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/20"
                    : darkMode
                      ? "bg-zinc-700 text-zinc-400 cursor-not-allowed"
                      : "bg-zinc-200 text-zinc-400 cursor-not-allowed"
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaArrowRight className="text-xs" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>

            {/* Footer */}
            <div className={`mt-6 text-center ${darkMode ? "text-zinc-500" : "text-zinc-400"}`}>
              <p className="text-xs">
                © {new Date().getFullYear()} Prabhanjan Puranik
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

Contact.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;