export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="max-w-4xl mx-auto">
          {/* Current Position */}
          <div className="relative pl-8 pb-12">
            <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
            <div className="absolute left-2 top-4 w-0.5 h-full bg-slate-600"></div>
            <div className="bg-surface p-6 rounded-lg ml-4">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">AI Engineer</h3>
                  <p className="text-slate-300">Teknoloje Solutions</p>
                </div>
                <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">Oct 2024 - Present</span>
              </div>
              <ul className="text-slate-400 space-y-2">
                <li>• Built secure Flask backend with JWT authentication and RESTful APIs for employee login, analytics, and chatbot access</li>
                <li>• Fine-tuned DistilBERT transformer model on custom HR policy dataset to classify employee queries by policy type</li>
                <li>• Implemented chatbot logic to generate dynamic responses based on employee database (leave/loan eligibility)</li>
                <li>• Developed intelligent document verification pipeline using PaddleOCR to extract and validate IBAN and cheque numbers</li>
                <li>• Created real-time surveillance system using YOLOv8 and ArcFace for multi-camera face recognition and people tracking</li>
                <li>• Secured sensitive data using AES encryption (CBC mode) and implemented session-based route protection</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 w-4 h-4 bg-accent rounded-full"></div>
            <div className="bg-surface p-6 rounded-lg ml-4">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-accent">Bachelor in Computer Science</h3>
                  <p className="text-slate-300">FAST NUCES Karachi</p>
                </div>
                <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">Aug 2021 - May 2025</span>
              </div>
              <p className="text-slate-400">Specialized in Artificial Intelligence and Machine Learning with focus on practical applications in healthcare and computer vision.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
