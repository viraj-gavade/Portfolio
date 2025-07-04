import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Always use dark mode
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark-theme');
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
