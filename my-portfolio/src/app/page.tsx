'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

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
    languages: ['Python', 'C++', 'JavaScript (ES6+)', 'Java', 'SQL', 'HTML5', 'CSS'],
    'frameworks/technologies': ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'TensorFlow', 'PyTorch', 'Docker', 'AWS Lambda, EC2 and S3', ],
    tools: ['Git', 'GitHub', 'VS Code', 'IntelliJ', 'Postman', 'Cursor'],
  };

  const projects = [
  {
    title: 'NotesGlory',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth', 'Multer'],
    description: 'A secure note-taking and file storage web application built using the MERN stack.',
    highlights: [
      'Implemented JWT-based authentication and protected routes for secure user access',
      'Enabled CRUD operations for notes with integrated file upload and management system',
      'Optimized backend API design using Express.js and Mongoose schema modeling',
      'Designed responsive UI in React with Tailwind CSS for seamless user experience'
    ],
    link: 'https://notes-glory-tt3f.vercel.app/',
    date: 'July 2025'
  },
  {
    title: 'Real-Time Sports Match Organizer',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.IO'],
    description: 'Built a full-stack web platform for organizing, discovering, and joining sports matches with real-time updates.',
    highlights: [
      'Utilized Node.js and Express.js for backend APIs',
      'Implemented PIN-based check-ins, team invites, live score tracking and live chat with Socket.IO',
      'Designed optimized MongoDB (Mongoose) schemas for users, teams, and matches',
      'Used React with Tailwind CSS for an interactive and dynamic UI experience'
    ],
    link: 'https://github.com/Anuraag03/sportUp',
    date: 'Jun 2025'
  },
  {
    title: 'Full Stack Shopping Application',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git'],
    description: 'Developed a responsive e-commerce app with user authentication, cart management, and order history.',
    highlights: [
      'Built secure RESTful APIs with Express.js, Node.js and MongoDB for data persistence',
      'Implemented real-time cart updates and admin panel with role-based access',
      'Used React for frontend with dynamic routing, responsive layout, and real-time cart updates'
    ],
    link: 'https://github.com/Anuraag03',
    date: 'Feb 2025'
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

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }

        .grid-background {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .glow-effect {
          box-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
        }

        .text-glow {
          text-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
        }
      `}</style>

      {/* Animated Background Gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-orange-500/10 animate-gradient"></div>
        <div className="absolute inset-0 grid-background"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => scrollToSection('home')} className="text-xl font-semibold hover:opacity-80 transition-opacity cursor-pointer">
              Anuraag Akella
            </button>
            <div className="hidden md:flex items-center gap-8">
              {['about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm capitalize cursor-pointer transition-colors relative ${activeSection === item ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  {item}
                  {activeSection === item && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 animate-fade-in">
            ✨ Looking for opportunities
          </div>
          
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold mb-6 tracking-tight animate-fade-in-up text-glow">
            Anuraag Akella
          </h1>
          
          <div className="overflow-hidden mb-4">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-2 animate-fade-in-up delay-100">
              Software Developer
            </p>

          </div>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Building scalable web applications and intelligent systems with cutting-edge technologies
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up delay-300">
            <button onClick={() => scrollToSection('projects')} className="px-8 py-4 bg-white cursor-pointer text-black rounded-lg font-medium hover:bg-gray-200 transition-all transform hover:scale-105 hover:shadow-xl">
              View Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-8 py-4 cursor-pointer bg-white/5 border border-white/20 rounded-lg font-medium hover:bg-white/10 transition-all transform hover:scale-105">
              Get in Touch
            </button>
          </div>
          
          <div className="flex gap-6 justify-center mt-12 animate-fade-in delay-400">
            <a href="https://github.com/Anuraag03" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/anuraag-akella-799298230" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="mailto:akellaanuraag8@gmail.com" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
          </div>

          {/* Floating Element */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-orange-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-20">
            <span className="text-sm text-gray-400 uppercase tracking-wider">About</span>
            <h2 className="text-5xl sm:text-6xl font-bold mt-4 mb-8">Summary</h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
              I&apos;m a passionate Full Stack Developer with experience in the <span className="text-white font-semibold">MERN stack</span>, <span className="text-white font-semibold">AI/ML</span>, and modern web technologies. 
              I specialize in building scalable, intelligent applications that solve real-world problems.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mt-4">
              My experience spans from developing on-device AI systems at <span className="text-white font-semibold">Samsung Research Institute</span> to creating real-time full-stack web platforms. I focus on building robust, scalable software solutions using technologies like <span className="text-white font-semibold">MERN stack</span>, implementing <span className="text-white font-semibold">RAG systems</span>, and fine-tuning LLMs with <span className="text-white font-semibold">LoRA and QLoRA</span> for production-ready applications.
            </p>

          </div>

          {/* Education */}
          <div className="mb-20 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all glow-effect">
            <h3 className="text-3xl font-bold mb-6">Education</h3>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div>
                <h4 className="text-xl font-semibold mb-2">Bachelor of Engineering in Electronics and Instrumentation</h4>
                <p className="text-gray-400 mb-1">Minor in Computing and Intelligence</p>
                <p className="text-white">Birla Institute of Technology and Science Pilani, Hyderabad Campus</p>
              </div>
              <div className="sm:text-right">
                <div className="text-gray-400">Oct 2021 - Aug 2025</div>
                <div className="text-white font-bold text-2xl mt-2">CGPA: 7.51/10</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-3">Relevant Coursework</p>
              <div className="flex flex-wrap gap-2">
                {['Computer Programming', 'Data Structures & Algorithms', 'OOP', 'Operating Systems', 'Database Systems', 'AI', 'Machine Learning', 'Cryptography', 'IoT'].map((course, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300 hover:bg-white/10 transition-colors">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats with animation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
            {[
              { number: '2', label: 'Internships', desc: 'Samsung Research & QualityKiosk' },
              { number: '5+', label: 'Projects', desc: 'Full Stack & AI/ML' },
              { number: '10+', label: 'Technologies', desc: 'MERN, AI/ML, Cloud' }
            ].map((stat, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all transform hover:scale-105 glow-effect">
                <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">{stat.number}</div>
                <div className="text-white font-medium mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.desc}</div>
              </div>
            ))}
          </div>

          {/* Leadership */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all glow-effect">
            <h3 className="text-3xl font-bold mb-6">Leadership</h3>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div>
                <h4 className="text-xl font-semibold mb-2">Head of Department, Visual Effects</h4>
                <p className="text-white mb-3">BITS Pilani Hyderabad Campus</p>
                <p className="text-gray-400">
                  Led a team of 10+ students in producing professional visual assets for campus hackathons and national-level cultural festivals.
                </p>
              </div>
              <div className="sm:text-right">
                <div className="text-gray-400">Aug 2023 - May 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="text-sm text-gray-400 uppercase tracking-wider">Experience</span>
          <h2 className="text-5xl sm:text-6xl font-bold mt-4 mb-16">Work History</h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all backdrop-blur-sm glow-effect transform hover:translate-x-2">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-lg text-white">{exp.company}</p>
                  </div>
                  <div className="text-gray-400 sm:text-right">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-400 flex items-start group">
                      <span className="text-cyan-400 mr-3 mt-1 group-hover:scale-125 transition-transform">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Carousel */}
      <section id="projects" className="relative py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="text-sm text-gray-400 uppercase tracking-wider">Projects</span>
          <h2 className="text-5xl sm:text-6xl font-bold mt-4 mb-16">Featured Work</h2>
          
          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div className="p-10 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-orange-500/10 border border-white/20 backdrop-blur-sm glow-effect">
                <h3 className="text-3xl font-bold mb-4">{projects[currentProject].title}</h3>
                <p className="text-gray-300 mb-6 text-lg">{projects[currentProject].description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[currentProject].tech.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-gray-200 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {projects[currentProject].highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-cyan-400 mr-3 text-lg">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <a href={projects[currentProject].link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all transform hover:scale-105">
                  View Project
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button onClick={prevProject} className="p-3 cursor-pointer rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex gap-2">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentProject(idx)}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all ${idx === currentProject ? 'bg-white w-8' : 'bg-white/30'}`}
                  />
                ))}
              </div>
              
              <button onClick={nextProject} className="p-3 cursor-pointer rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="text-sm text-gray-400 uppercase tracking-wider">Skills</span>
          <h2 className="text-5xl sm:text-6xl font-bold mt-4 mb-16">Tech Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={category} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all backdrop-blur-sm glow-effect transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-6 capitalize bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, skillIdx) => (
                    <span key={skillIdx} className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
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
      <section id="contact" className="relative py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-sm text-gray-400 uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
            I&apos;m currently open to new opportunities and interesting projects. Whether you have a question or just want to say hi, 
            feel free to reach out!
          </p>

          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a href="mailto:akellaanuraag8@gmail.com" className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all group cursor-pointer relative z-20">
              <svg className="w-10 h-10 mx-auto mb-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
            </a>

            <a href="https://www.linkedin.com/in/anuraag-akella-799298230" target="_blank" rel="noopener noreferrer" className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all group cursor-pointer relative z-20">
              <svg className="w-10 h-10 mx-auto mb-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.761 0 5-2.238 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.967 0-1.75-.79-1.75-1.764s.783-1.764 1.75-1.764c.965 0 1.75.79 1.75 1.764s-.785 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 group-hover:text-white transition-colors">Connect with me</p>
            </a>

            <a href="https://github.com/Anuraag03" target="_blank" rel="noopener noreferrer" className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all group cursor-pointer relative z-20">
              <svg className="w-10 h-10 mx-auto mb-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.387 7.86 10.91.575.106.785-.25.785-.555v-2.086c-3.2.696-3.875-1.366-3.875-1.366-.523-1.33-1.279-1.686-1.279-1.686-1.045-.714.08-.699.08-.699 1.155.083 1.763 1.187 1.763 1.187 1.028 1.77 2.699 1.26 3.358.963.104-.747.402-1.26.73-1.553-2.556-.292-5.244-1.278-5.244-5.693 0-1.258.451-2.287 1.19-3.094-.119-.29-.517-1.46.111-3.04 0 0 .97-.31 3.18 1.183a11.03 11.03 0 0 1 2.9-.389c.986.004 1.981.133 2.91.39 2.21-1.493 3.18-1.183 3.18-1.183.63 1.58.232 2.75.114 3.04.742.807 1.19 1.836 1.19 3.094 0 4.428-2.693 5.397-5.258 5.686.414.356.784 1.07.784 2.156v3.19c0 .309.207.666.791.553C20.715 21.38 24 17.082 24 12 24 5.648 18.352.5 12 .5z"/>
              </svg>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400 group-hover:text-white transition-colors">Check my projects</p>
            </a>
          </div>

          {/* CTA Button */}
          <div className="mt-16">
            <a
              href="mailto:akellaanuraag8@gmail.com"
              className="inline-block px-10 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all transform hover:scale-105 hover:shadow-xl"
            >
              Say Hello 👋
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} <span className="text-white font-medium">Anuraag Akella</span> . All rights reserved.
        </p>
      </footer>
    </div>
  );
}