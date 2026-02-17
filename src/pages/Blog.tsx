import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import LatestNews from '@/sections/LatestNews';

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          title="Blog"
          breadcrumb={[
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]}
        />
        <div className="py-20">
          <LatestNews />
        </div>
      </main>
      <Footer />
    </div>
  );
}
