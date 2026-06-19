import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Platforms from './components/Platforms';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Experience />
          <Platforms />
          <Skills />
          <Certifications />
          <WhyWorkWithMe />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
