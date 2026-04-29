'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { categories, Product, products as mockProducts } from '@/lib/site-data';
import { productService, BackendProduct, ProductListResponse } from '@/services/productService';

// Fake Certifications array (the original import had it, but we can reconstruct a simple one if missing)
const certifications = ['Organic Certified', 'ISO 9001:2015', 'Fair Trade', 'FDA Approved', 'A2 Certified'];

export default function ProductsPage() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = React.useState(false);
  const [products, setProducts] = React.useState<BackendProduct[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [page, setPage] = React.useState(1);
  const [limit] = React.useState(10);
  const [totalPages, setTotalPages] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('');

  // Fetch products on mount and when filters change
  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await productService.getProducts({
          page,
          limit,
          search: searchTerm || undefined,
          category: selectedCategory || undefined,
        });
        setProducts(response.data);
        setTotalPages(response.meta.totalPages);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setError('Failed to load products. Using demo data.');
        // Fallback to mock products
        setProducts(mockProducts.map((p) => ({
          id: p.id,
          sku: `SKU-${p.id}`,
          name: p.name,
          description: p.description,
          price: p.price,
          currency: 'INR',
          category: { id: p.category, name: p.category },
          images: [{ id: '1', url: p.image }],
          specifications: {
            weight: p.weight,
            origin: p.origin,
            type: p.grade,
          },
          isActive: true,
          createdAt: new Date().toISOString(),
          modifiedAt: new Date().toISOString(),
        })));
        setTotalPages(Math.ceil(mockProducts.length / limit));
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, limit, searchTerm, selectedCategory]);

  return (
    <main className="min-h-screen bg-[#f9f6f0] text-[#1a1a1a]">
      {/* Grand Hero Section with Farm Elements behind Transparent Navbar */}
      <section className="relative w-full overflow-hidden bg-[#102f23] pb-24 pt-32 lg:pt-40 px-6 lg:px-12 -mt-[1px]">
        {/* Atmospheric Rural farm landscape pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.25] mix-blend-luminosity" 
          style={{ backgroundImage: 'url(/images/rural_pattern.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
        
        <div className="relative z-10 mx-auto max-w-[1400px] text-center flex flex-col items-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-medium text-[#f9f6f0] mb-6">Our Finest Selection</h1>
          <nav className="mb-4 text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#f9f6f0]/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> 
            <span className="px-2 text-[#b48344]">/</span> 
            <span className="text-[#f9f6f0]">Products</span>
          </nav>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative mx-auto w-full max-w-[1400px] px-6 lg:px-12 py-12 lg:py-24">
        {/* Minimalistic Cream Background farm overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-multiply" 
             style={{ backgroundImage: 'url(/images/cream_pattern.png)', backgroundSize: '450px', backgroundPosition: 'center', backgroundRepeat: 'repeat' }} />

        {/* Mobile Toolbar (Filter Toggle & Shows Sort on Mobile) */}
        <div className="relative z-10 mb-8 flex flex-col gap-4 sm:flex-row sm:items-center justify-between border-b border-[#e8e6e1] pb-6 lg:hidden">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-[#6b6b6b]">Showing {loading ? '...' : products.length} Products</p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button 
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-[#e8e6e1] bg-white px-5 py-3 rounded-full text-[10px] font-bold text-[#102f23] uppercase tracking-widest"
            >
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <div className="flex-1 sm:flex-none z-50">
              <SortDropdown />
            </div>
          </div>
        </div>

        {/* Mobile Filter Modal overlay */}
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-[200] flex lg:hidden">
             {/* Backdrop */}
             <div className="fixed inset-0 bg-[#102f23]/80 backdrop-blur-sm" onClick={() => setIsMobileFilterOpen(false)} />
             
             {/* Drawer */}
             <div className="relative w-[300px] max-w-[80vw] h-full bg-[#f9f6f0] p-6 overflow-y-auto z-[210] shadow-2xl flex flex-col">
                <div className="flex items-center justify-between mb-8 border-b border-[#e8e6e1] pb-4">
                   <h2 className="font-heading text-xl font-medium text-[#102f23]">Filters</h2>
                   <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 bg-white rounded-full border border-[#e8e6e1]">
                      <X className="w-5 h-5 text-[#102f23]" />
                   </button>
                </div>
                <FilterContent selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
                <div className="mt-auto pt-8">
                  <button onClick={() => setIsMobileFilterOpen(false)} className="w-full bg-[#102f23] py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md rounded-xl">
                    Show Products
                  </button>
                </div>
             </div>
          </div>
        )}

        <div className="relative z-10 grid gap-12 lg:grid-cols-[250px_1fr]">
          {/* Desktop Filters Sidebar */}
          <aside className="sticky top-[100px] hidden h-fit max-h-[calc(100vh-140px)] overflow-y-auto lg:block pr-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <h2 className="mb-6 font-heading text-xl lg:text-lg font-medium text-[#102f23]">Filters</h2>
            <FilterContent selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          </aside>

          {/* Products Grid Area */}
          <div>
            <div className="mb-8 hidden items-center justify-between border-b border-[#e8e6e1] pb-6 lg:flex relative z-50">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#6b6b6b]">Showing {loading ? '...' : products.length} Products</p>
              <SortDropdown />
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-24">
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#b48344]"></div>
                  <p className="mt-4 text-[#6b6b6b] text-sm">Loading products...</p>
                </div>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center py-24">
                <div className="text-center text-red-600">
                  <p className="text-sm">{error}</p>
                </div>
              </div>
            ) : products.length === 0 ? (
              <div className="flex items-center justify-center py-24">
                <div className="text-center">
                  <p className="text-[#6b6b6b] text-sm">No products found</p>
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                  {products.map((item) => (
                    <GridProductCard key={item.id} product={item} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="mt-16 flex flex-wrap justify-center gap-2 border-t border-[#e8e6e1] pt-12">
                    <button
                      onClick={() => setPage(Math.max(1, page - 1))}
                      disabled={page === 1}
                      className={`border px-5 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-sm ${
                        page === 1
                          ? 'border-[#e8e6e1] bg-white text-[#6b6b6b] cursor-not-allowed opacity-50'
                          : 'border-[#e8e6e1] bg-white text-[#6b6b6b] hover:border-[#102f23] hover:text-[#102f23]'
                      }`}
                    >
                      Prev
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                        className={`border px-5 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-sm ${
                          pageNum === page
                            ? 'border-[#b48344] bg-[#b48344] text-white'
                            : 'border-[#e8e6e1] bg-white text-[#6b6b6b] hover:border-[#102f23] hover:text-[#102f23]'
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                    <button
                      onClick={() => setPage(Math.min(totalPages, page + 1))}
                      disabled={page === totalPages}
                      className={`border px-5 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-sm ${
                        page === totalPages
                          ? 'border-[#e8e6e1] bg-white text-[#6b6b6b] cursor-not-allowed opacity-50'
                          : 'border-[#e8e6e1] bg-white text-[#6b6b6b] hover:border-[#102f23] hover:text-[#102f23]'
                      }`}
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function FilterContent({ selectedCategory, onCategoryChange }: { selectedCategory: string; onCategoryChange: (category: string) => void }) {
  const [priceRange, setPriceRange] = React.useState([0, 10000]);
  
  return (
    <>
      <div className="border-t border-[#e8e6e1] py-6 -mt-6 lg:mt-0">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#102f23]">Category</h3>
        <ul className="space-y-3">
          <li className="flex items-center justify-between text-base">
            <label className="flex items-center gap-3 text-[#6b6b6b] hover:text-[#102f23] cursor-pointer transition-colors group">
              <input 
                type="checkbox" 
                className="h-4 w-4 accent-[#b48344]" 
                checked={selectedCategory === ''}
                onChange={() => onCategoryChange('')}
              />
              <span className="group-hover:text-[#b48344] transition-colors">All Categories</span>
            </label>
          </li>
          {categories.map((item) => (
            <li key={item.slug} className="flex items-center justify-between text-base">
              <label className="flex items-center gap-3 text-[#6b6b6b] hover:text-[#102f23] cursor-pointer transition-colors group">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 accent-[#b48344]"
                  checked={selectedCategory === item.name}
                  onChange={() => onCategoryChange(selectedCategory === item.name ? '' : item.name)}
                />
                <span className="group-hover:text-[#b48344] transition-colors">{item.name}</span>
              </label>
              <span className="text-[10px] font-semibold text-[#a0a0a0]">({item.count})</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-[#e8e6e1] py-6">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#102f23]">Price Range</h3>
        <input 
          type="range" 
          min={0} 
          max={10000} 
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
          className="w-full accent-[#b48344]" 
        />
        <p className="mt-4 text-xs font-semibold text-[#6b6b6b]">₹{priceRange[0]} - ₹{priceRange[1]}</p>
      </div>

      <div className="border-t border-[#e8e6e1] py-6">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#102f23]">Certifications</h3>
        <ul className="space-y-3">
          {certifications.map((item) => (
            <li key={item} className="text-base text-[#6b6b6b]">
              <label className="flex items-center gap-3 hover:text-[#102f23] cursor-pointer transition-colors group text-[#6b6b6b]">
                <input type="checkbox" className="h-4 w-4 accent-[#b48344]" />
                <span className="group-hover:text-[#b48344] transition-colors">{item}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6">
        <button type="button" className="w-full bg-[#102f23] px-6 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#b48344] shadow-md rounded-xl">
          Apply Filters
        </button>
        <button type="button" className="mt-4 w-full text-[10px] font-bold uppercase tracking-widest text-[#6b6b6b] hover:text-[#102f23] transition-colors">
          Clear All
        </button>
      </div>
    </>
  )
}

function SortDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState('Filter by: Popular');
  const options = ['Filter by: Popular', 'Filter by: Newest', 'Price: Low to High', 'Price: High to Low'];

  return (
    <div className="relative w-full sm:w-[220px]">
      <button 
        type="button" 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between border border-[#e8e6e1] bg-white px-5 py-3 rounded-full text-[10px] font-bold text-[#102f23] transition-colors hover:border-[#b48344] shadow-sm uppercase tracking-widest"
      >
        <span>{selected}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#b48344]' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-[#e8e6e1] rounded-2xl shadow-xl overflow-hidden z-[100]">
          {options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => { setSelected(option); setIsOpen(false); }}
              className={`w-full text-left px-5 py-3.5 text-[9px] sm:text-[10px] uppercase font-bold tracking-widest border-b border-[#e8e6e1] last:border-0 hover:bg-[#f9f6f0] transition-colors flex justify-between items-center ${option === selected ? 'text-[#b48344] bg-[#f9f6f0]' : 'text-[#6b6b6b]'}`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function GridProductCard({ product }: { product: BackendProduct }) {
  const [quantity, setQuantity] = React.useState(1);
  
  const rawImageUrl = product.images && product.images.length > 0 ? product.images[0].url : '';
  const imageUrl = rawImageUrl && rawImageUrl.trim().length > 0 ? rawImageUrl : '/images/placeholder.png';
  const weight = product.specifications?.weight || 'Standard';
  const origin = product.specifications?.origin || '';
  const grade = product.specifications?.type || '';

  return (
    <div className="group h-full flex flex-col bg-white border border-[#e8e6e1] transition-all duration-500 hover:border-[#b48344] rounded-4xl overflow-visible hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] shadow-sm">
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-t-4xl bg-[#f9f6f0] p-6 flex flex-col items-center justify-center">
        <Link href={`/products/${product.id}`} className="absolute inset-0 z-20" />
        <Image 
          src={imageUrl} 
          alt={product.name} 
          fill 
          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col flex-1 p-6 pb-8 text-center bg-white border-t border-[#e8e6e1] z-30 relative rounded-b-4xl">
        <h3 className="font-heading text-base sm:text-lg font-medium text-[#102f23] mb-2 leading-tight">
          <Link href={`/products/${product.id}`} className="hover:text-[#b48344] transition-colors">{product.name}</Link>
        </h3>
        <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#102f23]/50 font-semibold mb-6 flex-1">
          {product.category.name}
        </p>
        
        <div className="mb-4 flex flex-col items-center border-t border-[#e8e6e1] pt-4">
           <span className="text-lg sm:text-xl font-medium text-[#102f23]">₹{product.price}</span>
        </div>
        
        <div className="mb-4">
           <span className="inline-block px-4 py-2.5 text-[10px] sm:text-xs font-bold text-[#102f23]/60 uppercase tracking-widest w-full text-center">{weight}</span>
        </div>
        
        <div className="flex w-full items-center justify-between border border-[#e8e6e1] group-hover:border-[#b48344] rounded-full overflow-hidden transition-all duration-300">
           <div className="flex items-center px-3 sm:px-4 bg-[#f9f6f0] border-r border-[#e8e6e1] group-hover:border-[#b48344] transition-colors z-30">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-sm font-bold text-[#102f23]/40 cursor-pointer hover:text-[#b48344] py-2"
              >
                -
              </button>
              <span className="text-sm font-bold text-[#102f23] px-2 sm:px-3">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="text-sm font-bold text-[#102f23]/40 cursor-pointer hover:text-[#b48344] py-2"
              >
                +
              </button>
           </div>
           <button className="flex-1 flex items-center justify-center gap-2 bg-transparent px-2 sm:px-4 py-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#102f23] group-hover:bg-[#b48344] group-hover:text-white transition-all z-30">
             Add
           </button>
        </div>
      </div>
    </div>
  );
}
