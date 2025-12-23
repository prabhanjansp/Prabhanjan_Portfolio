
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
  FaPaperPlane,
  FaCheckCircle,
  FaClock,
  FaUser,
  FaComment,
  FaExclamationCircle,
  FaSpinner,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Lottie from "lottie-react";
import sent from "../assets/animations/sent.json";
import emailAnimation from "../assets/animations/emailAnimation.json";

const Contact = ({ darkMode, id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState(""); // '', 'sending', 'success', 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Validation rules - moved outside render cycle
  const validationRules = {
    name: (value) => {
      if (!value.trim()) return "Name is required";
      if (value.length < 2) return "Name must be at least 2 characters";
      if (value.length > 50) return "Name must be less than 50 characters";
      if (!/^[a-zA-Z\s]*$/.test(value))
        return "Name can only contain letters and spaces";
      return null;
    },
    email: (value) => {
      if (!value) return "Email is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Please enter a valid email address";
      return null;
    },
    subject: (value) => {
      if (!value.trim()) return "Subject is required";
      if (value.length < 5) return "Subject must be at least 5 characters";
      if (value.length > 100) return "Subject must be less than 100 characters";
      return null;
    },
    message: (value) => {
      if (!value.trim()) return "Message is required";
      if (value.length < 10) return "Message must be at least 10 characters";
      if (value.length > 1000)
        return "Message must be less than 1000 characters";
      return null;
    },
  };

  // Validate single field
  const validateField = (name, value) => {
    const error = validationRules[name](value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // Validate entire form
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validationRules[key](formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate field if it's been touched
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    validateField(name, formData[name]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // Validate form
    if (!validateForm()) {
      return;
    }

    setStatus("sending");
    setIsSubmitting(true);
    setFormSubmitted(true);

    try {
      await addDoc(collection(db, "contactSubmissions"), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        submittedAt: Timestamp.now(),
        read: false,
      });

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTouched({});

      setTimeout(() => {
        setStatus("");
        setFormSubmitted(false);
        setIsSubmitting(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form: ", error);
      setStatus("error");
      setTimeout(() => {
        setStatus("");
        setIsSubmitting(false);
      }, 3000);
    }
  };

  // Use useMemo for character counts to prevent unnecessary re-renders
  const characterCounts = useMemo(
    () => ({
      name: { current: formData.name.length, max: 50 },
      subject: { current: formData.subject.length, max: 100 },
      message: { current: formData.message.length, max: 1000 },
    }),
    [formData.name, formData.subject, formData.message]
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "puranikchetan97@gmail.com",
      action: "mailto:puranikchetan97@gmail.com",
      color: darkMode ? "text-red-400" : "text-red-600",
      bgColor: darkMode ? "bg-red-500/10" : "bg-red-100",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      value: "+91 9876543210",
      action: "tel:+919876543210",
      color: darkMode ? "text-blue-400" : "text-blue-600",
      bgColor: darkMode ? "bg-blue-500/10" : "bg-blue-100",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: "Bengaluru, Karnataka",
      action: "#",
      color: darkMode ? "text-green-400" : "text-green-600",
      bgColor: darkMode ? "bg-green-500/10" : "bg-green-100",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/prabhanjanpuranik/",
      color: darkMode
        ? "bg-gradient-to-br from-blue-600 to-blue-800"
        : "bg-gradient-to-br from-blue-500 to-blue-700",
      hoverColor: darkMode
        ? "hover:from-blue-700 hover:to-blue-900"
        : "hover:from-blue-600 hover:to-blue-800",
      name: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/prabhanjansp",
      color: darkMode
        ? "bg-gradient-to-br from-gray-800 to-gray-900"
        : "bg-gradient-to-br from-gray-700 to-gray-900",
      hoverColor: darkMode
        ? "hover:from-gray-900 hover:to-black"
        : "hover:from-gray-800 hover:to-black",
      name: "GitHub",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/notprabhanjan/",
      color: darkMode
        ? "bg-gradient-to-br from-pink-600 via-purple-600 to-red-600"
        : "bg-gradient-to-br from-pink-500 via-purple-500 to-red-500",
      hoverColor: darkMode
        ? "hover:from-pink-700 hover:via-purple-700 hover:to-red-700"
        : "hover:from-pink-600 hover:via-purple-600 hover:to-red-600",
      name: "Instagram",
    },
  ];

  // Check if form is valid for button enable/disable
  const isFormValid = useMemo(() => {
    return Object.keys(validationRules).every((key) => {
      const error = validationRules[key](formData[key]);
      return !error;
    });
  }, [formData, validationRules]);

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`relative min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden ${darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
    >

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}


        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block relative mb-4">
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 ${darkMode ? "text-gray-100" : "text-gray-900"
                }`}
            >
              {`Let's`}{" "}
              <span
                className={`bg-clip-text text-transparent ${darkMode
                  ? "bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400"
                  : "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500"
                  }`}
              >
                Connect
              </span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className={`h-1 rounded-full ${darkMode ? "bg-gradient-to-r from-emerald-400 to-teal-400" : "bg-gradient-to-r from-amber-500 to-amber-600"
                }`}
            />
          </div>
          <p className={`mt-4 text-lg md:text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
            {`Have a project in mind or want to collaborate? I'd love to hear from you!`}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/5"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={`rounded-2xl md:rounded-3xl backdrop-blur-sm border p-6 md:p-8 ${darkMode
                ? "bg-gray-800/60 border-teal-800/30"
                : "bg-white/80 border-amber-200"
                }`}
            >
              <motion.h3
                variants={itemVariants}
                className={`text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center ${darkMode ? "text-teal-200" : "text-amber-800"
                  }`}
              >
                <div
                  className={`p-2 md:p-3 rounded-lg mr-3 ${darkMode ? "bg-teal-900/40" : "bg-amber-100"
                    }`}
                >
                  <FaUser
                    className={`${darkMode ? "text-teal-400" : "text-amber-600"
                      }`}
                  />
                </div>
                Contact Information
              </motion.h3>

              {/* Contact Details */}
              <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    href={info.action}
                    whileHover={{ x: 8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-xl transition-all group ${info.bgColor}`}
                  >
                    <div
                      className={`p-2 md:p-3 rounded-lg md:rounded-lg transition-transform group-hover:scale-110 ${info.bgColor}`}
                    >
                      <span
                        className={`${info.color} group-hover:scale-110 transition-transform`}
                        aria-label={info.title}
                      >
                        {info.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div
                        className={`font-bold text-sm md:text-base ${darkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                      >
                        {info.title}
                      </div>
                      <div
                        className={`text-xs md:text-sm ${darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                      >
                        {info.value}
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className={`h-2 w-2 rounded-full bg-gradient-to-r ${info.gradient}`}
                    />
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h4
                  className={`text-lg md:text-xl font-bold mb-4 md:mb-6 ${darkMode ? "text-teal-200" : "text-amber-800"
                    }`}
                >
                  Connect With Me
                </h4>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      variants={itemVariants}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`relative group flex flex-col items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl text-white text-xl md:text-2xl ${social.color} ${social.hoverColor} shadow-lg transition-all`}
                      aria-label={social.name}
                    >
                      <span className="relative z-10" aria-label={social.name}>{social.icon}</span>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="absolute inset-0 bg-white/20 rounded-xl md:rounded-2xl"
                      />
                      <span
                        className={`absolute -bottom-7 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                      >
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Response Time */}
              <motion.div
                variants={itemVariants}
                className={`mt-8 md:mt-12 p-4 md:p-6 rounded-xl ${darkMode ? "bg-gray-800/40" : "bg-amber-50/50"
                  }`}
              >
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <FaClock
                      className={`text-lg md:text-xl ${darkMode ? "text-teal-400" : "text-amber-600"
                        }`}
                    />
                  </motion.div>
                  <h5
                    className={`font-bold text-sm md:text-base ${darkMode ? "text-teal-200" : "text-amber-800"
                      }`}
                  >
                    Response Time
                  </h5>
                </div>
                <p
                  className={`text-xs md:text-sm ${darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                  I typically respond within 24 hours. For urgent inquiries,
                  please call or email directly.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Message Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-3/5"
          >
            <div
              className={`rounded-2xl md:rounded-3xl backdrop-blur-sm border p-6 md:p-8 ${darkMode
                ? "bg-gray-800/60 border-teal-800/30"
                : "bg-white/80 border-amber-200"
                }`}
            >
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <h3
                  className={`text-xl md:text-2xl font-bold flex items-center ${darkMode ? "text-teal-200" : "text-amber-800"
                    }`}
                >
                  <div
                    className={`p-2 md:p-3 rounded-lg mr-3 ${darkMode ? "bg-teal-900/40" : "bg-amber-100"
                      }`}
                  >
                    <FaComment
                      className={`${darkMode ? "text-teal-400" : "text-amber-600"
                        }`}
                    />
                  </div>
                  Send a Message
                </h3>
                <motion.div
                  animate={{ scale: formSubmitted ? [1, 1.2, 1] : 1 }}
                  transition={{ duration: 0.3 }}
                  className={`text-xs px-3 py-1 rounded-full ${darkMode
                    ? formSubmitted
                      ? "bg-green-900/30 text-green-400"
                      : "bg-teal-900/30 text-teal-400"
                    : formSubmitted
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                    }`}
                >
                  {formSubmitted ? "Form Submitted" : "Required *"}
                </motion.div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Name Field */}
                  <div>
                    <div className="flex items-center justify-between mb-1 md:mb-2">
                      <label
                        htmlFor="name"
                        className={`block font-medium text-sm md:text-base ${darkMode ? "text-teal-100" : "text-amber-800"
                          }`}
                      >
                        Your Name *
                      </label>
                      <div
                        className={`text-xs ${characterCounts.name.current >
                          characterCounts.name.max * 0.8
                          ? "text-red-500"
                          : darkMode
                            ? "text-gray-500"
                            : "text-gray-400"
                          }`}
                      >
                        {characterCounts.name.current}/
                        {characterCounts.name.max}
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        maxLength={characterCounts.name.max}
                        className={`w-full px-4 py-3 rounded-xl md:rounded-xl border-2 ${errors.name
                          ? darkMode
                            ? "border-red-500/50 bg-red-900/20"
                            : "border-red-500 bg-red-50"
                          : darkMode
                            ? "bg-gray-800/40 border-teal-900/30 focus:border-teal-400"
                            : "bg-white border-amber-200 focus:border-amber-500"
                          } outline-none transition-all text-sm md:text-base`}
                        placeholder="Enter your full name"
                      />
                      {touched.name && !errors.name && formData.name && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          <FaCheck className="text-green-500" />
                        </motion.div>
                      )}
                      {errors.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          <FaExclamationCircle className="text-red-500" />
                        </motion.div>
                      )}
                    </div>
                    {touched.name && errors.name && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className={`text-xs mt-1 md:mt-2 flex items-center gap-1 ${darkMode ? "text-red-400" : "text-red-600"
                          }`}
                      >
                        <FaExclamationCircle />
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className={`block mb-1 md:mb-2 font-medium text-sm md:text-base ${darkMode ? "text-teal-100" : "text-amber-800"
                        }`}
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full px-4 py-3 rounded-xl md:rounded-xl border-2 ${errors.email
                          ? darkMode
                            ? "border-red-500/50 bg-red-900/20"
                            : "border-red-500 bg-red-50"
                          : darkMode
                            ? "bg-gray-800/40 border-teal-900/30 focus:border-teal-400"
                            : "bg-white border-amber-200 focus:border-amber-500"
                          } outline-none transition-all text-sm md:text-base`}
                        placeholder="your.email@example.com"
                      />
                      {touched.email && !errors.email && formData.email && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          <FaCheck className="text-green-500" />
                        </motion.div>
                      )}
                      {errors.email && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          <FaExclamationCircle className="text-red-500" />
                        </motion.div>
                      )}
                    </div>
                    {touched.email && errors.email && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className={`text-xs mt-1 md:mt-2 flex items-center gap-1 ${darkMode ? "text-red-400" : "text-red-600"
                          }`}
                      >
                        <FaExclamationCircle />
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <div className="flex items-center justify-between mb-1 md:mb-2">
                    <label
                      htmlFor="subject"
                      className={`block font-medium text-sm md:text-base ${darkMode ? "text-teal-100" : "text-amber-800"
                        }`}
                    >
                      Subject *
                    </label>
                    <div
                      className={`text-xs ${characterCounts.subject.current >
                        characterCounts.subject.max * 0.8
                        ? "text-red-500"
                        : darkMode
                          ? "text-gray-500"
                          : "text-gray-400"
                        }`}
                    >
                      {characterCounts.subject.current}/
                      {characterCounts.subject.max}
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      maxLength={characterCounts.subject.max}
                      className={`w-full px-4 py-3 rounded-xl md:rounded-xl border-2 ${errors.subject
                        ? darkMode
                          ? "border-red-500/50 bg-red-900/20"
                          : "border-red-500 bg-red-50"
                        : darkMode
                          ? "bg-gray-800/40 border-teal-900/30 focus:border-teal-400"
                          : "bg-white border-amber-200 focus:border-amber-500"
                        } outline-none transition-all text-sm md:text-base`}
                      placeholder="What is this regarding?"
                    />
                    {touched.subject && !errors.subject && formData.subject && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        <FaCheck className="text-green-500" />
                      </motion.div>
                    )}
                    {errors.subject && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        <FaExclamationCircle className="text-red-500" />
                      </motion.div>
                    )}
                  </div>
                  {touched.subject && errors.subject && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className={`text-xs mt-1 md:mt-2 flex items-center gap-1 ${darkMode ? "text-red-400" : "text-red-600"
                        }`}
                    >
                      <FaExclamationCircle />
                      {errors.subject}
                    </motion.p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <div className="flex items-center justify-between mb-1 md:mb-2">
                    <label
                      htmlFor="message"
                      className={`block font-medium text-sm md:text-base ${darkMode ? "text-teal-100" : "text-amber-800"
                        }`}
                    >
                      Your Message *
                    </label>
                    <div
                      className={`text-xs ${characterCounts.message.current >
                        characterCounts.message.max * 0.9
                        ? "text-red-500"
                        : characterCounts.message.current >
                          characterCounts.message.max * 0.7
                          ? "text-yellow-500"
                          : darkMode
                            ? "text-gray-500"
                            : "text-gray-400"
                        }`}
                    >
                      {characterCounts.message.current}/
                      {characterCounts.message.max}
                    </div>
                  </div>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      maxLength={characterCounts.message.max}
                      className={`w-full px-4 py-3 rounded-xl md:rounded-xl border-2 resize-none ${errors.message
                        ? darkMode
                          ? "border-red-500/50 bg-red-900/20"
                          : "border-red-500 bg-red-50"
                        : darkMode
                          ? "bg-gray-800/40 border-teal-900/30 focus:border-teal-400"
                          : "bg-white border-amber-200 focus:border-amber-500"
                        } outline-none transition-all text-sm md:text-base`}
                      placeholder="Tell me about your project or inquiry..."
                    />
                    {touched.message && !errors.message && formData.message && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute right-3 top-4"
                      >
                        <FaCheck className="text-green-500" />
                      </motion.div>
                    )}
                    {errors.message && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute right-3 top-4"
                      >
                        <FaExclamationCircle className="text-red-500" />
                      </motion.div>
                    )}
                  </div>
                  {touched.message && errors.message && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className={`text-xs mt-1 md:mt-2 flex items-center gap-1 ${darkMode ? "text-red-400" : "text-red-600"
                        }`}
                    >
                      <FaExclamationCircle />
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Status Messages */}
                {status === "sending" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`flex items-center justify-between p-4 rounded-xl ${darkMode ? "bg-blue-900/20" : "bg-blue-100"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`animate-spin rounded-full h-5 w-5 border-2 ${darkMode
                          ? "border-blue-400 border-t-transparent"
                          : "border-blue-500 border-t-transparent"
                          }`}
                      />
                      <span
                        className={`text-sm md:text-base ${darkMode ? "text-blue-300" : "text-blue-600"
                          }`}
                      >
                        Sending your message...
                      </span>
                    </div>
                    <Lottie
                      animationData={emailAnimation}
                      loop={true}
                      className="w-12 h-12"
                    />
                  </motion.div>
                )}

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex flex-col md:flex-row items-center gap-4 p-4 rounded-xl ${darkMode ? "bg-green-900/20" : "bg-green-100"
                      }`}
                  >
                    <div className="flex-shrink-0">
                      <Lottie
                        animationData={sent}
                        loop={false}
                        className="w-16 h-16 md:w-20 md:h-20"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <div
                        className={`flex items-center justify-center md:justify-start gap-2 font-bold text-sm md:text-base ${darkMode ? "text-green-300" : "text-green-600"
                          }`}
                      >
                        <FaCheckCircle />
                        Message Sent Successfully!
                      </div>
                      <p
                        className={`text-xs md:text-sm mt-1 ${darkMode ? "text-green-200/80" : "text-green-700"
                          }`}
                      >
                        {`   Thank you for reaching out! I'll get back to you within 24 hours.`}
                      </p>
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`p-4 rounded-xl flex items-center gap-3 ${darkMode ? "bg-red-900/20" : "bg-red-100"
                      }`}
                  >
                    <FaTimes
                      className={`text-xl ${darkMode ? "text-red-400" : "text-red-600"
                        }`}
                    />
                    <div>
                      <p
                        className={`text-sm md:text-base ${darkMode ? "text-red-300" : "text-red-600"
                          }`}
                      >
                        Something went wrong. Please try again or contact me
                        directly.
                      </p>
                      <p
                        className={`text-xs mt-1 ${darkMode ? "text-red-400/80" : "text-red-600/80"
                          }`}
                      >
                        Error: Unable to send message. Please check your
                        connection.
                      </p>
                    </div>
                  </motion.div>
                )}

                <motion.button
                  whileHover={{
                    scale: isFormValid ? 1.02 : 1,
                    boxShadow: isFormValid
                      ? darkMode
                        ? "0 10px 25px -5px rgba(45, 212, 191, 0.3)"
                        : "0 10px 25px -5px rgba(245, 158, 11, 0.3)"
                      : "none",
                  }}
                  whileTap={{ scale: isFormValid ? 0.98 : 1 }}
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className={`w-full py-3 md:py-4 px-6 rounded-xl font-bold text-sm md:text-base flex items-center justify-center gap-3 ${isFormValid && !isSubmitting
                    ? darkMode
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
                      : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
                    : darkMode
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    } transition-all`}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-lg md:text-xl" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={`mt-8 md:mt-12 text-center p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-sm border ${darkMode
                ? "bg-gray-800/40 border-teal-800/30"
                : "bg-white/60 border-amber-200"
                }`}
            >
              <p
                className={`text-xs md:text-sm ${darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
              >
                © {new Date().getFullYear()} Prabhanjan Puranik. All rights
                reserved.
              </p>
              <p
                className={`text-xs mt-2 ${darkMode ? "text-gray-500" : "text-gray-500"
                  }`}
              >
                Built with ❤️ using React, Framer Motion, and Firebase.
              </p>
            </motion.div>
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
