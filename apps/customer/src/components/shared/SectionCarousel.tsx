import { ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselPrevious,
  CarouselNext,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

interface SectionCarouselProps<T> {
  title: string;
  subtitle?: string; // ← thêm
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  itemClassName?: string;
  onViewAll?: () => void;
  backgroundColor?: string;
}

export function SectionCarousel<T>({
  title,
  subtitle,
  items,
  renderItem,
  itemClassName,
  onViewAll,
  backgroundColor,
}: SectionCarouselProps<T>) {
  return (
    <section className={`relative py-12 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-6">
        <Carousel
          opts={{ align: "start", dragFree: true, duration: 20 }}
          className="w-full"
        >
          {/* Header nằm TRONG Carousel */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-3xl font-[800] tracking-tight">{title}</h2>
              {subtitle && (
                <p className="text-secondary opacity-70 mt-1">{subtitle}</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>

          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className={
                  itemClassName ??
                  "basis-1/2 sm:basis-1/3 lg:basis-1/4 select-none"
                }
              >
                {renderItem(item)}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* View all nằm NGOÀI Carousel là được */}
        {onViewAll && (
          <div className="flex justify-center mt-8">
            <button
              className="group text-primary font-bold flex items-center gap-1 cursor-pointer hover:text-on-primary-container transition-colors duration-300"
              onClick={onViewAll}
            >
              Xem tất cả{" "}
              <ChevronRight
                size={20}
                strokeWidth={2.5}
                className="group-hover:translate-x-1 transition-all duration-300"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
