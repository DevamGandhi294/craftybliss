import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  image: string;
  href: string;
}

const CategoryCard = ({ title, image, href }: CategoryCardProps) => (
  <Link
    to={href}
    className="group relative overflow-hidden rounded-lg aspect-square block"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-5">
      <h3 className="font-display text-xl text-white font-semibold">{title}</h3>
    </div>
  </Link>
);

export default CategoryCard;
