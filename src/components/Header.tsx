import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">Yathnesh Kasukurthi</h1>
        <p className="text-xl text-gray-300 mb-4">Vijayawada, Andhra Pradesh</p>
        <div className="flex flex-wrap gap-4 items-center text-gray-300">
          <a href="tel:+918978512700" className="flex items-center gap-2 hover:text-white">
            <Phone size={20} />
            (+91) 8978512700
          </a>
          <a href="mailto:yathneshk@gmail.com" className="flex items-center gap-2 hover:text-white">
            <Mail size={20} />
            yathneshk@gmail.com
          </a>
          <a href="mailto:yathnesh.22bce20350@vitapstudent.ac.in" className="flex items-center gap-2 hover:text-white">
            <Mail size={20} />
            yathnesh.22bce20350@vitapstudent.ac.in
          </a>
          <a href="https://www.linkedin.com/in/yathnesh-kasukurthi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
            <Linkedin size={20} />
            LinkedIn Profile
          </a>
          <a href="https://github.com/yathnesh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
            <Github size={20} />
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}