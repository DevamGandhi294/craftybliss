import { Link } from "react-router-dom";
import { Heart, Palette, Gift, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import CategoryCard from "@/components/CategoryCard";
import { getWhatsAppLink } from "@/lib/whatsapp";
import heroBanner from "@/assets/hero-banner.jpg";
import catBouquets from "@/assets/category-bouquets.jpg";
import catHampers from "@/assets/category-hampers.jpg";
import catFrames from "@/assets/category-frames.jpg";
import catResin from "@/assets/category-resin.jpg";

const whyChooseUs = [
  { icon: Heart, title: "Handmade & Customized", desc: "Every gift is crafted by hand, tailored to your heart's desire." },
  { icon: Gift, title: "Perfect for Every Occasion", desc: "Birthdays, anniversaries, surprises — we've got you covered." },
  { icon: Palette, title: "Creative & Unique", desc: "No two gifts are the same. Each piece is made with care and creativity." },
  { icon: Sparkles, title: "Made with Love", desc: "From Surat with love — attention to detail in every creation." },
];

const categories = [
  { title: "Bouquets", image: catBouquets, href: "/products#bouquets" },
  { title: "Hampers", image: catHampers, href: "/products#hampers" },
  { title: "Frames", image: catFrames, href: "/products#frames" },
  { title: "Resin Work", image: catResin, href: "/products#resin" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center">
      <img src={heroBanner} alt="Craftybliss handmade gifts" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-lg animate-fade-up">
          <p className="text-gold font-body text-sm tracking-widest uppercase mb-3">Handcrafted in Surat</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
          Because every gift deserves a personal <span className="italic">touch</span>
          </h1>
          <p className="text-white/80 text-lg mb-8 font-body leading-relaxed">
            Handmade bouquets, hampers, frames & resin art — crafted to make every moment unforgettable.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="bg-primary text-primary-foreground font-medium px-7 py-3 rounded-md hover:opacity-90 transition-opacity text-sm"
            >
              Explore Products
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 text-white font-medium px-7 py-3 rounded-md hover:bg-white/10 transition-colors text-sm"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">Why Choose Craftybliss?</h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          We pour love into every creation so your gifts feel truly special.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, i) => (
            <div
              key={item.title}
              className="bg-card rounded-lg p-6 text-center border border-border hover:shadow-md transition-shadow opacity-0 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center mx-auto mb-4">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Categories */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">Our Collections</h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Browse our handcrafted categories — each made to delight.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>

    {/* Trust / CTA */}
    <section className="py-20 bg-blush">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">Loved by Happy Customers</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          Custom-made with attention to detail — every gift tells a story. Let us create something special for you.
        </p>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-3.5 rounded-md hover:opacity-90 transition-opacity"
        >
          Chat with us on WhatsApp
        </a>
      </div>
    </section>
  </Layout>
);

export default Index;
