import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CV />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;