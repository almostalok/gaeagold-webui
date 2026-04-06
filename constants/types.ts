export interface Category {
  name: string;
  slug: string;
  description: string;
}

export interface Product {
  name: string;
  slug: string;
  shortDesc: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  unit: string;
  featured: boolean;
  categorySlug: string;
}
