import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ContactInfo from '@/sections/ContactInfo';
import ContactForm from '@/sections/ContactForm';
import MapSection from '@/sections/MapSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          title="Contact Us"
          breadcrumb={[
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]}
        />
        <ContactInfo />
        <ContactForm />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
