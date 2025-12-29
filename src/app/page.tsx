import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import { ScrollProgressBar, GlowCursor } from '@/components/UIEffects';

export default function Home() {
  return (
    <main style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <ScrollProgressBar />
      <GlowCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
