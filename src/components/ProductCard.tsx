import { getProductEnquiryLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  image: string;
}

const ProductCard = ({ name, image }: ProductCardProps) => (
  <div className="group bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="aspect-square overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="p-4 flex flex-col gap-3">
      <h4 className="font-display text-base font-medium text-foreground">{name}</h4>
      <a
        href={getProductEnquiryLink(name)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-medium rounded-md px-4 py-2.5 hover:opacity-90 transition-opacity"
      >
        <MessageCircle size={16} />
        Enquire 
      </a>
    </div>
  </div>
);

export default ProductCard;
