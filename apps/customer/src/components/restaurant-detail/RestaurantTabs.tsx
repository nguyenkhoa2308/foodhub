"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Clock, Plus, Minus, CalendarDays, ChevronDown } from "lucide-react";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
}

interface Category {
  id: string;
  label: string;
  dishes: Dish[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const TABS = [
  { label: "Menu" },
  { label: "Đánh giá" },
  { label: "Thư viện" },
  { label: "Thông tin" },
] as const;

const CATEGORIES: Category[] = [
  {
    id: "starters",
    label: "Starters",
    dishes: [
      {
        id: "octopus",
        name: "Charred Octopus",
        description:
          "Tender Mediterranean octopus, smoky romesco sauce, fingerling potatoes, and lemon-infused herb oil.",
        price: 24,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBuxfM_RlTTNOydVF1hJSotCK4HyF0-yFNUTIsWTsxAqLHooqAl3fkw50v25OLaeFIivKyqOjRMEd1xawCUMgvKAg61mVREYpHh6ZXoO_xaFADeAx4FuTIwbq8PDi8GgpvGTjH0vW75HoevmO_X9WYoaERxvUYN1hAG6i2_fCDX2r8BefH-NbELjuVneELKDkgIfV5xFYwVcqqPSuSI2wxDyjNWywaRaKxb6OfRo97TLH2K2ufeB4MwAP5Ga9tHKnBU-5NHzA32aao",
        badge: "Popular",
      },
      {
        id: "arancini",
        name: "Wild Mushroom Arancini",
        description:
          "Crispy risotto spheres with porcini mushrooms, truffle essence, and a molten taleggio heart.",
        price: 18,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC_aPHKwd0F11myqqCn2_cFaJu-666NNzdfRTdNdXCk5dqfq51vN7CRVH9l1mDQbhq43_FNIHjpSwmu9Nph5e2H_cHPPDbMCjLTC28VK-WyHUr2CldLo0lXe5JA7suUBfa4sjomx6p5dave0jYyEXzpYKK6ygwUiupjfCbnceH8Y4uMV9_0omGHb-GWMcg2b6n-ns_zMDEUwk4RuBBLXC6JW-G76dJ6WLPvHgFqBKyYad6N5nBBnP5lj_M_bXhfN_COFIdn11SCjsg",
      },
    ],
  },
  {
    id: "mains",
    label: "Main Courses",
    dishes: [
      {
        id: "salmon",
        name: "Saffron Butter Salmon",
        description:
          "Wild-caught Atlantic salmon, saffron beurre blanc, sautéed baby spinach, and roasted parsnip puree.",
        price: 38,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ8c5uBX8Tysh76Ijalu4llvFpibpRKs8XpPZDRklZnMDptXtsKtcy-0aAfIr9R2EHzKPkmteJYsaPJfws3L_w7R62-0q7xmpq-Q6gDvP67CdxAfLtGMvEjVRbDtN3ywb4HkaD-qPKWDPRCy1ZLuThwur1UOmn4CbDtbLv8xms2zOVOyaqwZk0QJEUuVsjAJ3C4P3RvbHo92eMbGDf9WUjxljmV0uJB8h4ATEmgs3tbbd5INUJ-wS8byq10s-tS-MeUFO8P17VBzc",
      },
    ],
  },
];

const TIMES = ["18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

const BENTO_IMAGES = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVDGuYg4FvQaaNTTc7rDMgLXt5sBe0k-BiibO-VGpyUb0Wd9yw-sr6sCPeT6g5fNu7YFF3RYRDwRIG3lVebiv-F62fBacnBRuijqYkpq3W9LhqJGeUdJSTY0nayx8proyIJBKq5bidF5P_jsJMS0xS5mZJlPglg2RFrNHNgxH4svLyoC_qh-hsAj5j1ZshM5UrQ7NwahsModmZzh6H7S7uqXrM6ZwUxGKzdlao-n6uf-CHrl0XoNNNc7v-HJIj4ZsahzFWN37D6FY",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtRPiQdBiua4DMRsP28SJREZUkssmh-FOsVHSphDgC498-LTldFpvX_D_tkXdDlU4c5qo-zdGQcb3qmsOoe7AgxGjy5GsvlWASf7u4yQaS_sCnxzv7LeB8jKfyHThp1MU2M6VHpSWGW_fO1jsQ3Iyul3wbvmcKz44mZrNcGTXFL-ZR-2jK0lOBydxHhiXj0g0AW2hDnZHBOy6JE4KmLWjVxqesAPITqPUVLB5oNRAi-j4eRnx0GdM1YlNi-a5RmZUBLA4SiR49siU",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNvAxnw64mnU45onhmxzmbLSb54Tl8HoY12biR9Uq32mE7gU05kse9KD2-_IVb9Mr7nVQzcGalxL1IfSqovH9AEWiaL3rIX4ZTHQ6yd2nDaifW0qg_NGxZxKtRTtMI0d7ZdwkSgye4FtiCytw5nEfTMgMizHWTyB429R8gDo5LVTaLhTCuNv-DAQPocWSCZj1SytIJ2Py_aeBiiujwC6XE8LoMucjIgYQqAwCcoyTZrmdMWBjncuE-1ddBB847ULv5CxgF-ToL5Xw",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgY1sfPVmcwRspBPVhc6lQUf7XXXeoeZZBVI7DLMu_0clbyJTTfZjB4-t3w-a8I65CZgBoJF--y44r5EJuLo3uG_IUPPy2ANkNBPpN3NraLvvgjZlyMpVNMyYUL4dcpS-xFpG0hrrKmOteU7XvMgkhMVIl0ywSSGwkaryUZM3jNjVW7c9CSSCbgA1KLHW-Va3k-XhmZNlMPbVmxbwx2p71FHqP7g_KHlRb_WgPWml97c2oRzRhr_O7UHrYuKRYTYUYvtJKXryVYDw",
    className: "col-span-2 row-span-1",
    overlay: "+12 Photos",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function DishCard({ dish }: { dish: Dish }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-4 flex gap-6 hover:bg-surface-bright transition-colors group cursor-pointer">
      <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="flex-1 py-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-bold text-on-secondary-fixed">
                {dish.name}
              </h4>
              {dish.badge && (
                <span className="bg-orange-100 text-orange-700 text-[10px] font-black uppercase px-2 py-0.5 rounded">
                  {dish.badge}
                </span>
              )}
            </div>
            <span className="text-lg font-bold text-primary">
              ${dish.price.toFixed(2)}
            </span>
          </div>
          <p className="text-sm text-secondary leading-relaxed mt-2 line-clamp-2">
            {dish.description}
          </p>
        </div>
        <div className="mt-4">
          <button className="bg-surface-container hover:bg-primary hover:text-white text-on-secondary-fixed text-xs font-bold px-4 py-2 rounded-full transition-all flex items-center gap-2 w-fit">
            <Plus size={14} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function MenuTab() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveCategory(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    CATEGORIES.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-8 items-start">
      {/* Sidebar */}
      <aside className="col-span-2 sticky top-[150px] space-y-2">
        <p className="text-xs font-black uppercase tracking-widest text-secondary/60 mb-4 px-2">
          Menu Categories
        </p>
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`#${cat.id}`}
            onClick={() => setActiveCategory(cat.id)}
            className={`block w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
              activeCategory === cat.id
                ? "bg-primary-container/10 text-primary font-bold"
                : "text-secondary hover:bg-surface-container"
            }`}
          >
            {cat.label}
          </Link>
        ))}
      </aside>

      {/* Menu Content */}
      <div className="col-span-7 space-y-12">
        {/* Bento Gallery */}
        <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[300px]">
          {BENTO_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`${img.className} rounded-xl overflow-hidden relative group cursor-pointer`}
            >
              <img
                src={img.src}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {img.overlay && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-black text-xl">
                    {img.overlay}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Categories */}
        {CATEGORIES.map((cat) => (
          <div key={cat.id} id={cat.id}>
            <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
              {cat.label}
              <span className="h-1 flex-1 bg-surface-container rounded-full" />
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {cat.dishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Booking Aside */}
      <BookingAside />
    </div>
  );
}

function BookingAside() {
  const [guests, setGuests] = useState(2);
  const [selectedTime, setSelectedTime] = useState("19:00");
  const [preorderOpen, setPreorderOpen] = useState(false);

  return (
    <aside className="col-span-3 sticky top-[150px] space-y-6">
      <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border-none shadow-sm">
        <div className="p-6 bg-primary text-white">
          <h4 className="text-xl font-black">Book a Table</h4>
          <p className="text-xs text-white/80 mt-1">
            Experience The Saffron Kitchen
          </p>
        </div>
        <div className="p-6 space-y-5">
          {/* Guests */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-secondary/60">
              Guests
            </label>
            <div className="flex items-center justify-between bg-surface-container-low rounded-lg p-3">
              <button
                onClick={() => setGuests((g) => Math.max(1, g - 1))}
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shadow-sm"
              >
                <Minus size={14} />
              </button>
              <span className="font-bold text-on-secondary-fixed">
                {guests} {guests === 1 ? "Person" : "People"}
              </span>
              <button
                onClick={() => setGuests((g) => Math.min(20, g + 1))}
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shadow-sm"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Date */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-secondary/60">
              Date
            </label>
            <div className="flex items-center gap-3 bg-surface-container-low rounded-lg p-3 cursor-pointer">
              <CalendarDays size={16} className="text-primary" />
              <span className="font-bold text-sm text-on-secondary-fixed">
                Friday, Oct 25
              </span>
            </div>
          </div>

          {/* Time */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-secondary/60">
              Select Time
            </label>
            <div className="grid grid-cols-3 gap-2">
              {TIMES.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-2 text-xs font-bold rounded-lg transition-colors ${
                    selectedTime === time
                      ? "bg-primary text-white"
                      : "border border-surface-container hover:border-primary"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-surface-container">
            <button className="w-full py-4 bg-primary text-white font-black rounded-full hover:opacity-90 active:scale-95 transition-all">
              BOOK NOW
            </button>
            <p className="text-[10px] text-secondary text-center mt-3 px-4">
              Instant confirmation. No booking fee.
            </p>
          </div>
        </div>
      </div>

      {/* Pre-order */}
      <div className="bg-surface-container-low rounded-xl p-4">
        <button
          onClick={() => setPreorderOpen((o) => !o)}
          className="w-full flex justify-between items-center text-left"
        >
          <span className="text-sm font-bold text-on-secondary-fixed">
            Pre-order Dishes
          </span>
          <ChevronDown
            size={18}
            className={`text-secondary transition-transform duration-200 ${
              preorderOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {preorderOpen && (
          <p className="text-sm text-secondary mt-3">Pre-order coming soon.</p>
        )}
      </div>
    </aside>
  );
}

function ReviewsTab() {
  return (
    <div className="py-12 text-secondary text-center">Reviews coming soon.</div>
  );
}

function GalleryTab() {
  return (
    <div className="py-12 text-secondary text-center">Gallery coming soon.</div>
  );
}

function InfoTab() {
  return (
    <div className="py-12 text-secondary text-center">Info coming soon.</div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function RestaurantTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    ready: false,
  });

  const updateIndicator = useCallback((index: number) => {
    const el = tabsRef.current[index];
    if (!el) return;
    setIndicator({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
  }, []);

  useEffect(() => {
    updateIndicator(activeTab);
  }, [activeTab, updateIndicator]);

  useEffect(() => {
    const onResize = () => updateIndicator(activeTab);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeTab, updateIndicator]);

  const setTabRef = useCallback(
    (index: number) => (el: HTMLButtonElement | null) => {
      tabsRef.current[index] = el;
    },
    [],
  );

  const content = [<MenuTab />, <ReviewsTab />, <GalleryTab />, <InfoTab />];

  return (
    <>
      {/* Nav */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-surface-high shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="relative flex gap-10">
            {TABS.map((tab, index) => (
              <button
                key={tab.label}
                ref={setTabRef(index)}
                onClick={() => setActiveTab(index)}
                className={`py-5 text-sm font-bold uppercase tracking-widest transition-colors cursor-pointer ${
                  activeTab === index
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
            <span
              aria-hidden
              className={`absolute bottom-0 h-0.5 bg-primary transition-all duration-300 ease-in-out ${
                indicator.ready ? "opacity-100" : "opacity-0"
              }`}
              style={{ left: indicator.left, width: indicator.width }}
            />
          </div>

          <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-secondary">
            <Clock size={16} className="text-primary" />
            <span>Đóng cửa lúc 23:00</span>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">{content[activeTab]}</div>
    </>
  );
}
