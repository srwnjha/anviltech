import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import About from '@/sections/About';
import VideoSection from '@/sections/VideoSection';
import Testimonials from '@/sections/Testimonials';
import ConsultationCTA from '@/sections/ConsultationCTA';
import LatestNews from '@/sections/LatestNews';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          title="About Us"
          breadcrumb={[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]}
        />
        <About />
        <VideoSection />
        <Testimonials />
        <ConsultationCTA />
        <LatestNews />
      </main>
      <Footer />
    </div>
  );
}
