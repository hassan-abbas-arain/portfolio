export default function Projects() {
  const projects = [
    {
      icon: "fas fa-heartbeat",
      iconColor: "text-red-500",
      title: "CureBridge - AI Telehealth Platform",
      description: "Comprehensive AI-powered telehealth platform with real-time video consultations, live transcription using Deepgram, BioBERT NER for symptom extraction, and ensemble disease prediction models.",
      technologies: [
        { name: "BioBERT", color: "bg-primary/20 text-primary" },
        { name: "Deepgram", color: "bg-accent/20 text-accent" },
        { name: "WebSocket", color: "bg-primary/20 text-primary" },
        { name: "Docker", color: "bg-accent/20 text-accent" },
        { name: "XLNet", color: "bg-primary/20 text-primary" },
        { name: "JWT", color: "bg-accent/20 text-accent" }
      ],
      githubLink: "#",
      demoLink: "#"
    },
    {
      icon: "fas fa-video",
      iconColor: "text-blue-500",
      title: "Smart Surveillance System",
      description: "Real-time multi-camera surveillance system with YOLOv8 person detection, ArcFace face recognition, polygon-based tracking, and thread-safe processing across multiple video streams.",
      technologies: [
        { name: "YOLOv8", color: "bg-primary/20 text-primary" },
        { name: "ArcFace", color: "bg-accent/20 text-accent" },
        { name: "OpenCV", color: "bg-primary/20 text-primary" },
        { name: "Threading", color: "bg-accent/20 text-accent" },
        { name: "Flask", color: "bg-primary/20 text-primary" }
      ],
      githubLink: "#",
      demoLink: "#"
    },
    {
      icon: "fas fa-robot",
      iconColor: "text-green-500",
      title: "AI HR Chatbot & Analytics",
      description: "Intelligent HR management system with fine-tuned DistilBERT for policy classification, dynamic response generation, analytics dashboard, and secure authentication with AES encryption.",
      technologies: [
        { name: "DistilBERT", color: "bg-primary/20 text-primary" },
        { name: "Flask", color: "bg-accent/20 text-accent" },
        { name: "PyPDF2", color: "bg-primary/20 text-primary" },
        { name: "RapidFuzz", color: "bg-accent/20 text-accent" },
        { name: "AES", color: "bg-primary/20 text-primary" },
        { name: "JWT", color: "bg-accent/20 text-accent" }
      ],
      githubLink: "#",
      demoLink: "#"
    },
    {
      icon: "fas fa-file-check",
      iconColor: "text-yellow-500",
      title: "TekIndoor - Document Verification",
      description: "Intelligent document verification system using PaddleOCR for IBAN and cheque number extraction from scanned images, with rule-based validation and regex parsing for financial data verification.",
      technologies: [
        { name: "PaddleOCR", color: "bg-primary/20 text-primary" },
        { name: "Flask", color: "bg-accent/20 text-accent" },
        { name: "Regex", color: "bg-primary/20 text-primary" },
        { name: "OCR Engine", color: "bg-accent/20 text-accent" }
      ],
      githubLink: "#",
      demoLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-surface rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className={`${project.icon} ${project.iconColor} text-2xl mr-3`}></i>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`${tech.color} px-2 py-1 rounded text-sm`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a href={project.githubLink} className="text-primary hover:underline">
                    <i className="fab fa-github mr-1"></i>View Code
                  </a>
                  <a href={project.demoLink} className="text-accent hover:underline">
                    <i className="fas fa-external-link-alt mr-1"></i>Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
