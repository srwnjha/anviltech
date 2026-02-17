import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Services from '@/sections/Services';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          title="Service"
          breadcrumb={[
            { name: 'Home', path: '/' },
            { name: 'Service', path: '/services' },
          ]}
        />
        <div className="py-20">
          <Services />
        </div>
      </main>
      <Footer />
    </div>
  );
}
