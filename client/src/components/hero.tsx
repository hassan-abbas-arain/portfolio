import professionalPhoto from "@assets/Untitled design_1755022180365.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="text-accent font-medium mb-4">Hello, I'm</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Hassan Abbas
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-300 mb-6">AI Engineer & Machine Learning Specialist</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Results-driven AI engineer with hands-on experience in building LLM-integrated applications, 
              RAG pipelines, and production-grade AI services. Passionate about responsible AI and 
              designing intelligent solutions that deliver real-world impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="border border-slate-600 hover:border-primary text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View Projects
              </button>
            </div>
            <div className="flex space-x-6 mt-8">
              <a href="mailto:hassanabbas2975@gmail.com" className="text-slate-400 hover:text-primary transition-colors">
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a href="https://linkedin.com/in/hassan-abbas-arain" className="text-slate-400 hover:text-primary transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://github.com/hassan-abbas-arain" className="text-slate-400 hover:text-primary transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="tel:+923133722595" className="text-slate-400 hover:text-primary transition-colors">
                <i className="fas fa-phone text-xl"></i>
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src={professionalPhoto} 
                  alt="Hassan Abbas - Professional Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
