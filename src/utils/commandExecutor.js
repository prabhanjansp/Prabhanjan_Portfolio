import { getDateDisplay } from "./terminalUtils";
import { aboutData } from "../data/AboutData.jsx";
import resume from "../assets/Prabhanjan.pdf"; // Import the resume PDF

// Command output schema for validation
export const CommandOutputSchema = {
    type: 'string',
    content: 'string',
    section: 'string',
};

export const executeCommand = (cmd) => {
    // Validate input
    if (typeof cmd !== 'string') {
        return {
            type: 'error',
            content: 'Invalid command: command must be a string'
        };
    }

    const command = cmd.toLowerCase().trim();

    // Validate empty command
    if (!command) {
        return {
            type: 'error',
            content: 'Please enter a command'
        };
    }

    switch (command) {
        case 'whoami':
            return {
                type: 'info',
                content: `Prabhanjan Puranik - Frontend Developer (React)`
            };
        case 'ls':
            return {
                type: 'info',
                content: `about/  projects/  skills/  experience/  education/  contact/  resume.pdf`
            };
        case 'cat about':
            return {
                type: 'bio',
                content: aboutData?.bio || "Passionate Frontend Developer specializing in React, JavaScript, Next.js, and modern UI development."
            };
        case 'cat skills':
            return {
                type: 'skills',
                content: 'React • JavaScript • Next.js • TypeScript • Tailwind CSS • Framer Motion'
            };
        case 'cat experience':
            return {
                type: 'experience',
                content: '2.5+ Years as Frontend Developer | Bangalore, India'
            };
        case 'cat education':
            return {
                type: 'education',
                content: '🎓 B.E. in Computer Science\n   XYZ University, Bangalore\n   2018 - 2022'
            };
        case 'pwd':
            return {
                type: 'info',
                content: '/home/prabhanjan/portfolio'
            };
        case 'date':
            return {
                type: 'date',
                content: getDateDisplay()
            };
        case 'help':
            return {
                type: 'help',
                content: `Available Commands:
  ────────────────────────────────────────────────
  help        - Show this help menu
  whoami      - Display user info
  ls          - List available sections
  pwd         - Show current directory
  date        - Show current date & time
  clear       - Clear terminal
  exit        - Close terminal session
  
  📄 Content Commands:
  cat about   - Show bio/about me
  cat skills  - Show my skills
  cat experience - Show work experience
  cat education - Show education details
  
  🧭 Navigation Commands:
  home        - Navigate to Home section
  projects    - Navigate to Projects section
  skills      - Navigate to Skills section
  education   - Navigate to Education section
  contact     - Navigate to Contact section
  
  📥 Download Commands:
  download cv - Download my CV/Resume
  
  💡 Quick Tips:
  - Use 'ls' to see all available sections
  - Use 'cat <section>' to view content
  - Use navigation commands to jump to sections
  - Use 'download cv' to get my resume`
            };
        case 'download cv':
        case 'download-cv':
        case 'dl cv':
            return {
                type: 'download',
                content: '📥 Downloading CV...',
                action: 'download_cv'
            };
        case 'exit':
            return {
                type: 'exit',
                content: '👋 Session terminated. Refresh to start new session.'
            };
        case 'home':
            return {
                type: 'navigation',
                content: '🏠 Navigating to Home section...',
                section: 'home'
            };
        case 'projects':
            return {
                type: 'navigation',
                content: '📁 Navigating to Projects section...',
                section: 'projects'
            };
        case 'skills':
            return {
                type: 'navigation',
                content: '🛠️ Navigating to Skills section...',
                section: 'skills'
            };
        case 'contact':
            return {
                type: 'navigation',
                content: '📧 Navigating to Contact section...',
                section: 'contact'
            };
        case 'education':
            return {
                type: 'navigation',
                content: '🎓 Navigating to Education section...',
                section: 'education'
            };
        default:
            return {
                type: 'error',
                content: `Command not found: ${cmd}. Type 'help' for available commands.`
            };
    }
};

// Helper function to trigger CV download
export const downloadCV = () => {
    try {
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Prabhanjan_Puranik_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return true;
    } catch (error) {
        console.error('Error downloading CV:', error);
        return false;
    }
};