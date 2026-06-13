
"use client";

import { MessageCircle } from "lucide-react";

export function ParentSupport() {
  const openWhatsApp = () => {
    window.open("https://wa.me/917987220105?text=Hello%20OmPath%20Math%20Academy%2C%20I%20have%20an%20inquiry%20regarding...", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3 group">
      <div className="bg-white px-4 py-2 rounded-2xl shadow-xl text-primary font-bold text-sm border-2 border-primary/5 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
        Need Help? Chat with Us!
      </div>
      <button
        onClick={openWhatsApp}
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </button>
    </div>
  );
}
