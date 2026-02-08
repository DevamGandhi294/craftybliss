import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href={getWhatsAppLink()}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={22} fill="white" />
    <span className="hidden sm:inline text-sm font-semibold">Chat with us</span>
  </a>
);

export default WhatsAppFloat;
