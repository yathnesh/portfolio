import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Voice Assistant using Local AI Models",
      description: "A talk back voice assistant that runs on a locally downloaded llm(Ollama,mistral)and speech recognisers using python.",
      link: "https://github.com/yathnesh/talkback_voice_assistant_using_local_llms"
    },
    {
      title: "Twitter Bot Detection",
      description: "Classifies twitter users into bots and real users using 4 models.",
      link: "https://github.com/yathnesh/Twitter-BoT-Detection-using-NUMPY-PANDAS-ML"
    },
    {
      title: "Human Profiling for Policing Purposes",
      description: "Advanced ML and Computer Vision system that analyzes images to create detailed human profiles, extracting information like race, height, body type, clothing, and dominant color for law enforcement assistance.",
      link: "https://github.com/yathnesh/Human_Profiling_for-_policing_purposes"
    },
    {
      title: "To-Do List App",
      description: "A responsive To-Do List application built with React and Material-UI, featuring task management capabilities including adding, editing, deleting, and completing tasks, as well as task group management.",
      link: "https://github.com/yathnesh/To-Do-List"
    }
  ];

  return (
    <section className="py-16 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}