'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { productService, BackendProduct } from '@/services/productService';
import { products as mockProducts, categories } from '@/lib/site-data';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [product, setProduct] = useState<BackendProduct | null>(null);
  const [related, setRelated] = useState<BackendProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try to fetch from backend
        const product = await productService.getProductById(slug);
        setProduct(product);

        // Fetch related products (same category)
        const allProducts = await productService.getProducts({ limit: 100 });
        const relatedProducts = allProducts.data
          .filter((p) => p.category.id === product.category.id && p.id !== product.id)
          .slice(0, 4);
        setRelated(relatedProducts);
      } catch (err) {
        console.error('Error fetching product:', err);
        
        // Fallback to mock data
        const mockProduct = mockProducts.find((p) => p.id === slug);
        if (mockProduct) {
          setProduct({
            id: mockProduct.id,
            sku: `SKU-${mockProduct.id}`,
            name: mockProduct.name,
            description: mockProduct.description,
            price: mockProduct.price,
            currency: 'INR',
            category: { id: mockProduct.category, name: mockProduct.category },
            images: [{ id: '1', url: mockProduct.image }],
            specifications: {
              weight: mockProduct.weight,
              origin: mockProduct.origin,
              type: mockProduct.grade,
            },
            isActive: true,
            createdAt: new Date().toISOString(),
            modifiedAt: new Date().toISOString(),
          });

          const relatedMock = mockProducts
            .filter((p) => p.category === mockProduct.category && p.id !== mockProduct.id)
            .slice(0, 4);

          setRelated(
            relatedMock.map((p) => ({
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
            }))
          );
        } else {
          setError('Product not found');
        }
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f9f6f0] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#b48344]"></div>
          <p className="mt-4 text-[#6b6b6b]">Loading product details...</p>
        </div>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="min-h-screen bg-[#f9f6f0] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || 'Product not found'}</p>
          <Link href="/products" className="text-[#b48344] hover:underline">
            ← Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const rawImageUrl = product.images && product.images.length > 0 ? product.images[0].url : '';
  const imageUrl = rawImageUrl && rawImageUrl.trim().length > 0 ? rawImageUrl : '/images/placeholder.png';
  const categorySlug = product.category.name.toLowerCase().replace(/\s+/g, '-');
  const grade = product.specifications?.type || 'Standard';
  const weight = product.specifications?.weight || 'N/A';
  const origin = product.specifications?.origin || 'N/A';

  return (
    <main className="min-h-screen bg-[#f9f6f0] text-[#1a1a1a]">
      <section className="relative w-full overflow-hidden bg-[#102f23] pb-12 pt-32 lg:pt-40 px-6 lg:px-12 -mt-[1px]">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.25] mix-blend-luminosity" 
          style={{ backgroundImage: 'url(/images/rural_pattern.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
        
        <div className="relative z-10 mx-auto max-w-[1400px] text-center flex flex-col items-center">
          <nav className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#f9f6f0]/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> 
            <span className="px-2 text-[#b48344]">/</span> 
            <Link href="/products" className="hover:text-white transition-colors">Products</Link> 
            <span className="px-2 text-[#b48344]">/</span> 
            <span className="text-[#f9f6f0]">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1400px] px-6 lg:px-12 py-12 lg:py-24">
        {/* Minimalistic Cream Background farm overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-multiply" 
             style={{ backgroundImage: 'url(/images/cream_pattern.png)', backgroundSize: '450px', backgroundPosition: 'center', backgroundRepeat: 'repeat' }} />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1fr] items-start">
          <div className="lg:sticky lg:top-[120px] flex flex-col gap-4">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2rem] border border-[#e8e6e1] bg-white p-8 flex items-center justify-center overflow-hidden shadow-sm group">
              <Image 
                src={imageUrl} 
                alt={product.name} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
            </div>
          </div>

          <div className="pt-4 lg:pt-8">
            <Link href={`/categories/${categorySlug}`} className="text-[10px] sm:text-xs uppercase tracking-widest text-[#102f23]/60 font-bold hover:text-[#b48344] transition-colors mb-4 inline-block">
              {product.category.name}
            </Link>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[#102f23] leading-tight mb-4">{product.name}</h1>
            
            <p className="text-xs uppercase tracking-widest text-[#102f23]/40 font-bold flex items-center gap-2 mb-8">
               <span className="text-[#b48344]">★</span> 4.8 <span className="opacity-50 mx-2">|</span> 245 reviews
            </p>

            <div className="border-t border-[#e8e6e1] pt-8 pb-8">
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-medium text-[#102f23]">₹{product.price}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                ['Grade', grade],
                ['Weight/Vol', weight],
                ['Packaging', 'Standard Packaging'],
                ['Origin', origin],
              ].map(([label, value]) => (
                <div key={label} className="border border-[#e8e6e1] rounded-2xl p-4 bg-white shadow-sm flex flex-col justify-center">
                  <p className="text-[9px] uppercase tracking-widest font-bold text-[#102f23]/50 mb-1">{label}</p>
                  <p className="text-xs font-semibold text-[#102f23]">{value}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-[#e8e6e1] pt-8 mb-8 space-y-4">
              <p className="text-sm leading-relaxed text-[#6b6b6b]">{product.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
               <div className="flex items-center justify-between border border-[#e8e6e1] bg-white rounded-full overflow-hidden w-full sm:w-[150px] shadow-sm">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-5 py-4 text-[#102f23]/40 hover:text-[#b48344] font-bold transition-colors"
                  >
                    -
                  </button>
                  <span className="font-bold text-[#102f23]">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-5 py-4 text-[#102f23]/40 hover:text-[#b48344] font-bold transition-colors"
                  >
                    +
                  </button>
               </div>
               <button type="button" className="flex-1 bg-[#102f23] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#b48344] transition-colors shadow-md">
                 Add to Inquiry
               </button>
            </div>

            <div className="rounded-2xl border border-[#e8e6e1] bg-white shadow-sm overflow-hidden">
               {['Description', 'Specifications'].map((item, idx) => (
                  <details key={item} className={`group ${idx > 0 ? 'border-t border-[#e8e6e1]' : ''}`}>
                     <summary className="flex cursor-pointer items-center justify-between p-5 text-xs font-bold uppercase tracking-widest text-[#102f23] hover:bg-[#f9f6f0] transition-colors">
                        {item}
                        <span className="text-[#b48344] transition group-open:rotate-180">↓</span>
                     </summary>
                     <div className="p-5 pt-0 text-sm leading-relaxed text-[#6b6b6b]">
                        {item === 'Description' ? product.description : `Weight: ${weight} | Origin: ${origin} | Type: ${grade}`}
                     </div>
                  </details>
               ))}
            </div>
          </div>
        </div>

        <section className="mt-24 pt-16 border-t border-[#e8e6e1]">
          <h2 className="text-center font-heading text-3xl lg:text-4xl font-medium text-[#102f23] mb-12">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((item) => (
              <div key={item.id} className="group flex flex-col bg-white border border-[#e8e6e1] transition-all duration-500 hover:border-[#b48344] rounded-4xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] shadow-sm">
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-t-4xl bg-[#f9f6f0] p-6 flex flex-col items-center justify-center">
                  <Link href={`/products/${item.id}`} className="absolute inset-0 z-20" />
                  <Image 
                    src={item.images?.[0]?.url || '/images/placeholder.png'} 
                    alt={item.name} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                </div>
                <div className="flex flex-col flex-1 p-6 pb-8 text-center bg-white border-t border-[#e8e6e1] rounded-b-4xl">
                  <h3 className="font-heading text-base font-medium text-[#102f23] mb-2 leading-tight">
                    <Link href={`/products/${item.id}`} className="hover:text-[#b48344] transition-colors">{item.name}</Link>
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-[#102f23]/50 font-semibold mb-4">{item.category.name}</p>
                  <span className="text-lg font-medium text-[#102f23] mb-6">₹{item.price}</span>
                  <Link href={`/products/${item.id}`} className="inline-block px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-[#102f23] border border-[#e8e6e1] rounded-full hover:bg-[#b48344] hover:text-white hover:border-[#b48344] transition-all">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

