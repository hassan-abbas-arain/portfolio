import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import SoftSkills from "@/components/soft-skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Certificates from "@/components/certificates";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="bg-slate-900 text-slate-100 font-sans">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <SoftSkills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">© 2025 Hassan Abbas. All rights reserved.</p>
          <p className="text-slate-500 text-sm mt-2">AI Engineer & Machine Learning Specialist</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="mailto:hassanabbas2975@gmail.com" className="text-slate-400 hover:text-primary transition-colors" title="Email">
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a href="https://linkedin.com/in/hassan-abbas-arain" className="text-slate-400 hover:text-primary transition-colors" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://github.com/hassan-abbas-arain" className="text-slate-400 hover:text-primary transition-colors" title="GitHub" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
