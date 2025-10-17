'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C', 'SQL', 'HTML/CSS'],
    frameworks: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Socket.IO', 'Selenium'],
    'AI/ML': ['LoRA', 'QLoRA', 'RAG', 'LLM Fine-tuning', 'OpenAI Whisper', 'Prompt Engineering'],
    databases: ['MongoDB', 'Mongoose', 'PostgreSQL', 'MySQL', 'Firebase'],
  };

  const projects = [
    {
      title: 'Real-Time Sports Match Organizer',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.IO', 'Tailwind CSS'],
      description: 'Built a full-stack web platform for organizing, discovering, and joining sports matches with real-time updates.',
      highlights: [
        'Utilized Node.js and Express.js for backend APIs',
        'Implemented PIN-based check-ins, team invites, and live score tracking',
        'Integrated Socket.IO for real-time chat and live updates',
        'Designed optimized MongoDB (Mongoose) schemas for users, teams, and matches',
        'Created interactive and dynamic UI experience with React and Tailwind CSS'
      ],
      link: 'https://github.com/Anuraag03'
    },
    {
      title: 'Full Stack Shopping Application',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git'],
      description: 'Developed a responsive e-commerce app with user authentication, cart management, and order history.',
      highlights: [
        'Built secure RESTful APIs with Express.js, Node.js and MongoDB for data persistence',
        'Implemented real-time cart updates and admin panel with role-based access',
        'Created responsive layout with dynamic routing using React',
        'Integrated user authentication and secure payment processing',
        'Designed comprehensive admin dashboard for inventory management'
      ],
      link: 'https://github.com/Anuraag03'
    }
  ];

  const experience = [
    {
      role: 'On-Device AI Intern',
      company: 'Samsung Research Institute',
      period: 'Aug 2024 - Dec 2024',
      location: 'Bengaluru, Karnataka',
      achievements: [
        'Developed a scalable Guardrails Framework to detect and mitigate Toxic language (99.5% accuracy), Gibberish Text (97% accuracy), and Prompt Injections (95% accuracy) in LLM applications',
        'Fine-tuned Large Language Models using LoRA and QLoRA to embed safety mechanisms directly into the models',
        'Improved system reliability and reduced failure cases by integrating Retrieval-Augmented Generation (RAG) and advanced prompt engineering'
      ]
    },
    {
      role: 'Software Development Intern',
      company: 'QualityKiosk Technologies',
      period: 'May 2023 - Jul 2023',
      location: 'Navi Mumbai, Maharashtra',
      achievements: [
        'Developed a scriptless automation testing framework in Java using Selenium to execute test cases via speech or text inputs',
        'Integrated OpenAI Whisper for accurate speech-to-text conversion, improving accessibility and productivity',
        'Enhanced testing efficiency by enabling natural language test execution'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => scrollToSection('home')} className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AA
            </button>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${activeSection === item ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Anuraag Akella
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-300 mb-4">Full Stack Developer</p>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Crafting scalable web applications with modern technologies
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all transform hover:scale-105">
              View Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-8 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-full transition-all transform hover:scale-105">
              Contact Me
            </button>
          </div>
          <div className="flex gap-6 justify-center mt-8">
            <a href="https://github.com/Anuraag03" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/anuraag-akella" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="mailto:anuraagakella03@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate Full Stack Developer currently pursuing my B.Tech in Computer Science and Engineering at 
              <span className="text-purple-400 font-semibold"> Sreenidhi Institute of Science and Technology</span>, maintaining a stellar 
              <span className="text-purple-400 font-semibold"> 9.23 CGPA</span>.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              With expertise in the <span className="text-purple-400 font-semibold">MERN stack</span>, <span className="text-purple-400 font-semibold">AI/ML</span>, and modern web technologies, 
              I specialize in building scalable, intelligent applications. My experience spans from developing on-device AI systems at 
              <span className="text-purple-400 font-semibold"> Samsung Research Institute</span> to creating real-time full-stack web platforms.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm passionate about leveraging cutting-edge technologies to solve real-world problems. My work includes fine-tuning Large Language Models 
              using <span className="text-purple-400 font-semibold">LoRA and QLoRA</span>, implementing <span className="text-purple-400 font-semibold">RAG systems</span>, 
              and building enterprise-grade web applications with real-time capabilities using Socket.IO and modern JavaScript frameworks.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <div className="text-3xl font-bold text-purple-400">9.23</div>
                <div className="text-gray-400 mt-1">CGPA</div>
              </div>
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <div className="text-3xl font-bold text-purple-400">2</div>
                <div className="text-gray-400 mt-1">Internships</div>
              </div>
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <div className="text-3xl font-bold text-purple-400">99.5%</div>
                <div className="text-gray-400 mt-1">AI Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700 mb-8 hover:border-purple-500 transition-all">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">{exp.role}</h3>
                  <p className="text-xl text-gray-300 mt-1">{exp.company}</p>
                </div>
                <div className="text-gray-400 mt-2 sm:mt-0 sm:text-right">
                  <div>{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="text-purple-400 mr-2">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-slate-700 hover:border-purple-500 transition-all hover:transform hover:scale-105">
                <h3 className="text-2xl font-bold text-purple-400 mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-purple-400 mb-4 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, idx) => (
                    <span key={idx} className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg border border-slate-600 hover:border-purple-500 hover:text-purple-400 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Get In Touch</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities and interesting projects. Whether you have a question or just want to say hi, 
            feel free to reach out!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <a href="mailto:anuraagakella03@gmail.com" className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all hover:transform hover:scale-105">
              <svg className="w-12 h-12 mx-auto mb-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Email</h3>
              <p className="text-gray-400 text-sm">anuraagakella03@gmail.com</p>
            </a>
            <a href="https://github.com/Anuraag03" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all hover:transform hover:scale-105">
              <svg className="w-12 h-12 mx-auto mb-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <h3 className="text-lg font-semibold text-purple-400 mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">@Anuraag03</p>
            </a>
            <a href="https://www.linkedin.com/in/anuraag-akella" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all hover:transform hover:scale-105">
              <svg className="w-12 h-12 mx-auto mb-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <h3 className="text-lg font-semibold text-purple-400 mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Anuraag Akella</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-slate-800">
        <p>© 2025 Anuraag Akella. Built with Next.js & Tailwind CSS</p>
      </footer>
    </div>
  );
}
