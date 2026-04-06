import { ArrowRight, Flame, Heart, Leaf, ShieldCheck, Wheat } from 'lucide-react';
import Link from 'next/link';
import BannerCarousel from './BannerCarousel';
import HeroSection from './HeroSection';
import BrandStory from './BrandStory';
import CategoryShowcase from './CategoryShowcase';
import FeaturedProducts from './FeaturedProducts';
import TrustCTA from './TrustCTA';
import { id } from 'date-fns/locale';

export default function Home() {
  const categories = [
    {
      id: '1',
      name: 'Powders',
      slug: 'powders',
      description: 'Dehydrated culinary powders for cooking, seasoning, and food processing.',
    },
    {
      id: '2',
      name: 'Spices',
      slug: 'spices',
      description: 'Freshly sourced whole spices and fine-ground spice powders.',
    },
    {
      name: '3',
      slug: 'rice',
      description: 'Premium rice varieties selected for aroma, texture, and consistency.',
    },
    {
      id: '4',
      name: 'Wheat & Flour',
      slug: 'wheat-flour',
      description: 'Farm-grade wheat grains and stone-milled flour for everyday kitchens.',
    },
    {
      id: '5',
      name: 'Ghee',
      slug: 'ghee',
      description: 'Traditional clarified butter made from pure milk for cooking and wellness.',
    },
  ];

  const products = [
    {
      name: 'Onion Powder',
      slug: 'onion-powder',
      shortDesc: 'Fine onion powder with strong aroma for gravies and seasoning blends.',
      description:
        'A smooth, shelf-stable onion powder crafted for sauces, soups, marinades, and ready-to-cook mixes. Ideal for both home kitchens and bulk buyers.',
      image: '/products/onion-powder.png',
      price: 180,
      stock: 120,
      unit: '500 g',
      featured: true,
      categorySlug: 'powders',
    },
    {
      name: 'Ginger Powder',
      slug: 'ginger-powder',
      shortDesc: 'Warm, pungent ginger powder for beverages, bakery, and spice mixes.',
      description:
        'Dry ginger powder with a balanced spicy profile, suitable for masala blends, herbal drinks, snacks, and processed food applications.',
      image: '/products/ginger-powder.png',
      price: 220,
      stock: 95,
      unit: '500 g',
      featured: true,
      categorySlug: 'powders',
    },
    {
      name: 'Garlic Powder',
      slug: 'garlic-powder',
      shortDesc: 'Rich garlic powder for seasoning, sauces, snacks, and marinades.',
      description:
        'Made for instant flavor without the prep time of fresh garlic. Works well in namkeen, snack seasoning, chutneys, and ready-to-eat preparations.',
      image: '/products/garlic-powder.png',
      price: 210,
      stock: 100,
      unit: '500 g',
      featured: true,
      categorySlug: 'powders',
    },
    {
      name: 'Whole Black Pepper',
      slug: 'whole-black-pepper',
      shortDesc: 'Bold whole black pepper with sharp heat and strong natural oils.',
      description:
        'Premium whole black pepper sourced for robust flavor and consistent size. Best for grinding fresh, spice blends, and culinary use.',
      image: '/products/whole-black-pepper.png',
      price: 320,
      stock: 80,
      unit: '500 g',
      featured: true,
      categorySlug: 'spices',
    },
    {
      name: 'Black Pepper Powder',
      slug: 'black-pepper-powder',
      shortDesc: 'Fresh-ground black pepper powder with deep aroma and balanced pungency.',
      description:
        'Convenient black pepper powder for table seasoning, sauces, ready meals, and food service use where uniform texture matters.',
      image: '/products/black-pepper-powder.png',
      price: 340,
      stock: 70,
      unit: '500 g',
      featured: false,
      categorySlug: 'spices',
    },
    {
      name: 'Premium Basmati Rice',
      slug: 'premium-basmati-rice',
      shortDesc: 'Long-grain aromatic basmati rice for biryani, pulao, and premium dining.',
      description:
        'Carefully selected basmati rice with long grains, natural aroma, and fluffy cooked texture. A strong fit for households, horeca, and resellers.',
      image: '/products/basmati-rice.png',
      price: 540,
      stock: 150,
      unit: '5 kg',
      featured: true,
      categorySlug: 'rice',
    },
    {
      name: 'Premium Sharbati Wheat',
      slug: 'premium-sharbati-wheat',
      shortDesc: 'Golden sharbati wheat grains with soft texture and natural sweetness.',
      description:
        'High-quality sharbati wheat suited for daily chapati consumption and premium grain supply. Known for softness and reliable dough performance.',
      image: '/products/sharbati-wheat.png',
      price: 320,
      stock: 140,
      unit: '5 kg',
      featured: false,
      categorySlug: 'wheat-flour',
    },
    {
      name: 'Sharbati Wheat Flour',
      slug: 'sharbati-wheat-flour',
      shortDesc: 'Stone-milled flour made from premium sharbati wheat for soft rotis.',
      description:
        'Freshly milled wheat flour with fine texture and strong water absorption, designed for soft rotis, parathas, and consistent daily use.',
      image: '/products/sharbati-wheat-flour.png',
      price: 360,
      stock: 110,
      unit: '5 kg',
      featured: true,
      categorySlug: 'wheat-flour',
    },
    {
      name: 'Desi Cow Ghee',
      slug: 'desi-cow-ghee',
      shortDesc: 'Pure desi cow ghee with rich aroma, made using traditional bilona method.',
      description:
        'Handcrafted desi cow ghee prepared from A2 milk using the traditional bilona process. Rich in flavour and nutrients, ideal for cooking, tadka, sweets, and daily consumption.',
      image: '/products/desi-cow-ghee.png',
      price: 750,
      stock: 60,
      unit: '1 L',
      featured: true,
      categorySlug: 'ghee',
    },
    {
      name: 'Buffalo Ghee',
      slug: 'buffalo-ghee',
      shortDesc: 'Creamy buffalo ghee with dense texture, perfect for sweets and parathas.',
      description:
        'Premium buffalo ghee with a thick, grainy texture and deep golden colour. Excellent for halwa, laddoo, parathas, and rich gravies. High fat content delivers superior taste.',
      image: '/products/buffalo-ghee.png',
      price: 620,
      stock: 75,
      unit: '1 L',
      featured: true,
      categorySlug: 'ghee',
    },
  ];

  return (
    <div>
      {/* landscape image carousel and brand banners */}
      <section className="banner-section ">
        <BannerCarousel />
      </section>
      {/* Section 1 — Hero */}
      <section className="hero-section relative overflow-hidden bg-gradient-to-br from-[#f3ece0] via-[#faf6ef] to-[#e8dfd0]">
        <HeroSection />
      </section>

      {/* Section 2 — Brand Story */}
      <section className="brand-story bg-[#faf6ef] py-20 sm:py-24">
        <BrandStory />
      </section>

      {/* Section 3 — Category Showcase */}
      <section className="category-showcase bg-[#f3ece0] pb-20 sm:pb-24">
        <CategoryShowcase categories={categories} products={products} />
      </section>

      {/* Section 5 — Trust / CTA */}
      <section className="bg-gradient-to-br from-[#4a6741] to-[#3d5636] py-20 sm:py-24">
        <TrustCTA />
      </section>
    </div>
  );
}
