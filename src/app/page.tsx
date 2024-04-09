import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import Testing from '@/components/Testing'
import Projects from '@/components/ProjectsSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cyril River Louie Malle-Barlow',
  description: 'Portfolio for Cyril Malle-Barlow',
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      {/* <Testing /> */}
      <AboutSection />
      <Projects />
    </main>
  )
}
