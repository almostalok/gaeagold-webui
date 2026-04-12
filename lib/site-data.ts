export type Product = {
  id: string;
  slug: string;
  name: string;
  category: 'Spices' | 'Oils' | 'Grains' | 'Pulses' | 'Dry Fruits' | 'Combo Packs' | 'Flours' | 'Ghee';
  shortDescription: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  moq?: string;
  badge?: 'Best Seller' | 'New' | 'Limited' | string;
  image: string;
  origin: string;
  grade: string;
  weight: string;
  packaging: string;
  shelfLife: string;
  certification: string;
  variants?: { weight: string; price: number; originalPrice?: number }[];
};

export type Category = {
  name: string;
  slug: string;
  description: string;
  count: number;
};

export const categories: Category[] = [
  { name: 'Ghee', slug: 'ghee', count: 2, description: 'Traditional bilona churning method for maximum nutrition.' },
  { name: 'Spices', slug: 'spices', count: 45, description: 'Single-origin, hand-pounded spices for robust and authentic flavors.' },
  { name: 'Oils', slug: 'oils', count: 28, description: 'Cold-pressed and wood-pressed oils retaining essential nutrients.' },
  { name: 'Flours', slug: 'flours', count: 12, description: 'Stone-ground heritage flours milled to order.' },
  { name: 'Grains', slug: 'grains', count: 32, description: 'Sustainably farmed, heritage grains perfect for every meal.' },
  { name: 'Combo Packs', slug: 'combo-packs', count: 8, description: 'Curated combinations of our finest products for holistic health.' },
];

export const products: Product[] = [
  {
    id: '1',
    slug: 'a2-gir-cow-ghee',
    name: 'A2 Gir Cow Cultured Ghee',
    category: 'Ghee',
    shortDescription: 'Traditionally churned bilona ghee from grass-fed Gir cows.',
    description: 'Made using the ancient Vedic Bilona method, churning curd into makhana in clay pots. Deep golden hue, rich aroma, and highly nutritious.',
    price: 1850,
    originalPrice: 2100,
    rating: 4.9,
    reviews: 512,
    image: '/images/products/ghee_product.png',
    badge: 'Best Seller',
    origin: 'Gujarat, India',
    grade: 'A2 Vedic Premium',
    weight: '500ml',
    packaging: 'Glass jar',
    shelfLife: '12 months',
    certification: 'A2 Certified',
    variants: [
      { weight: '500ml', price: 1850, originalPrice: 2100 },
      { weight: '1L', price: 3500, originalPrice: 4000 },
      { weight: '5L (Tin)', price: 17000 },
    ]
  },
  {
    id: '2',
    slug: 'hand-pounded-turmeric',
    name: 'Hand-Pounded Lakadong Turmeric',
    category: 'Spices',
    shortDescription: 'High curcumin (8%+) turmeric sourced from Meghalaya.',
    description: 'Stone-ground at low RPMs to retain maximum essential oils. Grown without pesticides and famous for its incredibly high curcumin content.',
    price: 550,
    originalPrice: 650,
    rating: 4.8,
    reviews: 320,
    image: '/images/products/spices_product_new.png',
    badge: 'Limited',
    origin: 'Meghalaya, India',
    grade: 'High Curcumin 8%+',
    weight: '250g',
    packaging: 'Airtight tin',
    shelfLife: '24 months',
    certification: 'Organic Certified',
    variants: [
      { weight: '250g', price: 550, originalPrice: 650 },
      { weight: '500g', price: 1050, originalPrice: 1200 },
      { weight: '1kg', price: 2000 },
    ]
  },
  {
    id: '3',
    slug: 'wood-pressed-mustard-oil',
    name: 'Wood Pressed Yellow Mustard Oil',
    category: 'Oils',
    shortDescription: 'Extracted using traditional wooden ghani at room temperature.',
    description: 'Pure, pungent, and highly aromatic. Extracted from premium yellow mustard seeds without heating or adding chemicals, preserving natural antioxidants.',
    price: 490,
    rating: 4.7,
    reviews: 180,
    image: '/images/products/oil_product_new.png',
    badge: 'New',
    origin: 'Rajasthan, India',
    grade: 'Cold Pressed RAW',
    weight: '1L',
    packaging: 'Glass bottle',
    shelfLife: '12 months',
    certification: '100% Pure Natural',
    variants: [
      { weight: '1L', price: 490, originalPrice: 550 },
      { weight: '5L (Can)', price: 2350, originalPrice: 2500 },
    ]
  },
  {
    id: '4',
    slug: 'heritage-emmer-wheat-flour',
    name: 'Heritage Emmer Wheat Flour (Khapli)',
    category: 'Flours',
    shortDescription: 'Low GI, stone-ground flour from ancient wheat grains.',
    description: 'Khapli (Emmer) wheat is an ancient grain milled using traditional chakki stones. Easily digestible, extremely low glycemic index, and rich in fiber.',
    price: 240,
    rating: 4.8,
    reviews: 210,
    image: '/images/products/flour_product.png',
    origin: 'Maharashtra, India',
    grade: 'Stone-Ground',
    weight: '1kg',
    packaging: 'Cotton canvas bag',
    shelfLife: '6 months',
    certification: 'Pesticide Free',
    variants: [
      { weight: '1kg', price: 240 },
      { weight: '5kg', price: 1150, originalPrice: 1200 },
    ]
  },
  {
    id: '5',
    slug: 'native-pearl-millet-bajra',
    name: 'Native Pearl Millet (Bajra)',
    category: 'Grains',
    shortDescription: 'Unpolished native millet rich in iron and calcium.',
    description: 'Sustainably farmed, unpolished Bajra grains. Perfect for winter rotis and porridges, offering unmatched natural nutrition and warmth.',
    price: 130,
    rating: 4.6,
    reviews: 94,
    image: '/images/products/grains_product_new.png',
    origin: 'Haryana, India',
    grade: 'A-Grade Unpolished',
    weight: '1kg',
    packaging: 'Vacuum pouch',
    shelfLife: '12 months',
    certification: 'Natural Farming',
    variants: [
      { weight: '1kg', price: 130 },
      { weight: '5kg', price: 600 },
    ]
  },
];

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Trade', href: '/trade' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const adminNav = [
  { label: 'Dashboard', href: '/admin' },
  { label: 'Products', href: '/admin/products' },
  { label: 'Inquiries', href: '/admin/inquiries' },
  { label: 'Analytics', href: '/admin/analytics' },
  { label: 'Settings', href: '/admin/settings' },
];

export const certifications = ['Certified Organic', 'ISO Certified', 'Fair Trade', 'Export Quality'];
