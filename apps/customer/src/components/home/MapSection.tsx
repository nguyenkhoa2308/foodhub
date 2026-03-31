import Image from "next/image";
import { UtensilsCrossed, Coffee, Map } from "lucide-react";

export default function MapSection() {
  return (
    <section className="py-20 bg-surface-container">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 bg-surface-container-lowest rounded-[3rem] overflow-hidden shadow-2xl shadow-on-secondary-fixed/5">
          <div className="flex-1 p-12 lg:p-20">
            <h2 className="text-4xl font-black mb-6 leading-tight">
              Đói bụng? Tìm ngay <br />
              <span className="text-primary">Gần Bạn.</span>
            </h2>
            <p className="text-lg text-secondary mb-10 opacity-80 leading-relaxed">
              Khám phá 200+ nhà hàng được đánh giá cao trong tầm tay. Dùng bản
              đồ trực tiếp để xem những gì đang hot ngay bây giờ.
            </p>
            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <UtensilsCrossed size={22} />
                </div>
                <div>
                  <h4 className="font-bold">5 phút đi bộ</h4>
                  <p className="text-sm text-secondary">
                    The Coffee House, Highlands...
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Coffee size={22} />
                </div>
                <div>
                  <h4 className="font-bold">12 Ưu đãi đang diễn ra</h4>
                  <p className="text-sm text-secondary">
                    Giảm giá độc quyền tại các quán gần bạn
                  </p>
                </div>
              </div>
            </div>
            <button className="w-full bg-primary hover:bg-surface-tint text-on-primary py-5 rounded-2xl font-black text-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
              <Map size={22} />
              Khám phá bản đồ
            </button>
          </div>
          <div className="lg:w-1/2 min-h-[400px] relative">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbqOd9Q83O_EjNwoYHg1D2ay53cxbHMiZ3Z8GMuVFrqmnRglONArtwqF1N1Rgx-Vr8xhIthpLopmwIg4L9l56BMgCwOzpi9MDLxUgiaEOqeNVHLf7VxvWh93czaQXrHI-0GVvoGtqrYDV2cFSHOkeLD804avAFEmb9QaSO2MiwvSTlh-ynExlmTtxcuNeSCYLwakzbrcisdahCg3GWuOytbJDWls1yK5DeNjehr4_XMZ3mPEtW-mOc3oI8nUl_NwnCoxVJCQE2xdM"
                alt="Bản đồ thành phố với các ghim vị trí nhà hàng"
                fill
                className="object-cover"
              />

              <div className="absolute top-1/3 left-1/4 animate-bounce">
                <div className="bg-primary text-white p-3 rounded-full shadow-xl">
                  <UtensilsCrossed size={22} />
                </div>
              </div>

              <div className="absolute bottom-1/4 right-1/3 animate-pulse">
                <div className="bg-secondary-fixed text-on-secondary-fixed p-3 rounded-full shadow-xl">
                  <Coffee size={22} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
