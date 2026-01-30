import React, { useEffect } from "react";
import BlogHero from "../components/Blog/BlogHero";
import FeaturedPosts from "../components/Blog/FeaturedPosts";
import BlogGrid from "../components/Blog/BlogGrid";
import Newsletter from "../components/Blog/Newsletter";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog - Data Analytics Insights & IT Tips | Pioneershub Akola";
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <BlogHero />
      <FeaturedPosts />
      <BlogGrid />
      <Newsletter />
    </div>
  );
};

export default Blog;