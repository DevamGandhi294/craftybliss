import { Instagram } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const Footer = () => (
  <footer className="bg-secondary border-t border-border py-10">
    <div className="container mx-auto px-4 flex flex-col items-center gap-4 text-center">
      <p className="font-display text-xl text-primary font-semibold">Craftybliss</p>
      <p className="text-sm text-muted-foreground">Handmade with Love in Surat, Gujarat</p>

      <div className="flex gap-5 mt-2">
        <a
          href="https://www.instagram.com/craftybliss1728?igsh=MXgxb3k2enh3cnkzNQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={22} />
        </a>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="WhatsApp"
        >
          {/* WhatsApp icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
          </svg>
        </a>
      </div>

      <p className="text-xs text-muted-foreground mt-4">
        © {new Date().getFullYear()} Craftybliss – Handmade with Love
      </p>
    </div>
  </footer>
);

export default Footer;
