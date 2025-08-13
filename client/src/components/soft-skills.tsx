export default function SoftSkills() {
  const softSkills = [
    {
      icon: "fas fa-lightbulb",
      title: "Proactive Issue Resolution",
      description: "Identifying and addressing challenges before they escalate, ensuring smooth project delivery."
    },
    {
      icon: "fas fa-search",
      title: "Troubleshooting",
      description: "Systematic approach to debugging and resolving complex technical issues efficiently."
    },
    {
      icon: "fas fa-hands-helping",
      title: "Peer Support",
      description: "Collaborative mindset, always ready to assist team members and share knowledge."
    },
    {
      icon: "fas fa-seedling",
      title: "Growth Mindset",
      description: "Continuous learning approach, embracing new technologies and methodologies."
    },
    {
      icon: "fas fa-eye",
      title: "Open-Mindedness",
      description: "Receptive to feedback and diverse perspectives, fostering innovation and improvement."
    },
    {
      icon: "fas fa-tasks",
      title: "Versatility",
      description: "Adaptability across various projects and technologies, from AI to backend development."
    },
    {
      icon: "fas fa-clock",
      title: "Schedule Optimization",
      description: "Efficient time management and prioritization skills for maximum productivity."
    }
  ];

  return (
    <section id="soft-skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Professional Qualities</h2>
        <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
          Beyond technical expertise, I bring essential soft skills that enhance team collaboration and project success.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill, index) => (
            <div key={index} className="bg-surface p-6 rounded-lg hover:bg-surface/80 transition-colors">
              <div className="flex items-start mb-3">
                <i className={`${skill.icon} text-accent text-xl mr-3 mt-1`}></i>
                <h3 className="text-lg font-semibold text-primary">{skill.title}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}