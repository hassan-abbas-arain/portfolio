export default function Certificates() {
  const certificates = [
    {
      icon: "fas fa-python",
      iconColor: "text-blue-500",
      title: "Python OOP + Data Structures",
      issuer: "Certificate via Course",
      date: "Feb 2023 - Mar 2023",
      description: "Comprehensive Python programming certification covering object-oriented programming and advanced data structures."
    },
    {
      icon: "fas fa-database",
      iconColor: "text-green-500", 
      title: "Astera Bootcamp: Data Integration",
      issuer: "Certificate via BootCamp",
      date: "Mar 2023",
      description: "Intensive bootcamp focused on modern data integration techniques and best practices."
    },
    {
      icon: "fas fa-broom",
      iconColor: "text-purple-500",
      title: "Data Cleaning - DataCamp",
      issuer: "Certificate in Python Cleaning",
      date: "Sep 2024 - Oct 2024",
      description: "Advanced data cleaning techniques using Python for data preprocessing and preparation."
    },
    {
      icon: "fas fa-brain",
      iconColor: "text-red-500",
      title: "Supervised Machine Learning",
      issuer: "ML, KNN, Visualization",
      date: "Jan 2024 - Mar 2025",
      description: "Comprehensive machine learning course covering supervised algorithms, KNN, and data visualization."
    },
    {
      icon: "fas fa-network-wired",
      iconColor: "text-orange-500",
      title: "Advanced Learning Algorithms", 
      issuer: "Tensorflow, NN Models",
      date: "Jan 2024 - Mar 2025",
      description: "Deep learning specialization focusing on TensorFlow implementation and neural network architectures."
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-surface rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
              <div className="flex items-center mb-4">
                <i className={`${cert.icon} ${cert.iconColor} text-2xl mr-3`}></i>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary leading-tight">{cert.title}</h3>
                  <p className="text-slate-400 text-sm">{cert.issuer}</p>
                </div>
              </div>
              <div className="mb-3">
                <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">{cert.date}</span>
              </div>
              <p className="text-slate-400 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}