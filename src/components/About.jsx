import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Terminal from "../components/Terminal/Terminal";
import ProfileCard from "../components/ProfileCard/ProfileCard";

// Add JetBrains Mono font to the component
const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
`;

const About = ({ darkMode, id }) => {
  return (
    <>
      <Helmet>
        <title>Prabhanjan | Frontend Developer (React)</title>
        <meta
          name="description"
          content="Prabhanjan is a Frontend Developer with 2.5+ years of experience in React, JavaScript, Next.js, and modern UI development."
        />
        <meta
          name="google-site-verification"
          content="mY2dKAWA12GoDucUcqN0BhqcMCw4wMd9MXKVcuvnMqM"
        />
        <meta
          name="keywords"
          content="Prabhanjan, React Developer, Frontend Developer, JavaScript, Portfolio, Bangalore"
        />
        <meta name="author" content="Prabhanjan" />
        <meta property="og:title" content="Prabhanjan | Frontend Developer" />
        <meta
          property="og:description"
          content="React Frontend Developer specializing in scalable UI, performance, and modern web apps."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prabhanjansp.web.app/#about" />
        <meta
          property="og:image"
          content="https://prabhanjansp.web.app/#about"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <style>{fontStyle}</style>
      </Helmet>

      <motion.section
        id={id}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`relative min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden ${darkMode ? "bg-zinc-900" : "bg-zinc-50"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20">
            
            {/* Terminal Section - Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-1"
            >
              <Terminal darkMode={darkMode} />
            </motion.div>

            {/* Right Column - Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 lg:order-2"
            >
              <ProfileCard darkMode={darkMode} />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default About;