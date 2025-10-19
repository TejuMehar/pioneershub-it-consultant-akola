import React from "react";

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-900 py-24 flex items-center justify-center">
      {/* Soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.4)_0%,_transparent_70%)] pointer-events-none" />

      {/* Light blurred accents */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-gray-400/30 blur-3xl rounded-full" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gray-500/20 blur-3xl rounded-full" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-500 mx-auto rounded-full" />
      </div>

      {/* 👇 Fade to white at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
};

export default PageHeader;
