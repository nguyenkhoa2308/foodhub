"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  MapPin,
  ShoppingCart,
  User,
  Package,
  Settings,
  LogOut,
  Search,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Explore" },
  { href: "/offers", label: "Offers" },
  { href: "/partner", label: "Become a Partner" },
] as const;

const dropdownLinks = [
  { href: "/profile", label: "Profile", icon: User },
  { href: "/orders", label: "My Orders", icon: Package },
  { href: "/settings", label: "Settings", icon: Settings },
] as const;

// const UNDERLINE_TRANSITION = {
//   type: "spring",
//   bounce: 0.2,
//   duration: 0.6,
// } as const;
const DROPDOWN_TRANSITION = {
  type: "spring",
  bounce: 0.2,
  duration: 0.3,
} as const;
const DROPDOWN_VARIANTS = {
  hidden: { opacity: 0, y: -8, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -8, scale: 0.95 },
};

// TODO: thay bằng useAuthStore sau khi có API
const FAKE_USER = {
  name: "Nguyen Van A",
  email: "nguyenvana@gmail.com",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuACBQNOCjaEO07YJeJZRO9dh9dgeckPdbG3xXNrxV1fWo5jwu6B__JcmpDFFC7hIF5Sh-injNmic2KjFRluKdCNWY_H9j9G73FboS81WxiLbs_xLgNbxVK7D-5gxODEO8dmTxKvXUgmdCQ3NRsk-MaYDP81WzNJjfk63ehy_Qk5Z04Dc2SFs02-XdbNqHmzuflSsewZ1PgXZJ3ZIbwfQb86u1ATRdJwY2IU8DyFFkUMVuX7OvrXA8o7R4ougiRf06vbvoz8UqklSXQ",
};

export default function MainHeader() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // TODO: thay bằng useAuthStore sau khi có API
  const isLoggedIn = true;
  const user = isLoggedIn ? FAKE_USER : null;

  const isActive = (href: string) => {
    if (href === "/") {
      return (
        pathname === "/" ||
        (!pathname.startsWith("/offers") && !pathname.startsWith("/partner"))
      );
    }
    return pathname.startsWith(href);
  };

  const handleLogout = () => {
    setDropdownOpen(false);
    // TODO: clearAuth() + localStorage.removeItem("token") + router.push("/login")
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-on-primary border-none shadow-sm">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter text-primary"
          >
            FoodHub
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative font-bold transition-colors duration-200 ${
                      active
                        ? "text-primary"
                        : "text-secondary/60 hover:text-primary"
                    }`}
                  >
                    {link.label}
                    {/* {active && (
                      <motion.span
                        layout="position"
                        layoutId="header-underline"
                        className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-primary"
                        transition={UNDERLINE_TRANSITION}
                      />
                    )} */}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4 select-none">
          <div className="relative hidden lg:block ">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary/60"
              size={20}
            />
            <input
              className="pl-10 pr-4 py-2 bg-surface-container border-none rounded-full w-64 focus:ring-2 focus:ring-primary/20 text-sm outline-none text-secondary/80 focus:text-secondary transition-colors duration-200"
              placeholder="Tìm kiếm nhà hàng, món ăn..."
              type="text"
            />
          </div>
          <button
            aria-label="Chọn địa điểm"
            className="active:scale-95 transition-transform text-secondary/60 hover:text-primary cursor-pointer"
          >
            <MapPin size={22} />
          </button>
          <button
            aria-label="Giỏ hàng"
            className="active:scale-95 transition-transform text-secondary/60 hover:text-primary cursor-pointer"
          >
            <ShoppingCart size={22} />
          </button>

          {isLoggedIn ? (
            <div ref={dropdownRef} className="relative flex items-center">
              <button
                aria-label="Tài khoản"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="relative w-10 h-10 rounded-full bg-surface-container overflow-hidden ring-2 ring-transparent hover:ring-primary/40 transition-all duration-200 cursor-pointer"
              >
                <Image
                  src={user!.avatar}
                  alt="User profile avatar"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    variants={DROPDOWN_VARIANTS}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={DROPDOWN_TRANSITION}
                    className="absolute right-0 top-full mt-2 z-50 w-52 rounded-2xl bg-background border border-primary/10 shadow-lg overflow-hidden origin-top-right"
                  >
                    <div className="px-4 py-3 border-b border-primary/10">
                      <p className="text-sm font-semibold text-primary truncate">
                        {user!.name}
                      </p>
                      <p className="text-xs text-secondary/60 truncate">
                        {user!.email}
                      </p>
                    </div>

                    <div className="py-1">
                      {dropdownLinks.map(({ href, label, icon: Icon }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-secondary/80 hover:text-primary hover:bg-primary/5 transition-colors duration-150"
                        >
                          <Icon size={16} />
                          {label}
                        </Link>
                      ))}
                    </div>

                    <div className="border-t border-primary/10 py-1">
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-500/5 transition-colors duration-150 cursor-pointer"
                      >
                        <LogOut size={16} />
                        Logout
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="text-sm font-bold px-4 py-2 rounded-full bg-primary text-on-primary hover:opacity-90 active:scale-95 transition-all duration-200"
              >
                Đăng nhập
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
