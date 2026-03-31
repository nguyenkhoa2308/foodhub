import { Motorbike, Ticket } from "lucide-react";

export default function Promotions() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="flex flex-col sm:flex-row gap-6 no-scrollbar py-4 snap-x">
          <div className="flex-shrink-0 w-[600px] h-64 bg-gradient-to-r from-primary to-primary-container rounded-3xl p-10 flex flex-col justify-center text-white snap-center relative overflow-hidden group">
            <div className="relative z-10">
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                Flash Sale
              </span>
              <h3 className="text-4xl font-black mb-2">50% OFF</h3>
              <p className="text-lg opacity-90 max-w-xs">
                On all Japanese restaurants this weekend.
              </p>
              <button className="mt-6 bg-[var(--on-secondary-fixed)] text-white px-6 py-3 rounded-xl font-bold text-sm cursor-pointer hover:bg-[var(--on-secondary-fixed-variant)] transition-colors duration-300">
                Grab Voucher
              </button>
            </div>
            <Ticket
              className="absolute -right-1 -bottom-6 opacity-10 group-hover:scale-110 transition-transform duration-300"
              size={200}
              strokeWidth={2}
            />
          </div>

          <div className="flex-shrink-0 w-[600px] h-64 bg-[var(--secondary-fixed)] text-[var(--on-secondary-fixed)] rounded-3xl p-10 flex flex-col justify-center snap-center relative overflow-hidden group">
            <div className="relative z-10">
              <span className="bg-on-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                Free Delivery
              </span>
              <h3 className="text-4xl font-black mb-2">ZERO FEE</h3>
              <p className="text-lg opacity-80 max-w-xs">
                For orders above 200.000₫. Valid for 10 days.
              </p>
              <button className="mt-6 bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm cursor-pointer hover:bg-[var(--on-primary-fixed-variant)] transition-colors duration-300">
                Activate Now
              </button>
            </div>
            <Motorbike
              className="absolute -right-2 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-300"
              size={200}
              strokeWidth={2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
