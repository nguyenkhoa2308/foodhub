import Image from "next/image";
import Link from "next/link";
import { Send } from "lucide-react";

const socials = [
  {
    icon: "/icons/facebook.svg",
    href: "https://www.facebook.com/",
    label: "Facebook",
  },
  {
    icon: "/icons/instagram.svg",
    href: "https://www.instagram.com/",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black w-full py-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col space-y-4">
          <div className="text-white font-black text-3xl">FoodHub</div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Người bạn đồng hành lý tưởng trên hành trình khám phá ẩm thực. Cùng
            bạn tìm kiếm, thưởng thức và tận hưởng những hương vị tuyệt vời nhất
            trong thành phố.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  s.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="opacity-60 hover:opacity-100 transition-opacity"
                aria-label={s.label}
              >
                <Image
                  src={s.icon}
                  alt={s.label}
                  width={35}
                  height={35}
                  className="w-[35px] h-[35px]"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs">
            Liên kết nhanh
          </h4>
          <nav className="flex flex-col space-y-3">
            <Link
              className="text-slate-400 hover:text-orange-400 transition-colors"
              href="#"
            >
              Khám phá nhà hàng
            </Link>
            <Link
              className="text-slate-400 hover:text-orange-400 transition-colors"
              href="#"
            >
              Ưu đãi đặc biệt
            </Link>
            <Link
              className="text-slate-400 hover:text-orange-400 transition-colors"
              href="#"
            >
              Ưu đãi thành viên
            </Link>
            <Link
              className="text-slate-400 hover:text-orange-400 transition-colors"
              href="#"
            >
              Dịch vụ doanh nghiệp
            </Link>
          </nav>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs">
            Hợp tác với chúng tôi
          </h4>
          <nav className="flex flex-col space-y-3">
            <Link
              className="text-slate-400 hover:text-orange-400 transition-colors"
              href="#"
            >
              Đối tác nhà hàng
            </Link>
            <Link
              className="text-slate-400 hover:text-orange-400 transition-colors"
              href="#"
            >
              Đội ngũ giao hàng
            </Link>
            <Link
              className="text-slate-400 hover:text-orange-400 transition-colors"
              href="#"
            >
              Hỗ trợ thương gia
            </Link>
            <Link
              className="text-slate-400 hover:text-orange-400 transition-colors"
              href="#"
            >
              Tài liệu API
            </Link>
          </nav>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs">
            Luôn sẵn sàng cho mọi cơn thèm
          </h4>
          <p className="text-slate-400 text-xs">
            Tham gia bản tin ẩm thực hàng tháng của chúng tôi.
          </p>
          <div className="flex gap-2">
            <input
              className="bg-white/5 border-none rounded-xl px-4 py-2.5 text-white w-full focus:ring-1 focus:ring-orange-500"
              placeholder="Địa chỉ email"
              type="email"
            />
            <button className="bg-primary hover:bg-primary-container cursor-pointer active:scale-90 transition-all duration-300 text-white px-4 rounded-xl">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm font-normal text-slate-400">
          © 2026 FoodHub Technologies. All rights reserved.
        </p>
        <div className="flex gap-8">
          <Link
            className="text-slate-500 text-sm hover:text-white transition-colors"
            href="#"
          >
            Chính sách bảo mật
          </Link>
          <Link
            className="text-slate-500 text-sm hover:text-white transition-colors"
            href="#"
          >
            Điều khoản dịch vụ
          </Link>
          <Link
            className="text-slate-500 text-sm hover:text-white transition-colors"
            href="#"
          >
            Chính sách cookie
          </Link>
          <Link
            className="text-slate-500 text-sm hover:text-white transition-colors"
            href="#"
          >
            Hỗ trợ
          </Link>
        </div>
      </div>
    </footer>
  );
}
