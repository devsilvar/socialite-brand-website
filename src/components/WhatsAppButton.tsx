import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "2348034567890"; // Replace with actual number
  const message = encodeURIComponent("Hello, I'd like to discuss investment opportunities with Bluemart Properties.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact via WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
          <MessageCircle className="w-7 h-7 text-white" fill="white" strokeWidth={0} />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card border border-border px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          <p className="text-sm text-foreground">Direct Consultation</p>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
