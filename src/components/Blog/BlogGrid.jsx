import React, { useState } from "react";
import { Calendar, Clock, ArrowRight, Filter, Eye, Heart } from "lucide-react";

const BlogGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const categories = ["All", "Data Analytics Akola", "Excel Training Akola", "Python Training", "Business Intelligence", "IT Services Akola"];
  
  const blogPosts = [
    {
      title: "Python Training Classes in Akola: Complete Beginner's Guide",
      excerpt: "Join Python training classes in Akola and learn data cleaning, analysis, and automation from industry experts.",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&q=80",
      category: "Python Training",
      readTime: "15 min read",
      date: "Jan 10, 2024",
      views: "2.3k",
      likes: "156"
    },
    {
      title: "Power BI Consulting Services in Akola Maharashtra",
      excerpt: "Professional Power BI consulting in Akola. Create interactive dashboards and business intelligence solutions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      category: "Business Intelligence",
      readTime: "10 min read",
      date: "Jan 8, 2024",
      views: "1.8k",
      likes: "124"
    },
    {
      title: "IT Career Opportunities in Akola: Data Analyst Jobs",
      excerpt: "Explore growing IT career opportunities in Akola. From data analyst to consultant roles in Maharashtra.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      category: "IT Services Akola",
      readTime: "12 min read",
      date: "Jan 5, 2024",
      views: "3.1k",
      likes: "289"
    },
    {
      title: "Excel Consulting Services Akola: XLOOKUP vs VLOOKUP",
      excerpt: "Professional Excel consulting in Akola. Learn advanced lookup functions with real-world examples.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      category: "Excel Training Akola",
      readTime: "8 min read",
      date: "Jan 3, 2024",
      views: "4.2k",
      likes: "367"
    },
    {
      title: "SQL Training Institute in Akola: Advanced Analytics",
      excerpt: "Learn SQL window functions and advanced analytics at Akola's premier data training institute.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80",
      category: "Data Analytics Akola",
      readTime: "18 min read",
      date: "Dec 28, 2023",
      views: "1.9k",
      likes: "198"
    },
    {
      title: "Data Visualization Services Akola Maharashtra",
      excerpt: "Professional data visualization services in Akola. Create impactful charts and dashboards for your business.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      category: "Data Analytics Akola",
      readTime: "14 min read",
      date: "Dec 25, 2023",
      views: "2.7k",
      likes: "234"
    }
  ];

  const filteredPosts = activeFilter === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-100/50 to-pink-100/50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Latest
            <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Articles
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Stay updated with the latest insights, tutorials, and industry trends
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                    : "bg-white/80 dark:bg-slate-700/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article key={index} className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-slate-700/50 hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-gray-800 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
                
                {/* Stats */}
                <div className="absolute bottom-4 right-4 flex items-center gap-3 text-white text-sm">
                  <span className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {post.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="h-3 w-3" />
                    {post.likes}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <button className="group/btn inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:gap-3 transition-all duration-300">
                  Read More
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        {/* Load more button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;