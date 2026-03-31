"use client";

import { useRouter } from "next/navigation";
import { SectionCarousel } from "~/components/shared/SectionCarousel";
import { RestaurantCard } from "~/components/shared/RestaurantCard";

const restaurants = [
  {
    id: "1",
    name: "The Burger Club",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3Y3PSb1meooNDHvPe9nnvug9g27qlmNYaIgI4Kafh5Yb_UnJZOh9M0KxVvz_BFWNNkAidvN50Xn4JC26cTlOkAxIzCKwIAi_WkqYqXMY7dc9F0x3sOsxvladyMpaHJbsKR8D3aaRgU47xDN7f4Zma0l2-hMcWkbnLOCYY2qteMzuafGjK08T_CPStAIVfXOuCwpyVNAxfSHZEkhoYVXmWDOPVijlC7Mog7NXV-wWUO5QN5kdoPSZp5RoBwQSCdBggdN0IuhBpPEc",
    cuisine: "Mỹ",
    priceRange: "50.000₫ - 150.000₫",
    rating: 4.8,
    deliveryTime: "15-20 phút",
    deliveryFee: "Miễn phí giao hàng",
    badge: "Bán chạy",
  },
  {
    id: "2",
    name: "Sushi Kazu",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKGpjk0Feoj7qUJnotvNMraKO1hX3l-BDIGUJET7MuLwiAmmkxJxR-NMqMzUZduFjfUnCebt32_n0EmNFxPzkOZe3gMeWx2lvjsVM9VHwBoSvfOb8ml2Cc2SiBEK3y6IqUX_S7GwmXLPUroniZTv3Bulxe54WNlNb0mWlbrS5_u2MmlG7cFP0y_nYvH2VwlaNZzmcYicSPLO0WipcgoubEp8tViXlulgmkISXc3ZuYvE2R7DMD7SFMJuHB-iCC8j1DxTFq0cC6O-w",
    cuisine: "Nhật Bản",
    priceRange: "100.000₫ - 300.000₫",
    rating: 4.9,
    deliveryTime: "25-30 phút",
    deliveryFee: "15.000₫ phí giao",
  },
  {
    id: "3",
    name: "Fire Wings",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAD1_6TsTArW7x5VY_xJkwvyKXvepacpgJ4OYBfE2NfwjygwKcbectJTiYPI1jlYDvvMlUimaKGZl04gTMnTa2L8Zi-Q_lf7z6kXPnhPRLG3gIgJ9GqnIlOGOPZPSeEL3gUjIl5xRiNtcXQhCavvEDq__63liHL3zATcIVU0IchL1OcHjwumjV_ya87Ix4hSomdL-d-uzCrGxiybxcTaxpJvQlGFhIQ_QYbEFr2reWEpryc8HqXFO5hOM_H-oLH5Jr1Aj5PVIw5Vxw",
    cuisine: "Đồ ăn nhanh",
    priceRange: "30.000₫ - 80.000₫",
    rating: 4.5,
    deliveryTime: "10-15 phút",
    deliveryFee: "Miễn phí giao hàng",
  },
  {
    id: "4",
    name: "Pizza Roma",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqkFgOxWQssECdNznfCvFtLgUOLMnszQBE8Z7iFlPqJKtZ_jxVKXhD8M2O_UzNip8kppIJkBQSQz_7AQzQx2LtLiWkMNTx-sFXO5U-Gw0jstl91P3p_ka89LnsILZ6lh2Ix-8pymSL73tjd0-_bqSlszQID_gCR5N0OTIDD_dOA4onCGMiL0Iyazu8zI6pgtfiFkDsza764ty-DrS3DplWPpqlCh66oxVIq0H8MB8ccdrdcaR9DL4hajcKmHUzWq1KsSwLD_MeaMI",
    cuisine: "Ý",
    priceRange: "80.000₫ - 200.000₫",
    rating: 4.7,
    deliveryTime: "30-40 phút",
    deliveryFee: "20.000₫ phí giao",
  },
];

export default function RecentlyView() {
  const router = useRouter();
  return (
    <SectionCarousel
      title="Đã xem gần đây"
      subtitle="Khám phá thêm các món ăn được yêu thích"
      items={restaurants}
      itemClassName="basis-1/2 sm:basis-1/3 lg:basis-1/4 select-none"
      onViewAll={() => router.push("/restaurants")}
      renderItem={(item) => <RestaurantCard {...item} />}
    />
  );
}
