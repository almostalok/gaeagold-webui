import Link from 'next/link';

const productLinks = [
  { name: 'Onion Powder', slug: 'onion-powder' },
  { name: 'Ginger Powder', slug: 'ginger-powder' },
  { name: 'Garlic Powder', slug: 'garlic-powder' },
  { name: 'Whole Black Pepper', slug: 'whole-black-pepper' },
  { name: 'Black Pepper Powder', slug: 'black-pepper-powder' },
  { name: 'Premium Basmati Rice', slug: 'premium-basmati-rice' },
  { name: 'Premium Sharbati Wheat', slug: 'premium-sharbati-wheat' },
  { name: 'Sharbati Wheat Flour', slug: 'sharbati-wheat-flour' },
  { name: 'Desi Cow Ghee', slug: 'desi-cow-ghee' },
  { name: 'Buffalo Ghee', slug: 'buffalo-ghee' },
];

export function Footer() {
  return (
    <footer className="border-t border-[#e8dfd0] bg-[#2c1810] text-[#c4b49a]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-[#f3ece0]">Gaea Gold Harvest Pvt Ltd.</h3>
          <p className="mt-3 text-sm leading-6 text-[#a08e74]">
            Premium agricultural products, processed food ingredients, grains, ghee, and pantry
            essentials sourced from trusted farms.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#f3ece0]">
            Our Products
          </h4>
          <ul className="mt-3 space-y-1.5">
            {productLinks.map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/products/${product.slug}`}
                  className="text-sm leading-6 text-[#a08e74] transition hover:text-[#f3ece0]"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#f3ece0]">
            Version 1.0.2
          </h4>
          <p className="mt-3 text-sm leading-6 text-[#a08e74]">Gaea Gold Harvest Pvt Ltd.</p>
          <p className="text-sm leading-6 text-[#a08e74]">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
