import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Methodology from '@/components/Methodology';
import SapAi from '@/components/SapAi';
import Certifications from '@/components/Certifications';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingControls from '@/components/FloatingControls';
import ToastContainer from '@/components/ToastContainer';
import BgCanvas from '@/components/BgCanvas';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Ambient Glows */}
      <div className="ambient-glow glow-1" />
      <div className="ambient-glow glow-2" />
      <div className="ambient-glow glow-3" />

      {/* Particle Mesh Canvas */}
      <BgCanvas />

      {/* Global Toast Stack */}
      <ToastContainer />

      {/* Page Sections */}
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Methodology />
      <SapAi />
      <Certifications />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <FloatingControls />
    </main>
  );
}
