/* eslint-disable @next/next/no-img-element */
// src/app/products/page.tsx
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

const categories = [
  {
    title: "Heavy Equipment and Engine Parts",
    brands: "Replacement parts and components for industrial engines and heavy equipment.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdW4mnetDjKxhO8Uozkr4M_OyHbaAYAdgjg&s",
  },
  {
    title: "Industrial Machinery Parts",
    brands: "Parts and components for manufacturing, processing and other industrial machinery.",
    img: "https://static.vecteezy.com/system/resources/thumbnails/070/444/867/small/large-industrial-steam-turbine-generator-in-a-manufacturing-plant-photo.jpg",
  },
  {
    title: "Mechanical Parts and Assemblies",
    brands: "Mechanical components, replacement parts and assemblies for industrial applications.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4JenUtTt9wT9U4lg1B-vVdbCZ1OM8MXxmkg&s",
  },
  {
    title: "Electrical and Control Components",
    brands: "Electrical components, control parts and related products for industrial systems.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT5P6OMkfjGtv6WIuUZGz_6JR-IagOit8cvw&s",
  },
  {
    title: "Technical Materials and Consumables",
    brands: "Technical materials, consumables and supporting products for industrial businesses.",
    img: "https://www.ec-ma.com/wp-content/uploads/2018/11/pumps_market.jpg",
  },
  {
    title: "Custom Product Requests",
    brands: "Sourcing by a specific manufacturer, part number, equipment model, drawing or technical description.",
    img: "https://images.squarespace-cdn.com/content/v1/5d27703ef624330001984515/ea5834d3-2825-4eb2-9af9-0fd304e34586/pexels-%D0%B0%D0%BB%D0%B5%D0%BA%D0%BA%D0%B5-%D0%B1%D0%BB%D0%B0%D0%B6%D0%B8%D0%BD-8140124.jpg?format=2500w",
  },
];
export const metadata = { title: "Products & Spare Parts" };

export default function ProductsPage() {
  return (
    <>
      {/* HERO – STRONG & OBVIOUS EMERALD linear */}
      <section className="relative py-32 overflow-hidden">
        {/* Powerful emerald linear background */}
        <div className="absolute inset-0 bg-linear-to-br from-emerald-400 via-emerald-300 to-emerald-500" />
        {/* Subtle diagonal shine */}
        <div className="absolute inset-0 bg-linear-to-tr from-emerald-400/20 via-transparent to-emerald-600/20" />
        {/* Dark overlay for depth & readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Industrial Parts and Components
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto drop-shadow-lg">
            We supply industrial spare parts, components and related technical products based on individual customer inquiries. Availability, specifications, origin and delivery terms are confirmed separately for each order.
          </p>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((cat, i) => (
              <AnimatedSection key={i}>
                <div className="group relative overflow-hidden rounded-3xl h-96 cursor-pointer shadow-xl">
                  {/* Image or STRONG emerald fallback */}
                  {cat.img ? (
                    cat.img.startsWith("http") ? (
                      <img
                        src={cat.img}
                        alt={cat.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <Image
                        src={cat.img}
                        alt={cat.title}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )
                  ) : (
                    <div className="h-full bg-linear-to-br from-emerald-700 via-emerald-600 to-emerald-800" />
                  )}

                  {/* STRONG & VISIBLE linear overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-emerald-900/90 via-emerald-900/40 to-transparent" />

                  {/* Text — crisp white */}
                  <div className="absolute bottom-0 left-0 right-0 p-10 text-white z-10">
                    <h3 className="text-4xl font-bold mb-3 drop-shadow-2xl">
                      {cat.title}
                    </h3>
                    <p className="text-xl opacity-95 drop-shadow-lg">
                      {cat.brands}
                    </p>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -rotate-45 translate-x-96 group-hover:translate-x-0" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-slate-500 max-w-4xl mx-auto">
            All third-party trademarks and brand names belong to their respective owners and are used solely for product identification. QUANTUM EUROPE is not an authorized distributor of any manufacturer unless expressly confirmed in writing.
          </p>
        </div>
      </section>
    </>
  );
}
