import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Testimonials from '@/sections/Testimonials';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          title="Testimonial"
          breadcrumb={[
            { name: 'Home', path: '/' },
            { name: 'Testimonial', path: '/testimonials' },
          ]}
        />
        <div className="py-20">
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  );
}
