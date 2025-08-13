export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const downloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement("a");
    link.href = "/api/download-cv";
    link.download = "Hassan_Abbas_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              AI Engineer & Machine Learning Specialist
            </h3>
            <p className="text-slate-300 mb-4">
              I'm a passionate AI engineer currently pursuing my Bachelor's in
              Computer Science at FAST NUCES, Karachi. With hands-on experience
              in building LLM-integrated applications, RAG pipelines, and
              production-grade AI services, I specialize in creating intelligent
              solutions that solve real-world problems.
            </p>
            <p className="text-slate-300 mb-6">
              My expertise spans across Python development, FastAPI, machine
              learning, computer vision, and natural language processing. I'm
              particularly interested in responsible AI development and creating
              systems that deliver measurable impact.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Let's Talk
              </button>
              <button
                onClick={downloadCV}
                className="border border-slate-600 hover:border-primary text-white px-6 py-2 rounded-lg transition-colors"
              >
                Download CV
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface p-6 rounded-lg">
              <div className="text-primary text-2xl font-bold">1</div>
              <div className="text-slate-400">Years Experience</div>
            </div>
            <div className="bg-surface p-6 rounded-lg">
              <div className="text-accent text-2xl font-bold">10+</div>
              <div className="text-slate-400">Projects Completed</div>
            </div>
            <div className="bg-surface p-6 rounded-lg">
              <div className="text-primary text-2xl font-bold">20+</div>
              <div className="text-slate-400">Technologies</div>
            </div>
            <div className="bg-surface p-6 rounded-lg">
              <div className="text-accent text-2xl font-bold">5+</div>
              <div className="text-slate-400">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
