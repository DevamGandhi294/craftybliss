import { MapPin, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { getWhatsAppLink } from "@/lib/whatsapp";

const Contact = () => (
  <Layout>
    <section className="py-20 bg-blush">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-3">Get in Touch</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          We'd love to hear from you! Drop us a message on WhatsApp for orders, custom requests, or just to say hi.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-card rounded-lg border border-border p-8 md:p-12 text-center space-y-8">
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-blush flex items-center justify-center">
              <MapPin size={24} className="text-primary" />
            </div>
            <h2 className="font-display text-xl font-semibold">Surat, Gujarat</h2>
            <p className="text-muted-foreground text-sm max-w-sm">
              We're based in Surat and serve customers across India. Delivery is free for nearby locations — other delivery details will be shared on WhatsApp.
            </p>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm mb-6">
              WhatsApp is our primary way of connecting. Tap below to start a conversation!
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-3.5 rounded-md hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
