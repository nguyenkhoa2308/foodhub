import Image from "next/image";
import { Search, Send } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative px-6 py-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[var(--on-secondary-fixed)] leading-[1.1] mb-6">
            Thèm món gì, <br />
            <span className="text-primary">giao ngay.</span>
          </h1>
          <div className="inline-flex bg-surface-low p-1 rounded-full mb-8">
            <button className="bg-primary-container text-white px-8 py-2.5 rounded-full font-semibold shadow-sm transition-all">
              Giao hàng
            </button>
            <button className="text-secondary px-8 py-2.5 rounded-full font-semibold transition-all hover:bg-surface-container">
              Ăn tại chỗ
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-3 bg-surface-lowest p-3 rounded-2xl shadow-xl shadow-on-secondary-fixed/5 border border-outline-variant/20 max-w-2xl">
            <div className="flex-1 flex items-center px-4 bg-surface-low rounded-xl">
              <button className="text-outline mr-3" aria-label="Tìm kiếm">
                <Search size={22} />
              </button>
              <input
                className="w-full py-4 bg-transparent border-none focus:ring-0 outline-none text-outline placeholder:text-outline/60 font-medium"
                placeholder="Món ăn, nhà hàng hoặc món..."
                type="text"
              />
            </div>
            <div className="flex items-center px-4 bg-surface-low rounded-xl md:w-48">
              <button className="text-outline mr-2" aria-label="Tìm kiếm">
                <Send size={22} />
              </button>
              <input
                className="w-full py-4 bg-transparent border-none focus:ring-0 outline-none text-outline placeholder:text-outline/60 font-medium"
                placeholder="Hà Nội, Việt Nam"
                type="text"
              />
            </div>
            <button className="bg-primary hover:bg-surface-tint text-on-primary px-8 py-4 rounded-xl font-bold transition-all active:scale-[0.98] cursor-pointer hover:bg-[var(--on-primary-container)]/95">
              Tìm đồ ăn
            </button>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-[var(--primary-fixed)] blur-3xl opacity-30"></div>
          <Image
            width={500}
            height={500}
            className="rounded-[2.5rem] shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-700 ease-out"
            alt="gourmet plated meal with roasted chicken and vegetables with professional soft focus studio lighting on a dark background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7jnzMTbZIpy7f5DwtppRQxrEYaRUtSHWbX-n0caP9K_M8oFsI0nrhokenVRhyGjHoxDyxGiSzo4sQSQk9xammeigvdW9BU-1_XmS98P-yrRoazCDCpsIb0z1XLC9fLJr1h2d-kNeSDlEAuggm9zrX5yIzkcAKnHtAazroF7oRWdceLldXZy6mpbAOkszrtHNmR9v2GDFYAZw5R5m_Rzpo4O_e9ixZjeBGqUAyAzD2BGm8aMSJgdoDF7VcBdC0Sz0wLMKKoF59Z6w"
            style={{
              maskImage: "linear-gradient(to bottom, black 80%, transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
