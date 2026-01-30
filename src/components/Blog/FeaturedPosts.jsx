import React from "react";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedPosts = () => {
  const featuredPosts = [
    {
      title: "Best Data Analytics Services in Akola: Complete Guide 2024",
      excerpt: "Discover why Akola businesses are choosing professional data analytics services to drive growth and make better decisions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      category: "Data Analytics Akola",
      readTime: "8 min read",
      date: "Jan 15, 2024",
      featured: true
    },
    {
      title: "Excel Training in Akola: From Beginner to Advanced",
      excerpt: "Complete Excel training program available in Akola. Learn advanced formulas, automation, and data analysis techniques.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      category: "Excel Training Akola",
      readTime: "12 min read",
      date: "Jan 12, 2024",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-6">
            <TrendingUp className="h-4 w-4 text-blue-600" />
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">Featured Articles</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Must-Read
            <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Deep dives into the latest trends and practical guides to accelerate your success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <article key={index} className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 dark:border-slate-700/50 hover:-translate-y-2">
              {/* Featured badge */}
              <div className="absolute top-6 left-6 z-10">
                <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                  <TrendingUp className="h-3 w-3" />
                  Featured
                </div>
              </div>
              
              {/* Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Category badge */}
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-gray-800 text-sm font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                  {post.excerpt}
                </p>
                
                {index === 0 ? (
                  <Link 
                    to="/blog/data-analytics-akola"
                    className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <Link 
                    to="/blog/excel-training-akola"
                    className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;