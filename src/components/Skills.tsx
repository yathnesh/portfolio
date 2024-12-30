import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "R", "SQL"]
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      category: "Full Stack Development",
      skills: ["MongoDB", "Express.js", "React", "Node.js"]
    },
    {
      category: "Machine Learning & AI",
      skills: ["Machine Learning", "Data Analysis"]
    },
    {
      category: "Tools & Technologies",
      skills: ["git"]
    },
    {
      category: "Soft Skills",
      skills: ["Effective Communication", "Problem-Solving"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
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