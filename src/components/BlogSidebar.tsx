import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const categories = [
  { name: 'Business', count: 5 },
  { name: 'Design', count: 7 },
  { name: 'Development', count: 3 },
  { name: 'Management', count: 2 },
  { name: 'Software', count: 8 },
];

const relatedPosts = [
  {
    id: 1,
    title: '15 Secrets Of Digital Transformation',
    date: 'Sep 03, 2024',
    image: '/blog-1.jpg',
    slug: '15-secrets-of-digital-transformation',
  },
  {
    id: 2,
    title: 'Plan Your Project with Your Software',
    date: 'Sep 06, 2024',
    image: '/blog-2.jpg',
    slug: 'plan-your-project-with-your-software',
  },
  {
    id: 3,
    title: 'Tech Conference Events 2023/2024',
    date: 'Sep 06, 2024',
    image: '/blog-3.jpg',
    slug: 'tech-conference-events-2023-2024',
  },
];

const tags = [
  'Learning', 'Course', 'Business', 'Education', 'Online', 
  'Technology', 'Design', 'Development'
];

export default function BlogSidebar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-text-primary mb-4">Search Here</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Post..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-dark transition-colors">
            <Search className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-text-primary mb-4">Post Categories</h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                to="#"
                className="flex items-center justify-between text-text-secondary hover:text-primary transition-colors"
              >
                <span>{category.name}</span>
                <span className="text-sm">{category.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Related Posts */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-text-primary mb-4">Related Posts</h3>
        <div className="space-y-4">
          {relatedPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="flex gap-4 group"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-20 h-16 object-cover rounded-lg"
              />
              <div>
                <h4 className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-text-secondary mt-1">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Instagram */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-text-primary mb-4">Instagram</h3>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gray-100 rounded-lg overflow-hidden"
            >
              <img
                src={`/blog-${(i % 3) + 1}.jpg`}
                alt={`Instagram ${i}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-text-primary mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              to="#"
              className="px-3 py-1 bg-gray-100 text-text-secondary text-sm rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
