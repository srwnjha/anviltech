import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, MessageSquare, Facebook, Twitter, Linkedin, Instagram, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import BlogSidebar from '@/components/BlogSidebar';

const blogPost = {
  title: '15 Secrets Of Digital Transformation',
  date: 'SEP 03, 2024',
  author: 'Bernard Rodgers',
  comments: 35,
  image: '/blog-1.jpg',
  content: `
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.</p>
    
    <blockquote class="my-8 pl-6 border-l-4 border-primary italic text-text-secondary">
      Combined with a handful of model sentence structures, generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
    </blockquote>
    
    <p>It must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself.</p>
  `,
};

const comments = [
  {
    id: 1,
    name: 'John Abraham',
    date: 'January 12, 2024 At 9:00am',
    avatar: '/testimonial-1.jpg',
    text: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.',
  },
  {
    id: 2,
    name: 'Lily Watson',
    date: 'January 12, 2024 At 9:00am',
    avatar: '/testimonial-2.jpg',
    text: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.',
  },
  {
    id: 3,
    name: 'John Abraham',
    date: 'January 12, 2024 At 9:00am',
    avatar: '/testimonial-1.jpg',
    text: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.',
  },
  {
    id: 4,
    name: 'John Abraham',
    date: 'January 12, 2024 At 9:00am',
    avatar: '/testimonial-2.jpg',
    text: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.',
  },
];

export default function BlogDetailPage() {
  useParams(); // Get slug from URL

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Comment posted successfully!');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          title={blogPost.title}
          breadcrumb={[
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]}
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Featured Image */}
                  <div className="rounded-2xl overflow-hidden mb-8">
                    <img
                      src={blogPost.image}
                      alt={blogPost.title}
                      className="w-full aspect-video object-cover"
                    />
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-6 text-sm text-text-secondary mb-6">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      BY
                    </span>
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      COMMENTS {blogPost.comments}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {blogPost.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl font-bold text-text-primary mb-6">
                    {blogPost.title}
                  </h1>

                  {/* Content */}
                  <div
                    className="prose prose-lg max-w-none text-text-secondary mb-10"
                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                  />

                  {/* Additional Images */}
                  <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <img
                      src="/blog-2.jpg"
                      alt="Blog content"
                      className="rounded-xl"
                    />
                    <img
                      src="/about-team.jpg"
                      alt="Blog content"
                      className="rounded-xl"
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-4 mb-10 py-6 border-t border-b border-gray-100">
                    <span className="font-semibold text-text-primary">SHARE:</span>
                    {['PLANNING', 'INDUSTRIAL', 'CREATIVE'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-text-secondary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Social Share */}
                  <div className="flex items-center gap-4 mb-10">
                    <span className="font-semibold text-text-primary">SHARE:</span>
                    <div className="flex gap-2">
                      {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                        <button
                          key={i}
                          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                        >
                          <Icon className="w-4 h-4" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Author */}
                  <div className="bg-gray-50 rounded-xl p-6 mb-10">
                    <div className="flex items-start gap-4">
                      <img
                        src="/testimonial-1.jpg"
                        alt={blogPost.author}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-text-primary">Author: {blogPost.author}</h4>
                        <p className="text-text-secondary text-sm mt-2">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                        </p>
                        <div className="flex gap-2 mt-3">
                          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                            <button key={i} className="text-text-secondary hover:text-primary">
                              <Icon className="w-4 h-4" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Prev/Next */}
                  <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <Link
                      to="#"
                      className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:border-primary transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5 text-primary" />
                      <div>
                        <span className="text-xs text-text-secondary">PREVIOUS POST</span>
                        <p className="font-semibold text-text-primary text-sm">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                      </div>
                    </Link>
                    <Link
                      to="#"
                      className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:border-primary transition-colors text-right justify-end"
                    >
                      <div>
                        <span className="text-xs text-text-secondary">NEXT POST</span>
                        <p className="font-semibold text-text-primary text-sm">Dignissimos ducimus qui blanditiis praesentiu deleniti atque corrupti quos dolores.</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </Link>
                  </div>

                  {/* Comments */}
                  <div className="mb-10">
                    <h3 className="text-xl font-bold text-text-primary mb-6">COMMENTS</h3>
                    <div className="space-y-6">
                      {comments.map((comment) => (
                        <div key={comment.id} className="flex gap-4">
                          <img
                            src={comment.avatar}
                            alt={comment.name}
                            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-bold text-text-primary">{comment.name}</h4>
                              <span className="text-xs text-text-secondary">{comment.date}</span>
                            </div>
                            <p className="text-text-secondary text-sm mb-3">{comment.text}</p>
                            <button className="text-xs font-semibold text-primary hover:underline">
                              REPLY
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Comment Form */}
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-6">POST COMMENTS</h3>
                    <form onSubmit={handleCommentSubmit}>
                      <textarea
                        placeholder="Write Your Comments..."
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none mb-4"
                      />
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <input
                          type="text"
                          placeholder="Website"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                        <input
                          type="text"
                          placeholder="Name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all mb-4"
                      />
                      <button
                        type="submit"
                        className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                      >
                        POST COMMENT
                      </button>
                    </form>
                  </div>
                </motion.article>
              </div>

              {/* Sidebar */}
              <motion.aside
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <BlogSidebar />
              </motion.aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
