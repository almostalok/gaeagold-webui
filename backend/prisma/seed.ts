import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type SeedProduct = {
  sku: string;
  name: string;
  description: string;
  price: string;
  currency: string;
  categoryName: string;
  images: string[];
  specifications: {
    type: string;
    measurement: string;
    weight: string;
    dimensions: string;
    shelfLife: string;
    grade: string;
    origin: string;
  };
};

const categories = [
  {
    name: 'Honey',
    description: 'Natural and infused honey collections.',
  },
  {
    name: 'Dairy',
    description: 'Clarified butter and milk-based essentials.',
  },
  {
    name: 'Oils',
    description: 'Cold-pressed and culinary oils.',
  },
  {
    name: 'Pantry Staples',
    description: 'Everyday premium pantry products.',
  },
];

const products: SeedProduct[] = [
  {
    sku: 'GAEA-HNY-001',
    name: 'Raw Forest Honey',
    description: 'Unprocessed multi-flora honey sourced from forest hives.',
    price: '12.99',
    currency: 'USD',
    categoryName: 'Honey',
    images: [
      'https://dummyimage.com/800x800/f6d365/111111&text=Raw+Forest+Honey+1',
      'https://dummyimage.com/800x800/fda085/111111&text=Raw+Forest+Honey+2',
    ],
    specifications: {
      type: 'Raw Honey',
      measurement: '500 ml',
      weight: '680 g',
      dimensions: '7 x 7 x 15 cm',
      shelfLife: '18 months',
      grade: 'Premium',
      origin: 'Sundarbans, India',
    },
  },
  {
    sku: 'GAEA-HNY-002',
    name: 'Wildflower Honey',
    description: 'Light floral honey with naturally balanced sweetness.',
    price: '10.50',
    currency: 'USD',
    categoryName: 'Honey',
    images: ['https://dummyimage.com/800x800/fbc2eb/111111&text=Wildflower+Honey'],
    specifications: {
      type: 'Wildflower Honey',
      measurement: '350 ml',
      weight: '490 g',
      dimensions: '6 x 6 x 13 cm',
      shelfLife: '18 months',
      grade: 'A',
      origin: 'Himachal Pradesh, India',
    },
  },
  {
    sku: 'GAEA-DYR-001',
    name: 'A2 Cow Ghee',
    description: 'Traditional bilona churned ghee made from A2 milk.',
    price: '18.75',
    currency: 'USD',
    categoryName: 'Dairy',
    images: [
      'https://dummyimage.com/800x800/ffecd2/111111&text=A2+Cow+Ghee+1',
      'https://dummyimage.com/800x800/fcb69f/111111&text=A2+Cow+Ghee+2',
    ],
    specifications: {
      type: 'Clarified Butter',
      measurement: '500 ml',
      weight: '460 g',
      dimensions: '8 x 8 x 12 cm',
      shelfLife: '12 months',
      grade: 'Premium',
      origin: 'Rajasthan, India',
    },
  },
  {
    sku: 'GAEA-DYR-002',
    name: 'Buffalo Ghee',
    description: 'Rich and aromatic ghee prepared from buffalo milk cream.',
    price: '16.40',
    currency: 'USD',
    categoryName: 'Dairy',
    images: ['https://dummyimage.com/800x800/fdfbfb/111111&text=Buffalo+Ghee'],
    specifications: {
      type: 'Clarified Butter',
      measurement: '500 ml',
      weight: '470 g',
      dimensions: '8 x 8 x 12 cm',
      shelfLife: '12 months',
      grade: 'A',
      origin: 'Punjab, India',
    },
  },
  {
    sku: 'GAEA-OIL-001',
    name: 'Cold Pressed Mustard Oil',
    description: 'Traditional kachi ghani mustard oil for cooking and pickling.',
    price: '9.90',
    currency: 'USD',
    categoryName: 'Oils',
    images: ['https://dummyimage.com/800x800/fddb92/111111&text=Mustard+Oil'],
    specifications: {
      type: 'Cold Pressed Oil',
      measurement: '1 L',
      weight: '930 g',
      dimensions: '9 x 9 x 28 cm',
      shelfLife: '9 months',
      grade: 'Food Grade',
      origin: 'West Bengal, India',
    },
  },
  {
    sku: 'GAEA-OIL-002',
    name: 'Wood Pressed Coconut Oil',
    description: 'Unrefined coconut oil extracted using wooden churn methods.',
    price: '11.25',
    currency: 'USD',
    categoryName: 'Oils',
    images: [
      'https://dummyimage.com/800x800/e0c3fc/111111&text=Coconut+Oil+1',
      'https://dummyimage.com/800x800/8ec5fc/111111&text=Coconut+Oil+2',
    ],
    specifications: {
      type: 'Virgin Oil',
      measurement: '500 ml',
      weight: '470 g',
      dimensions: '7 x 7 x 21 cm',
      shelfLife: '12 months',
      grade: 'Food Grade',
      origin: 'Kerala, India',
    },
  },
  {
    sku: 'GAEA-PAN-001',
    name: 'Organic Turmeric Powder',
    description: 'High-curcumin turmeric root powder for daily cooking.',
    price: '5.35',
    currency: 'USD',
    categoryName: 'Pantry Staples',
    images: ['https://dummyimage.com/800x800/ffe29f/111111&text=Turmeric+Powder'],
    specifications: {
      type: 'Ground Spice',
      measurement: '250 g',
      weight: '250 g',
      dimensions: '5 x 5 x 14 cm',
      shelfLife: '10 months',
      grade: 'A',
      origin: 'Erode, India',
    },
  },
  {
    sku: 'GAEA-PAN-002',
    name: 'Stone Ground Red Chili Powder',
    description: 'Slow-ground chili powder with deep color and balanced heat.',
    price: '4.95',
    currency: 'USD',
    categoryName: 'Pantry Staples',
    images: ['https://dummyimage.com/800x800/f83600/ffffff&text=Chili+Powder'],
    specifications: {
      type: 'Ground Spice',
      measurement: '200 g',
      weight: '200 g',
      dimensions: '5 x 5 x 12 cm',
      shelfLife: '10 months',
      grade: 'A',
      origin: 'Guntur, India',
    },
  },
  {
    sku: 'GAEA-HNY-003',
    name: 'Acacia Honey',
    description: 'Mild and clear honey with a delicate aroma.',
    price: '13.20',
    currency: 'USD',
    categoryName: 'Honey',
    images: ['https://dummyimage.com/800x800/fceabb/111111&text=Acacia+Honey'],
    specifications: {
      type: 'Monofloral Honey',
      measurement: '500 ml',
      weight: '670 g',
      dimensions: '7 x 7 x 15 cm',
      shelfLife: '18 months',
      grade: 'Premium',
      origin: 'Uttarakhand, India',
    },
  },
  {
    sku: 'GAEA-OIL-003',
    name: 'Groundnut Cooking Oil',
    description: 'Filtered groundnut oil suitable for daily high-heat cooking.',
    price: '8.60',
    currency: 'USD',
    categoryName: 'Oils',
    images: ['https://dummyimage.com/800x800/fbc687/111111&text=Groundnut+Oil'],
    specifications: {
      type: 'Filtered Oil',
      measurement: '1 L',
      weight: '920 g',
      dimensions: '9 x 9 x 28 cm',
      shelfLife: '9 months',
      grade: 'Food Grade',
      origin: 'Gujarat, India',
    },
  },
];

async function ensureCategory(name: string, description: string) {
  const existing = await prisma.productCategory.findFirst({ where: { name } });
  if (existing) {
    return existing;
  }

  return prisma.productCategory.create({
    data: {
      name,
      description,
    },
  });
}

async function main() {
  const categoryMap = new Map<string, number>();

  for (const category of categories) {
    const record = await ensureCategory(category.name, category.description);
    categoryMap.set(record.name, record.id);
  }

  for (const item of products) {
    const categoryId = categoryMap.get(item.categoryName);
    if (!categoryId) {
      throw new Error(`Category not found for ${item.name}`);
    }

    await prisma.product.upsert({
      where: { sku: item.sku },
      update: {
        name: item.name,
        description: item.description,
        price: new Prisma.Decimal(item.price),
        currency: item.currency,
        categoryId,
        isActive: true,
        images: {
          deleteMany: {},
          create: item.images.map((url) => ({ url })),
        },
        specifications: {
          upsert: {
            update: {
              type: item.specifications.type,
              measurement: item.specifications.measurement,
              weight: item.specifications.weight,
              dimensions: item.specifications.dimensions,
              shelfLife: item.specifications.shelfLife,
              grade: item.specifications.grade,
              origin: item.specifications.origin,
            },
            create: {
              type: item.specifications.type,
              measurement: item.specifications.measurement,
              weight: item.specifications.weight,
              dimensions: item.specifications.dimensions,
              shelfLife: item.specifications.shelfLife,
              grade: item.specifications.grade,
              origin: item.specifications.origin,
            },
          },
        },
      },
      create: {
        sku: item.sku,
        name: item.name,
        description: item.description,
        price: new Prisma.Decimal(item.price),
        currency: item.currency,
        categoryId,
        isActive: true,
        images: {
          create: item.images.map((url) => ({ url })),
        },
        specifications: {
          create: {
            type: item.specifications.type,
            measurement: item.specifications.measurement,
            weight: item.specifications.weight,
            dimensions: item.specifications.dimensions,
            shelfLife: item.specifications.shelfLife,
            grade: item.specifications.grade,
            origin: item.specifications.origin,
          },
        },
      },
    });
  }

  await prisma.$executeRawUnsafe(`
    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'products_price_check'
      ) THEN
        ALTER TABLE "products"
        ADD CONSTRAINT "products_price_check"
        CHECK (price >= 0);
      END IF;
    END $$;
  `);

  console.log(`Seeded ${products.length} products.`);
}

main()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });