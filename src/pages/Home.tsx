import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import Stats from '@/sections/Stats';
import About from '@/sections/About';
import VideoSection from '@/sections/VideoSection';
import Services from '@/sections/Services';
import CaseStudies from '@/sections/CaseStudies';
import Testimonials from '@/sections/Testimonials';
import ConsultationCTA from '@/sections/ConsultationCTA';
import LatestNews from '@/sections/LatestNews';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <VideoSection />
        <Services />
        <CaseStudies />
        <Testimonials />
        <ConsultationCTA />
        <LatestNews />
      </main>
      <Footer />
    </div>
  );
}
