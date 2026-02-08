import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { categories } from "@/lib/products";

const Products = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-blush py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-3">Our Products</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Browse our handmade collections — tap "Enquire on WhatsApp" for any product you love!
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <div className="sticky top-16 z-40 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 flex gap-4 py-3 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="whitespace-nowrap text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-full border border-border hover:border-primary/40"
            >
              {cat.name}
            </a>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-12 space-y-20">
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id}>
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">{cat.name}</h2>
            {cat.subcategories.map((sub) => (
              <div key={sub.name} className="mb-10">
                <h3 className="font-display text-lg font-medium text-primary mb-5">{sub.name}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {sub.products.map((product) => (
                    <ProductCard 
                      key={product.name} 
                      name={product.name}
                      image={product.image}
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>
    </Layout>
  );
};

export default Products;
