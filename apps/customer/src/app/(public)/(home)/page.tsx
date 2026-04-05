import HeroSection from "~/components/home/HeroSection";
import Categories from "~/components/home/Categories";
import Promotions from "~/components/home/Promotions";
import RestaurantList from "~/components/home/RestaurantList";
import MapSection from "~/components/home/MapSection";
import RecentlyView from "~/components/home/RecentlyView";

export default function Home() {
  return (
    <main className="min-h-screen pt-24">
      <HeroSection />
      <Categories />
      <Promotions />
      <RestaurantList />
      <MapSection />
      <RecentlyView />
    </main>
  );
}
