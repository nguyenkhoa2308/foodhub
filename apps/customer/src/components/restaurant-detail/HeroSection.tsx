import { MapPin, Star, Utensils } from "lucide-react";
import Image from "next/image";
import { FaMoneyBills } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="relative h-[450px] w-full overflow-hidden">
      <Image
        src="/images/restaurants-detail/hero-section.jpg"
        alt="Hero"
        fill
        sizes="100vw"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--on-secondary-fixed)]/90 via-[var(--on-secondary-fixed)]/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 w-full py-8 md:py-12 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="text-white space-y-4">
          <div className="flex items-center gap-3">
            <span className="bg-green-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Mở cửa
            </span>
            <div className="flex items-center gap-1 bg-surface-container-lowest/20 backdrop-blur-md px-3 py-1 rounded-full">
              <Star
                className="text-yellow-400 text-sm fill-yellow-400"
                size={16}
              />
              <span className="text-sm font-bold">4.9 (2.1k đánh giá)</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-tight">
            The Saffron Kitchen
          </h1>
          <p className="text-white/80 font-medium max-w-xl">
            Ẩm thực Địa Trung Hải thủ công. Trải nghiệm ăn uống cao cấp với các
            nguyên liệu hữu cơ địa phương và tuyển chọn rượu vang đặc biệt.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/90">
            <span className="flex items-center gap-1">
              <Utensils className="text-white text-sm" size={16} />
              Địa Trung Hải, Ý
            </span>
            <span className="flex items-center gap-1">
              <FaMoneyBills className="text-white text-sm" size={16} />
              10.000đ - 20.000đ
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="text-white text-sm" size={16} />
              128 Epicurean Ave, West District
            </span>
          </div>
        </div>
        <div className="bg-surface-container-lowest/10 backdrop-blur-xl p-1.5 rounded-full flex gap-1 border border-white/20">
          <button className="bg-primary-container text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all">
            Dine-in
          </button>
          <button className="text-white hover:bg-white/10 px-6 py-2.5 rounded-full text-sm font-bold transition-all">
            Delivery
          </button>
        </div>
      </div>
    </section>
  );
}
