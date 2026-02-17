import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import CaseStudies from '@/sections/CaseStudies';
import Testimonials from '@/sections/Testimonials';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          title="Portfolio"
          breadcrumb={[
            { name: 'Home', path: '/' },
            { name: 'Portfolio', path: '/portfolio' },
          ]}
        />
        <div className="py-20">
          <CaseStudies />
        </div>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
