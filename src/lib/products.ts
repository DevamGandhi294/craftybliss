import catBouquets from "@/assets/category-bouquets.jpg";
import catHampers from "@/assets/category-hampers.jpg";
import catFrames from "@/assets/category-frames.jpg";
import catResin from "@/assets/category-resin.jpg";

export interface Product {
  name: string;
  image: string;
}

export interface SubCategory {
  name: string;
  products: Product[];
}

export interface Category {
  id: string;
  name: string;
  subcategories: SubCategory[];
}

// Using category images as placeholders for individual products
// Replace with real product images later
const p = (name: string, img: string): Product => ({ name, image: img });

export const categories: Category[] = [
  {
    id: "bouquets",
    name: "Bouquets",
    subcategories: [
      { name: "Flower Bouquet", products: [p("Rose Bouquet", catBouquets), p("Mixed Flower Bouquet", catBouquets), p("Sunflower Bouquet", catBouquets)] },
      { name: "Chocolate Bouquet", products: [p("Classic Choco Bouquet", catBouquets), p("Premium Chocolate Bouquet", catBouquets)] },
      { name: "Customised Bouquet", products: [p("Custom Photo Bouquet", catBouquets), p("Money Bouquet", catBouquets)] },
      { name: "Pipe Cleaner Bouquet", products: [p("Pipe Cleaner Rose Bouquet", catBouquets), p("Mini Pipe Cleaner Bouquet", catBouquets)] },
    ],
  },
  {
    id: "hampers",
    name: "Hampers",
    subcategories: [
      { name: "For Her", products: [p("Self-Care Hamper", catHampers), p("Luxury Spa Hamper", catHampers), p("Birthday Hamper for Her", catHampers)] },
      { name: "For Him", products: [p("Gentleman's Hamper", catHampers), p("Grooming Hamper", catHampers)] },
      { name: "Special Occasion", products: [p("Anniversary Hamper", catHampers), p("Festival Gift Hamper", catHampers), p("Thank You Hamper", catHampers)] },
    ],
  },
  {
    id: "frames",
    name: "Frames",
    subcategories: [
      { name: "Photo Frame", products: [p("Classic Photo Frame", catFrames), p("Collage Frame", catFrames), p("Memory Frame", catFrames)] },
      { name: "Hotwheels Frame", products: [p("Hotwheels Display Frame", catFrames), p("Custom Car Frame", catFrames)] },
    ],
  },
  {
    id: "resin",
    name: "Resin Work",
    subcategories: [
      { name: "Resin Frames", products: [p("Floral Resin Frame", catResin), p("Couple Resin Frame", catResin)] },
      { name: "Keychains", products: [p("Flower Resin Keychain", catResin), p("Name Resin Keychain", catResin), p("Photo Resin Keychain", catResin)] },
      { name: "Resin Art", products: [p("Resin Coasters", catResin), p("Resin Wall Art", catResin)] },
    ],
  },
];
