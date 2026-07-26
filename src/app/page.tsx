import { Hero } from "../components/storefront/hero";
import { CategorySection } from "../components/storefront/category-section";
import { FeaturedSection } from "../components/storefront/featured-section";
import { PromoSection } from "../components/storefront/promo-section";
import { BrandStory } from "../components/storefront/brand-story";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategorySection/>
      <FeaturedSection/>
      <PromoSection/>
      <BrandStory/>

    </main>
  );
}