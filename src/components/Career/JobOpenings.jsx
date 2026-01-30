import React from "react";
import { MapPin, Clock, Users, Briefcase, Star, ArrowRight } from "lucide-react";

const JobOpenings = () => {
  const jobs = [
    {
      title: "Data Analyst Intern",
      type: "Unpaid Internship",
      location: "Remote/Akola",
      salary: "Unpaid (Certificate + Experience)",
      requirements: ["Excel proficiency", "Basic Python knowledge", "Analytical mindset"],
      description: "Learn data cleaning, analysis, and visualization while working on real client projects. Perfect for students and fresh graduates.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
      featured: true,
      applicants: "5+ applied"
    },
    {
      title: "Digital Marketing Intern",
      type: "Unpaid Internship",
      location: "Remote", 
      salary: "Unpaid (Certificate + Portfolio)",
      requirements: ["Social media knowledge", "Content creation", "Basic design skills"],
      description: "Help grow our brand presence and create engaging content for our digital platforms.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&q=80",
      featured: false,
      applicants: "3+ applied"
    },
    {
      title: "Business Development Intern",
      type: "Unpaid Internship",
      location: "Remote",
      salary: "Unpaid (Certificate + Network)",
      requirements: ["Communication skills", "Research abilities", "LinkedIn proficiency"],
      description: "Help identify potential clients and support our business growth initiatives.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      featured: false,
      applicants: "2+ applied"
    },
    {
      title: "Content Writing Intern",
      type: "Unpaid Internship",
      location: "Remote",
      salary: "Unpaid (Certificate + Bylines)",
      requirements: ["Excellent writing", "Research skills", "Tech interest"],
      description: "Create blog posts, case studies, and technical content for our website and social media.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80",
      featured: true,
      applicants: "4+ applied"
    },
    {
      title: "Web Development Intern",
      type: "Unpaid Internship",
      location: "Remote",
      salary: "Unpaid (Certificate + Projects)",
      requirements: ["HTML/CSS/JS", "React basics", "Portfolio projects"],
      description: "Assist in building and maintaining our web applications and client websites.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80",
      featured: false,
      applicants: "6+ applied"
    },
    {
      title: "Graphic Design Intern",
      type: "Unpaid Internship",
      location: "Remote",
      salary: "Unpaid (Certificate + Portfolio)",
      requirements: ["Canva/Figma", "Creative mindset", "Design portfolio"],
      description: "Create visual content, infographics, and marketing materials for our brand.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&q=80",
      featured: false,
      applicants: "3+ applied"
    }
  ];

  return (
    <section id="openings" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-gradient-to-br from-red-100/50 to-pink-100/50 dark:from-red-900/20 dark:to-pink-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
            <Briefcase className="h-4 w-4 text-green-600" />
            <span className="text-green-600 dark:text-green-400 font-medium text-sm">Open Positions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Find Your
            <span className="block bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Dream Role
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our mission to transform businesses through data and technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <div key={index} className={`group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-slate-700/50 hover:-translate-y-2 ${job.featured ? 'ring-2 ring-red-500/50' : ''}`}>
              {job.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                    <Star className="h-3 w-3 fill-current" />
                    Featured
                  </div>
                </div>
              )}
              
              {/* Job image header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={job.image} 
                  alt={job.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 text-sm mb-1">
                    <Clock className="h-4 w-4" />
                    <span>{job.type}</span>
                    <MapPin className="h-4 w-4 ml-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="text-lg font-bold">{job.salary}</div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {job.title}
                  </h3>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {job.applicants}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {job.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Requirements:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd1fjesYavPpxkhenWncyuxmoBaHIZAQKlOoDGLXzil4UasoA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn w-full py-4 px-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-lg hover:shadow-red-500/25"
                >
                  Apply Now
                  <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl">
            <div className="text-gray-600 dark:text-gray-300">
              Don't see the right fit?
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd1fjesYavPpxkhenWncyuxmoBaHIZAQKlOoDGLXzil4UasoA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-colors"
            >
              Submit Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobOpenings;