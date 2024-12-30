import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Additional from './components/Additional';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <About />
        <Education />
        <Projects />
        <Skills />
        <Additional />
      </main>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Yathnesh Kasukurthi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;