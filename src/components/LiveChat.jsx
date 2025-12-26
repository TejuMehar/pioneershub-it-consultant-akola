import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const ScrollProgressButton = () => {
  // Manually set your phone number here
  const phoneNumber = "919343771276"; // Replace with your number

  // Open WhatsApp
  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="fixed bottom-10 right-5 z-50 flex flex-col items-center space-y-3">
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110"
      >
        <FaWhatsapp size={24} />
      </button>

      {/* Scroll Progress Button */}
      {/* <div
        onClick={scrollToTop}
        className="w-14 h-14 relative cursor-pointer"
      >
        <svg className="w-14 h-14 rotate-[-90deg]" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#ddd"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#3b82f6"
            strokeWidth="8"
            fill="none"
            strokeDasharray={2 * Math.PI * 45}
            strokeDashoffset={2 * Math.PI * 45 * (1 - scrollPercent / 100)}
            strokeLinecap="round"
          />
        </svg>
        <FaArrowUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600" />
      </div> */}
    </div>
  );
};

export default ScrollProgressButton;
