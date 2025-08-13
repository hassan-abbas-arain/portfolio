export default function Skills() {
  const skillCategories = [
    {
      icon: "fas fa-brain",
      title: "AI & Machine Learning",
      color: "text-primary",
      skills: ["Python", "LangChain", "LLM", "Hugging Face", "OpenAI", "RAG", "Deep Learning", "PyTorch", "Torch", "BioBERT"]
    },
    {
      icon: "fas fa-server",
      title: "Backend Development",
      color: "text-accent",
      skills: ["FastAPI", "Flask", "RESTful APIs", "SQL", "OOP", "JWT", "Docker", "CI/CD Deployment"]
    },
    {
      icon: "fas fa-eye",
      title: "Computer Vision & NLP",
      color: "text-primary",
      skills: ["OpenCV", "YOLO", "PaddleOCR", "ArcFace", "Vector Embeddings", "FAISS Search", "NLP"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-surface p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <i className={`${category.icon} ${category.color} text-2xl mr-3`}></i>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
