"use client";

import { useRouter } from "next/navigation";
import { SectionCarousel } from "~/components/shared/SectionCarousel";

const categories = [
  { name: "Việt Nam", image: "/images/categories/vietnam.png" },
  { name: "Nhật Bản", image: "/images/categories/japan.png" },
  { name: "Hàn Quốc", image: "/images/categories/korea.png" },
  { name: "Ý", image: "/images/categories/italy.png" },
  { name: "Trung Quốc", image: "/images/categories/china.png" },
  { name: "Thái Lan", image: "/images/categories/thailand.png" },
  { name: "Pháp", image: "/images/categories/france.png" },
  { name: "Mỹ", image: "/images/categories/usa.png" },
  { name: "BBQ", image: "/images/categories/bbq.png" },
  { name: "Lẩu", image: "/images/categories/hotpot.png" },
  { name: "Bánh ngọt", image: "/images/categories/cake.png" },
  { name: "Đồ uống", image: "/images/categories/drink.png" },
  { name: "Hải sản", image: "/images/categories/seafood.png" },
  { name: "Đồ ăn nhanh", image: "/images/categories/fastfood.png" },
  { name: "Cơm", image: "/images/categories/rice.png" },
  { name: "Bún - Phở - Mỳ", image: "/images/categories/noodle.png" },
];

export default function Categories() {
  const router = useRouter();
  return (
    <SectionCarousel
      title="Khám phá ẩm thực"
      items={categories}
      itemClassName="basis-1/2 sm:basis-1/3 lg:basis-1/6 select-none"
      onViewAll={() => router.push("/categories")}
      renderItem={(item) => (
        <div className="flex flex-col items-center gap-3 cursor-pointer group">
          <img
            src={item.image}
            alt={item.name}
            className="w-40 h-40 rounded-2xl shadow-sm"
          />
          <span className="text-sm font-bold tracking-wide uppercase">
            {item.name}
          </span>
        </div>
      )}
      backgroundColor="bg-surface-low"
    />
  );
}
