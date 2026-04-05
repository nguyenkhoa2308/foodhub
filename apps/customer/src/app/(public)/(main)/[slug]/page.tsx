import HeroSection from "~/components/restaurant-detail/HeroSection";
import RestaurantTabs from "~/components/restaurant-detail/RestaurantTabs";

export default function RestaurantDetailsPage() {
  return (
    <div className="pt-18 min-h-screen">
      <HeroSection />
      <RestaurantTabs />
    </div>
  );
}
