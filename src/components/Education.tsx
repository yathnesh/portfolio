import React from 'react';

export default function Education() {
  const education = [
    {
      school: "VIT-AP University, Amaravati",
      degree: "BTech (Computer Science)",
      period: "August 2022 - PRESENT",
      details: "Current CGPA: 8.6"
    },
    {
      school: "NARAYANA Junior College, Vijayawada",
      degree: "Intermediate (11th and 12th)",
      period: "May 2020 - April 2022",
      details: "Percentage: 90.8"
    },
    {
      school: "Chigurupati Sri Krishnaveni Talent School, Vijayawada",
      degree: "10th grade",
      period: "July 2019 - August 2020",
      details: "Percentage: 86.8"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{edu.school}</h3>
              <p className="text-lg text-gray-700">{edu.degree}</p>
              <p className="text-gray-600">{edu.period}</p>
              <p className="text-gray-600 mt-2">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}