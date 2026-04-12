const fs = require('fs');
let code = fs.readFileSync('components/Home.tsx', 'utf8');

const oldStr = <section className="relative overflow-hidden bg-[#1e2a1f] pb-14 pt-12 text-white sm:py-24">
        <Image
          src=" + https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80 + "
          alt="Agriculture Field"
          width={1600}
          height={900}
          priority
          className="absolute inset-0 h-full w-full object-cover opacity-10 mix-blend-overlay"
        />
        <div className="pointer-events-none absolute -left-10 top-8 h-44 w-44 rounded-full border border-[#cbba9a]/20" />
        <div className="pointer-events-none absolute bottom-6 right-8 h-28 w-28 rounded-full border border-[#cbba9a]/15" />

        <div className="section-shell relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b48344]">Welcome to Gaea Gold</p>
            <h1 className="mt-4 max-w-2xl font-heading text-4xl leading-tight md:text-5xl lg:text-6xl">
              You Are One Step Closer To Purity
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#F8EED9]/80 md:text-base">
              Native sourcing, traditional processing, and rigorous lab checks across every batch.
              Discover oils, spices, grains, and curated combo packs designed for modern households
              and global buyers.
            </p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {categories.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  className="rounded-full border border-[#e6d5bf]/30 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-[#F8EED9] transition hover:bg-white/10 hover:border-[#b48344]"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/products" className="rounded-full bg-[#b48344] px-7 py-3.5 text-sm font-bold text-[#1A1A1A] transition hover:bg-[#c99a5c] shadow-[0_0_20px_rgba(180,131,68,0.3)]">
                Shop All Products
              </Link>
              <Link href="/contact" className="rounded-full border border-[#e6d5bf]/50 px-7 py-3.5 text-sm font-semibold text-[#e6d5bf] transition hover:bg-white/10">
                Request Bulk Quote
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block relative pl-10">
             <div className="relative aspect-[4/5] w-full max-w-md ml-auto overflow-hidden rounded-[2rem] border border-[#b48344]/30 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <Image
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
                  alt="Premium Olive/Mustard Oil bottle with natural herbs"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a1f]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/10 p-5 backdrop-blur-md border border-white/20">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#e6d5bf]">Featured Origin</p>
                    <p className="mt-1 font-heading text-lg text-white">Cold Pressed Heritage Oils</p>
                </div>
             </div>
             
             {/* Decorative element behind the image */}
             <div className="absolute -z-10 top-10 right-20 w-full max-w-md aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-[#2e4531] to-[#b48344]/40 rotate-6 opacity-40 blur-xl"></div>
          </div>
        </div>
      </section>;

const newStr = <section className="relative flex min-h-[70vh] md:min-h-[85vh] items-center overflow-hidden bg-black/60">
        <Image
          src=" + https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2670 + "
          alt="Lush expansive agricultural farm"
          fill
          priority
          className="absolute inset-0 object-cover object-center -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 sm:bg-gradient-to-r sm:from-black/70 sm:via-black/40 sm:to-black/10 -z-10" />

        <div className="section-shell relative z-10 w-full text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b48344] drop-shadow-md">
            Welcome to Gaea Gold
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-tight sm:text-5xl md:max-w-3xl md:text-6xl lg:text-7xl text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
            You Are One Step <br className="hidden sm:block" /> Closer To Purity
          </h1>
          <p className="mx-auto sm:mx-0 mt-5 text-[15px] leading-relaxed text-[#F8EED9] drop-shadow-md max-w-xl md:text-lg">
            Native sourcing, traditional processing, and rigorous lab checks across every batch.
            Discover oils, spices, grains, and curated combo packs designed for modern households
            and global buyers.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 sm:justify-start">
            <Link href="/products" className="rounded-full bg-[#b48344] px-8 py-4 text-sm font-bold tracking-wide text-[#1A1A1A] transition hover:bg-[#c99a5c] shadow-lg">
              Shop All Products
            </Link>
            <Link href="/contact" className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 text-sm font-bold tracking-wide text-white transition hover:bg-white/20 shadow-lg">
              Request Bulk Quote
            </Link>
          </div>
        </div>
      </section>;

code = code.replace(oldStr, newStr);
fs.writeFileSync('components/Home.tsx', code);
