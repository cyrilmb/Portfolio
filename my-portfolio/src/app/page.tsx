import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Testing from '@/components/Testing';
import Projects from '@/components/ProjectsSection';

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <Testing />
      <AboutSection />
      <Projects />
    </main>
  );
}
