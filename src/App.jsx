import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Code, Database, Cloud, Brain, Users, GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import './App.css';

// Importar imagens
import heroPhoto from './assets/profile-hero.png';
import profilePhoto2 from './assets/profile-about.png';
import teamPhoto from './assets/profile-networking.png';
import logoLight from './assets/logo-light.png';
import logoDark from './assets/logo-dark.png';

// Importar fotos de momentos da carreira
import careerPhoto1 from './assets/20220921_081119.jpg'; // AWS Initiate
import careerPhoto2 from './assets/20240525_170001.jpg'; // Laboratório com alunos
import careerPhoto3 from './assets/20240511_161144.jpg'; // Equipe de desenvolvimento
import careerPhoto4 from './assets/20220922_080121.jpg'; // Evento/conferência
import careerPhoto5 from './assets/20231005_084322.jpg'; // Momento educacional
import careerPhoto6 from './assets/20231005_084815.jpg'; // Apresentação/palestra

// Importar imagens dos projetos de infraestrutura
import projetoTikTok from './assets/projeto-tiktok.png';
import projetoMynd8 from './assets/projeto-mynd8.png';
import projetoPetropolis from './assets/projeto-petropolis.png';

// Componente Header moderno
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#infrastructure', label: 'Infrastructure' },
    { href: '#skills', label: 'Skills' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img src={logoDark} alt="Icoma Education" className="w-10 h-10" />
            <div className="text-2xl font-bold text-white">
              Victor Icoma
            </div>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 font-medium ${
                  activeSection === item.href.substring(1)
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-gray-300">
            <Phone size={16} />
            <span className="text-sm">(16) 98834.0833</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Componente Hero Section estilo infográfico
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo - Informações */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
                VICTOR
                <br />
                <span className="text-blue-400">ICOMA</span>
              </h1>
              <div className="text-xl text-gray-300 mb-2">8+ anos de experiência</div>
              <div className="text-lg text-gray-400 mb-6">01-11-1990 | São Paulo | Brasil</div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mb-8">
              <div className="text-yellow-400 text-2xl font-bold mb-4">ESPECIALIDADES</div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-gray-300">
                  <Brain className="w-4 h-4 mr-2 text-blue-400" />
                  Inteligência Artificial
                </div>
                <div className="flex items-center text-gray-300">
                  <Cloud className="w-4 h-4 mr-2 text-blue-400" />
                  Cloud Computing
                </div>
                <div className="flex items-center text-gray-300">
                  <Code className="w-4 h-4 mr-2 text-blue-400" />
                  Full Stack Development
                </div>
                <div className="flex items-center text-gray-300">
                  <Database className="w-4 h-4 mr-2 text-blue-400" />
                  Arquitetura de Software
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white border-0"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                Portfolio
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Resume
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-4 mt-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:victorsena3010@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          {/* Lado direito - Foto e elementos visuais */}
          <div className="flex justify-center relative">
            <div className="relative">
              {/* Foto principal */}
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl relative z-10">
                <img 
                  src={heroPhoto} 
                  alt="Victor Icoma" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-8 -right-8 w-16 h-16 border-2 border-blue-400 rounded-lg flex items-center justify-center bg-gray-800">
                <Code className="w-8 h-8 text-blue-400" />
              </div>
              
              <div className="absolute -bottom-8 -left-8 w-16 h-16 border-2 border-yellow-400 rounded-lg flex items-center justify-center bg-gray-800">
                <Brain className="w-8 h-8 text-yellow-400" />
              </div>
              
              {/* Quote */}
              <div className="absolute -right-78 top-1/2 transform -translate-y-1/2 bg-gray-800 p-4 rounded-lg border border-gray-700 max-w-xs hidden xl:block">
                <div className="text-yellow-400 text-lg font-bold mb-2">"</div>
                <div className="text-gray-300 text-sm italic">
                  Engenheiro de Dados especializado em IA, focando em criar soluções inovadoras e escaláveis.
                </div>
                <div className="text-yellow-400 text-lg font-bold text-right">"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente About Section estilo infográfico
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo - Foto */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={profilePhoto2} 
                alt="Victor Icoma" 
                className="w-96 h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded font-bold">
                ABOUT
              </div>
            </div>
          </div>
          
          {/* Lado direito - Informações */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-yellow-400">ABOUT</span>
            </h2>
            <div className="text-blue-400 mb-4">victorsena3010@gmail.com</div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Engenheiro de Dados com mais de 8 anos de experiência especializado em desenvolvimento 
              de software, arquitetura de sistemas e inteligência artificial. Atualmente cursando 
              Mestrado em Inteligência Artificial Aplicada à Educação. Experiência sólida em cloud 
              computing (GCP, Azure), desenvolvimento full-stack e gestão de equipes técnicas. 
              Também atuo como professor universitário, compartilhando conhecimento e formando 
              novos profissionais da área.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="text-yellow-400 font-bold mb-2">LOCALIZAÇÃO</div>
                <div className="text-gray-300">São Paulo, Brasil</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="text-yellow-400 font-bold mb-2">EXPERIÊNCIA</div>
                <div className="text-gray-300">8+ Anos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente Experience Timeline
const ExperienceSection = () => {
  const experiences = [
    {
      year: "2021-2023",
      company: "SOULCODE.COM",
      position: "Head de Arquitetura de Software e Tecnologia",
      description: "Liderança técnica no desenvolvimento de plataformas LMS e sistemas de vendas. Gestão de equipes e implementação de soluções escaláveis.",
      technologies: ["TypeScript", "Node.js", "GCP", "Firebase", "BigQuery", "Vertex AI"]
    },
    {
      year: "2020-2021",
      company: "EVO | W12",
      position: "Desenvolvedor Web Angular com .Net Core",
      description: "Desenvolvimento e manutenção de sistemas SPA com Angular, APIs REST com .Net Core e integração com sistemas de pagamento.",
      technologies: ["Angular", "C#", ".NET Core", "SQL Server", "Azure DevOps"]
    },
    {
      year: "2015-2023",
      company: "CENTRO PAULA SOUZA",
      position: "Professor e Pesquisador",
      description: "Docente em cursos técnicos e superiores, orientação de TCCs e pesquisa em tecnologias emergentes.",
      technologies: ["Java", "Python", "JavaScript", "MySQL", "Cloud Computing"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-yellow-400">EXPERIENCE AND</span>
            <br />
            ACHIEVEMENTS
          </h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="bg-yellow-400 text-black px-4 py-2 rounded font-bold text-sm min-w-max">
                {exp.year}
              </div>
              <div className="flex-1 bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-2">{exp.company}</h3>
                <h4 className="text-blue-400 font-semibold mb-3">{exp.position}</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente Projects com infográficos
const ProjectsSection = () => {
  const projects = [
    {
      title: "Escola de Cria + TikTok",
      description: "Plataforma educacional para criadores de conteúdo com infraestrutura robusta e escalável.",
      role: "Arquiteto de Infraestrutura",
      technologies: ["Moodle", "Vertex AI", "MySQL", "Firebase", "Kubernetes"],
      category: "Educação",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      title: "ElasTech + PagBank",
      description: "Iniciativa de inclusão feminina na tecnologia com plataforma de aprendizado e networking.",
      role: "Arquiteto de Infraestrutura", 
      technologies: ["Moodle", "Vertex AI", "MySQL", "Firebase", "Gemini AI"],
      category: "Inclusão Social",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Destino Creator + Uber",
      description: "Plataforma para criadores de conteúdo com foco em monetização e crescimento.",
      role: "Arquiteto de Infraestrutura",
      technologies: ["Moodle", "Vertex AI", "MySQL", "Firebase"],
      category: "Creator Economy",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Grupo Petropolis",
      description: "Sistema institucional corporativo para gestão e comunicação interna.",
      role: "Desenvolvedor Full Stack",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      category: "Corporativo",
      link: "https://www.grupopetropolis.com.br/",
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "Mynd8 - Gestor de Influenciadores",
      description: "Sistema completo de gestão de influenciadores digitais e campanhas de marketing.",
      role: "Arquiteto de Software",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
      category: "Marketing Digital",
      link: "https://projetos.mynd8.com.br/",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Motor de IA para Match de Vagas",
      description: "Sistema inteligente para correspondência automática entre vagas e candidatos usando ML.",
      role: "Engenheiro de IA",
      technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
      category: "Inteligência Artificial",
      icon: <Brain className="w-8 h-8" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-yellow-400">PROJECTS</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="text-yellow-400">
                  {project.icon}
                </div>
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-blue-400 text-sm font-medium mb-3">{project.role}</p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente Skills estilo infográfico
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "SOFTWARE SKILLS",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "Angular", level: 95, icon: "🅰️" },
        { name: "Node.js", level: 95, icon: "🟢" },
        { name: "Python", level: 85, icon: "🐍" }
      ]
    },
    {
      title: "CLOUD & DEVOPS",
      skills: [
        { name: "Google Cloud", level: 95, icon: "☁️" },
        { name: "Azure", level: 85, icon: "🔷" },
        { name: "Docker", level: 90, icon: "🐳" },
        { name: "Kubernetes", level: 85, icon: "⚙️" }
      ]
    }
  ];

  const languages = [
    { name: "Português", level: 100, flag: "🇧🇷" },
    { name: "Inglês", level: 60, flag: "🇺🇸" },
    { name: "Japonês", level: 30, flag: "🇯🇵" }
  ];

  const education = [
    {
      period: "2024-2026",
      institution: "UNIVERSIDADE EUROPEIA DO ATLÂNTICO",
      degree: "Mestrado em Inteligência Artificial Aplicada à Educação",
      gpa: "Em andamento"
    },
    {
      period: "2020-2021",
      institution: "UNIVERSIDADE DAS AMÉRICAS",
      degree: "Pós-graduação em Metodologias Ágeis",
      gpa: "Concluído"
    },
    {
      period: "2016-2018",
      institution: "INSTITUTO FEDERAL DE SP",
      degree: "Tecnologia da Informação",
      gpa: "Concluído"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Skills */}
          <div>
            {skillCategories.map((category, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-yellow-400 font-bold text-lg mb-4">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <span className="mr-2">{skill.icon}</span>
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-yellow-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Languages */}
            <div>
              <h3 className="text-yellow-400 font-bold text-lg mb-4">LANGUAGES</h3>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{lang.flag}</span>
                      <span className="text-white">{lang.name}</span>
                    </div>
                    <div className="w-24 bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${lang.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-6">EDUCATION</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-yellow-400 pl-4">
                  <div className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-bold inline-block mb-2">
                    {edu.period}
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">{edu.institution}</h4>
                  <p className="text-gray-300 text-sm mb-1">{edu.degree}</p>
                  <p className="text-gray-400 text-xs">{edu.gpa}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What can I do */}
          <div>
            <h3 className="text-yellow-400 font-bold text-lg mb-6">WHAT CAN I DO ?</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <h4 className="text-white font-bold mb-2">Desenvolvimento</h4>
                <p className="text-gray-300 text-sm">Criação de soluções full-stack escaláveis e modernas.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <h4 className="text-white font-bold mb-2">Arquitetura</h4>
                <p className="text-gray-300 text-sm">Design de sistemas robustos e arquiteturas cloud-native.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <h4 className="text-white font-bold mb-2">Inteligência Artificial</h4>
                <p className="text-gray-300 text-sm">Implementação de soluções de IA e machine learning.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <h4 className="text-white font-bold mb-2">Educação</h4>
                <p className="text-gray-300 text-sm">Ensino e mentoria em tecnologias emergentes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente Infrastructure - Projetos de Infraestrutura
const InfrastructureSection = () => {
  const infrastructureProjects = [
    {
      image: projetoTikTok,
      title: "Escola de Cria + TikTok",
      description: "Arquitetura completa da plataforma educacional para criadores de conteúdo",
      role: "Arquiteto de Infraestrutura",
      responsibilities: [
        "Configuração de ambiente cloud (GCP)",
        "Implementação de LMS Moodle customizado",
        "Integração com APIs do TikTok",
        "Sistema de autenticação e autorização",
        "Monitoramento e observabilidade"
      ],
      technologies: ["Google Cloud Platform", "Moodle", "Kubernetes", "Firebase", "Vertex AI"],
      metrics: {
        users: "10,000+",
        uptime: "99.9%",
        performance: "< 2s load time"
      }
    },
    {
      image: projetoMynd8,
      title: "Mynd8 - Gestor de Influenciadores",
      description: "Plataforma completa para gestão de influenciadores digitais e campanhas",
      role: "Arquiteto de Software e Infraestrutura",
      responsibilities: [
        "Design da arquitetura de microserviços",
        "Implementação de CI/CD pipeline",
        "Configuração de banco de dados distribuído",
        "Sistema de cache e otimização",
        "Segurança e compliance LGPD"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Docker", "AWS"],
      metrics: {
        campaigns: "500+",
        influencers: "2,000+",
        availability: "99.8%"
      },
      link: "https://projetos.mynd8.com.br/"
    },
    {
      image: projetoPetropolis,
      title: "Grupo Petropolis - Plataforma Institucional",
      description: "Sistema corporativo para gestão e comunicação interna da empresa",
      role: "Desenvolvedor Full Stack e DevOps",
      responsibilities: [
        "Desenvolvimento frontend e backend",
        "Configuração de servidores e deploy",
        "Integração com sistemas legados",
        "Implementação de backup e disaster recovery",
        "Treinamento da equipe interna"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Nginx"],
      metrics: {
        employees: "1,000+",
        modules: "15",
        performance: "A+ GTmetrix"
      },
      link: "https://www.grupopetropolis.com.br/"
    }
  ];

  return (
    <section id="infrastructure" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-yellow-400">PROJETOS DE</span>
            <br />
            INFRAESTRUTURA
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Projetos onde participei ativamente da montagem, organização e estruturação 
            completa da infraestrutura tecnológica, desde a concepção até a implementação.
          </p>
        </div>
        
        <div className="space-y-12">
          {infrastructureProjects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Imagem do projeto */}
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-yellow-400 text-black px-3 py-1 rounded font-bold text-sm">
                      INFRAESTRUTURA
                    </div>
                  </div>
                  {project.link && (
                    <div className="absolute top-4 right-4">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  )}
                </div>
                
                {/* Conteúdo do projeto */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-blue-400 font-semibold mb-4">{project.role}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  {/* Responsabilidades */}
                  <div className="mb-6">
                    <h4 className="text-yellow-400 font-bold mb-3">RESPONSABILIDADES:</h4>
                    <ul className="space-y-2">
                      {project.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-gray-300 text-sm flex items-start">
                          <span className="text-yellow-400 mr-2">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Tecnologias */}
                  <div className="mb-6">
                    <h4 className="text-yellow-400 font-bold mb-3">TECNOLOGIAS:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Métricas */}
                  <div>
                    <h4 className="text-yellow-400 font-bold mb-3">RESULTADOS:</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-white font-bold text-lg">{value}</div>
                          <div className="text-gray-400 text-xs capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente Gallery - Momentos da Carreira
const GallerySection = () => {
  const careerMoments = [
    {
      image: careerPhoto1,
      title: "AWS Initiate",
      description: "Participação em evento AWS para iniciativas educacionais",
      year: "2022"
    },
    {
      image: careerPhoto2,
      title: "Laboratório de Programação",
      description: "Aula prática com alunos no laboratório de informática",
      year: "2024"
    },
    {
      image: careerPhoto3,
      title: "Equipe de Desenvolvimento",
      description: "Trabalho em equipe com desenvolvedores e alunos",
      year: "2024"
    },
    {
      image: careerPhoto4,
      title: "Conferência de Tecnologia",
      description: "Participação em evento de tecnologia e inovação",
      year: "2022"
    },
    {
      image: careerPhoto5,
      title: "Momento Educacional",
      description: "Atividade de ensino e orientação acadêmica",
      year: "2023"
    },
    {
      image: careerPhoto6,
      title: "Apresentação Técnica",
      description: "Palestra sobre tecnologias emergentes",
      year: "2023"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-yellow-400">MOMENTOS DA</span>
            <br />
            CARREIRA
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Uma jornada através dos momentos mais marcantes da minha trajetória profissional, 
            desde eventos de tecnologia até momentos de ensino e desenvolvimento em equipe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerMoments.map((moment, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-gray-800 border border-gray-700 hover:border-yellow-400 transition-all duration-300">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img 
                  src={moment.image} 
                  alt={moment.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-bold inline-block mb-2">
                  {moment.year}
                </div>
                <h3 className="text-xl font-bold mb-2">{moment.title}</h3>
                <p className="text-gray-300 text-sm">{moment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente Contact estilo infográfico
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || 'Contato via Portfólio');
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    );
    window.location.href = `mailto:victorsena3010@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              <span className="text-yellow-400">CONTACT</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-white font-bold">Localização</p>
                  <p className="text-gray-300">São Paulo, Brasil</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-white font-bold">Telefone</p>
                  <a href="tel:+5516988340833" className="text-gray-300 hover:text-white">
                    (16) 98834.0833
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-white font-bold">Email</p>
                  <a href="mailto:victorsena3010@gmail.com" className="text-gray-300 hover:text-white">
                    victorsena3010@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Github className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                ></textarea>
              </div>
              
              <Button type="submit" size="lg" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente Footer
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © 2025 Victor Icoma. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Componente Principal App
function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <InfrastructureSection />
      <SkillsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

