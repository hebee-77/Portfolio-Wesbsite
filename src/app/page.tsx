import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section id="home" className="w-full pt-20 md:pt-24 lg:pt-32">
          <Hero />
        </section>
        <section id="skills" className="w-full py-12 md:py-16 lg:py-20">
          <Services />
        </section>
        <section id="projects" className="w-full pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20">
          <Projects />
        </section>
        <section id="contact" className="w-full py-12 md:py-16 lg:py-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
