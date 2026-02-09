  import catBouquets from "@/assets/category-bouquets.jpg";
  import catHampers from "@/assets/category-hampers.jpg";
  import catFrames from "@/assets/category-frames.jpg";
  import catResin from "@/assets/category-resin.jpg";

  // Import product images - Add your product images here

  // Import bouquet images
  import bouquet101 from "@/assets/bouquets/101.jpeg";
  import bouquet102 from "@/assets/bouquets/102.jpeg";
  import bouquet103 from "@/assets/bouquets/103.jpeg";
  import bouquet104 from "@/assets/bouquets/104.jpeg";
  import bouquet105 from "@/assets/bouquets/105.jpeg";
  import bouquet106 from "@/assets/bouquets/106.jpeg";
  import bouquet107 from "@/assets/bouquets/107.jpeg";

  import bouquet201 from "@/assets/bouquets/201.jpeg";
  import bouquet202 from "@/assets/bouquets/202.jpeg";
  import bouquet203 from "@/assets/bouquets/203.jpeg";
  import bouquet204 from "@/assets/bouquets/204.jpeg";
  import bouquet205 from "@/assets/bouquets/205.jpeg";
  import bouquet206 from "@/assets/bouquets/206.jpeg";

  import bouquet301 from "@/assets/bouquets/301.jpeg";


  // Organize images in folders: src/assets/products/{category}/{product-name}.jpg
  import frame101 from "@/assets/frames/101.jpeg";
  import frame102 from "@/assets/frames/102.jpeg";
  import frame103 from "@/assets/frames/103.jpeg";
  import frame104 from "@/assets/frames/104.jpeg";
  import frame105 from "@/assets/frames/105.jpeg";
  import frame201 from "@/assets/frames/201.jpeg";
  import frame202 from "@/assets/frames/202.jpeg";
  import frame203 from "@/assets/frames/203.jpeg";

  // Import hamper images
  import hamper101 from "@/assets/Hampers/101.jpeg";
  import hamper102 from "@/assets/Hampers/102.jpeg";
  import hamper103 from "@/assets/Hampers/103.jpeg";
  import hamper104 from "@/assets/Hampers/104.jpeg";
  import hamper105 from "@/assets/Hampers/105.jpeg";
  import hamper106 from "@/assets/Hampers/106.jpeg";
  import hamper201 from "@/assets/Hampers/201.jpeg";
  import hamper202 from "@/assets/Hampers/202.jpeg";
  import hamper301 from "@/assets/Hampers/301.jpeg";
  import hamper302 from "@/assets/Hampers/302.jpeg";
  import hamper303 from "@/assets/Hampers/303.jpeg";
  import hamper304 from "@/assets/Hampers/304.jpeg";


  // Import resin images
  import resin101 from "@/assets/resin/101.jpeg";
  import resin102 from "@/assets/resin/102.jpeg";

  export interface Product {
    name: string;
    image: string; // Required: Each product must have its own image
  }

  export interface SubCategory {
    name: string;
    products: Product[];
  }

  export interface Category {
    id: string;
    name: string;
    subcategories: SubCategory[];
    defaultImage: string; // Category image for display
  }

  // ============================================
  // HELPER FUNCTIONS
  // ============================================

  /**
   * Create a product with its own image
   * Usage: product("Product Name", productImage)
   */
  const product = (name: string, image: string): Product => ({ name, image });

  /**
   * Create multiple products with individual images
   * Usage: products([
   *   ["Product 1", image1],
   *   ["Product 2", image2],
   * ])
   */
  const products = (items: Array<[string, string]>): Product[] => {
    return items.map(([name, image]) => product(name, image));
  };

  // ============================================
  // BOUQUETS
  // ============================================
  // TODO: Add individual product images for bouquets
  // Create folder: src/assets/products/bouquets/
  // Then import and use: import roseBouquet from "@/assets/products/bouquets/rose-bouquet.jpg";
  const bouquetsData: Category = {
    id: "bouquets",
    name: "Bouquets",
    defaultImage: catBouquets,
    subcategories: [
      {
        name: "Flower Bouquet",
        products: products([
          ["Daisy Bouquet", bouquet101],
          ["One Daisy Bouquet", bouquet102],
          ["Rose Bouquet", bouquet103],
          ["Round Rose Bouquet", bouquet104],
          ["White Roses Bouquet", bouquet105],
          ["Pipe Cleaner Sunflower Bouquet", bouquet106],
          ["Pipe Cleaner mix Bouquet", bouquet107],
      //   ]),
      // },
      // {
      //   name: "Chocolate Bouquet",
      //   products: products([
          ["Classic Choco Bouquet", bouquet201],
          ["Premium Chocolate Bouquet", bouquet202],
          ["Custmize Gift Bouquet", bouquet203],
          ["Custom Bouquet", bouquet204],
          ["Hot Wheels Bouquet", bouquet205],
          ["Kinderjoy Bouquet", bouquet206],
      //   ]),
      // },
      // {
      //   name: "Customised Bouquet",
      //   products: products([
          ["Photo Bouquet", bouquet301],
      //   ]),
      // },
      // {
      //   name: "Pipe Cleaner Bouquet",
      //   products: products([
          // ["Pipe Cleaner Rose Bouquet", catBouquets],
          // ["Mini Pipe Cleaner Bouquet", catBouquets],
        ]),
      },
    ],
  };

  // ============================================
  // HAMPERS
  // ============================================
  // TODO: Add individual product images for hampers
  // Create folder: src/assets/products/hampers/
  const hampersData: Category = {
    id: "hampers",
    name: "Hampers",
    defaultImage: catHampers,
    subcategories: [
      {
        name: "For Her",
        products: products([
          ["Mini Hamper", hamper101],
          ["Mini Hamper -2", hamper102],
          ["Premium tray Hamper", hamper103],
          ["Bag Hamper", hamper104],
          ["Customised Hamper for Her", hamper105],
          ["Custom Hamper", hamper106],
        ]),
      },
      {
        name: "For Him",
        products: products([
          ["Gentleman's Hamper", hamper201],
          ["Classic Hamper", hamper202],
        ]),
      },
      {
        name: "Special Occasion",
        products: products([
          ["Mother;s Day", hamper301],
          ["Father's Day", hamper302],
          ["Father's Day-2", hamper303],
          ["Rakshabandhan", hamper304],
        ]),
      },
    ],
  };

  // ============================================
  // FRAMES
  // ============================================
  // Using existing frame images from src/assets/frames/
  const framesData: Category = {
    id: "frames",
    name: "Frames",
    defaultImage: catFrames,
    subcategories: [
      {
        name: "Photo Frame",
        products: products([
          ["Mini Frame", frame101],
          ["Large Frame", frame102],
          ["Medium Frame", frame103],
          ["Classic Frame", frame104],
          ["Gray Bordered Frame", frame105],
        ]),
      },
      {
        name: "Hotwheels Frame",
        products: products([
          ["Porsche Frame", frame201],
          ["Toyota Frame", frame202],
          ["Logo Car Frame", frame203],
        ]),
      },
    ],
  };

  // ============================================
  // RESIN WORK
  // ============================================
  // TODO: Add individual product images for resin work
  // Create folder: src/assets/resin/
  const resinData: Category = {
    id: "resin",
    name: "Resin Work",
    defaultImage: catResin,
    subcategories: [
      {
        name: "Resin Frames",
        products: products([
          ["Floral Resin Frame", resin101],
          ["Resin Photo Frame", resin102],
        ]),
      },
      {
        name: "Keychains",
        products: products([
          ["Flower Resin Keychain", catResin],
          ["Name Resin Keychain", catResin],
          ["Photo Resin Keychain", catResin],
        ]),
      },
      {
        name: "Resin Art",
        products: products([
          ["Resin Coasters", catResin],
          ["Resin Wall Art", catResin],
        ]),
      },
    ],
  };

  // ============================================
  // EXPORT CATEGORIES
  // ============================================
  export const categories: Category[] = [
    bouquetsData,
    hampersData,
    framesData,
    resinData,
  ];

  // ============================================
  // UTILITY FUNCTIONS
  // ============================================

  /**
   * Get all products from a category
   */
  export const getProductsByCategory = (categoryId: string): Product[] => {
    const category = categories.find(cat => cat.id === categoryId);
    if (!category) return [];
    
    return category.subcategories.flatMap(subcat => subcat.products);
  };

  /**
   * Get a product by name
   */
  export const getProductByName = (name: string): Product | undefined => {
    for (const category of categories) {
      for (const subcategory of category.subcategories) {
        const product = subcategory.products.find(p => p.name === name);
        if (product) return product;
      }
    }
    return undefined;
  };

  /**
   * Get category by ID
   */
  export const getCategoryById = (id: string): Category | undefined => {
    return categories.find(cat => cat.id === id);
  };
