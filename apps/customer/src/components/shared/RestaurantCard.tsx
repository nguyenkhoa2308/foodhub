// apps/customer/components/shared/restaurant-card.tsx

import Image from "next/image";
import { Clock, Star } from "lucide-react";
import Link from "next/link";

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  priceRange: string; // "₫₫₫"
  rating: number;
  deliveryTime: string;
  deliveryFee: string; // "Free Delivery" | "₫15.000 fee"
  badge?: string;
  slug: string;
}

export function RestaurantCard({
  name,
  image,
  cuisine,
  priceRange,
  rating,
  deliveryTime,
  deliveryFee,
  badge,
  slug,
}: RestaurantCardProps) {
  return (
    <Link href={`/${slug}`} className="group cursor-pointer">
      {/* Image */}
      <div className="relative rounded-[2rem] overflow-hidden mb-5 bg-surface-container-low aspect-[4/5]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          loading="eager"
        />

        {/* Rating */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-1 shadow-sm">
          <Star size={14} className="fill-yellow-500 text-yellow-500" />
          <span className="text-sm font-bold">{rating}</span>
        </div>

        {/* Badge */}
        {badge && (
          <div className="absolute bottom-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {badge}
          </div>
        )}
      </div>

      {/* Info */}
      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
        {name}
      </h3>
      <div className="flex items-center gap-2 text-sm text-secondary opacity-70 mb-3">
        <span>{cuisine}</span>
        <span>•</span>
        <span>{priceRange}</span>
      </div>

      {/* Delivery */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1.5 font-semibold">
          <Clock size={16} className="text-primary" />
          <span>{deliveryTime}</span>
        </div>
        <span className="text-secondary font-medium">{deliveryFee}</span>
      </div>
    </Link>
  );
}
