const fs = require('fs');
let code = fs.readFileSync('components/Home.tsx', 'utf8');

// Add import
code = code.replace(
  import { categories, products } from '@/lib/site-data';,
  import { categories, products } from '@/lib/site-data';\nimport { FadeIn, StaggerContainer, FadeInStaggerItem } from './FadeIn';
);

// Wrap first shell section
code = code.replace(
  <div className="section-shell relative z-10">,
  <div className="section-shell relative z-10">\n        <FadeIn>
);
code = code.replace(
  <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/products" className="rounded-full bg-[#b48344] px-6 py-3 text-sm font-bold text-[#1A1A1A] transition hover:bg-[#996f38]">
              Shop All Products
            </Link>
            <Link href="/contact" className="rounded-full border border-[#e6d5bf]/50 px-6 py-3 text-sm font-semibold text-[#e6d5bf] transition hover:bg-white/10">
              Request Bulk Quote
            </Link>
          </div>
        </div>
      </section>,
  <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/products" className="rounded-full bg-[#b48344] px-6 py-3 text-sm font-bold text-[#1A1A1A] transition hover:bg-[#996f38]">
              Shop All Products
            </Link>
            <Link href="/contact" className="rounded-full border border-[#e6d5bf]/50 px-6 py-3 text-sm font-semibold text-[#e6d5bf] transition hover:bg-white/10">
              Request Bulk Quote
            </Link>
          </div>\n        </FadeIn>\n        </div>\n      </section>
);

fs.writeFileSync('components/Home.tsx', code);
