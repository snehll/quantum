// src/app/about/page.tsx
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  Globe,
  Truck,
  Users,
  Clock,
  ShieldCheck,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      {/* HERO – STRONG & OBVIOUS EMERALD linear */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-400 via-emerald-300 to-emerald-500" />
        <div className="absolute inset-0 bg-linear-to-tl from-emerald-400/20 via-transparent to-emerald-600/20" />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-2xl">
            About QUANTUM EUROPE
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-lg">
            QUANTUM EUROPE is a Polish company engaged in international B2B trade in industrial spare parts, components and related technical products.
          </p>
          <br/>
          <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-lg">
            Our office in Poland coordinates sourcing, purchasing, documentation and supply for business customers. We handle each inquiry individually and select products to match the customer's technical and commercial requirements.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT – CLEAN WHITE + EMERALD ACCENTS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-emerald-700 mb-8">
                Reliable Support for Industrial Customers
              </h2>
              <div className="prose prose-lg text-slate-700 space-y-6">
                <p>
                  From a single replacement part to a large order of components, we manage the process from the initial inquiry through to agreed delivery.
                </p>
                <p className="text-slate-900 font-medium text-lg">
                  Products are purchased and supplied under separate contracts and invoices. Specifications, quantities, prices and delivery terms are agreed individually for every order.
                </p>
              </div>

              {/* Stats – Emerald numbers */}
              <div className="grid grid-cols-2 gap-8 mt-12">
                {[
                  { label: "International B2B Trade", value: "Globe" },
                  { label: "Industrial Spare Parts", value: "Gears" },
                  { label: "Individual Product Sourcing", value: "Search" },
                  { label: "Clear Commercial Documentation", value: "FileText" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-slate-600 mt-2 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Feature Cards – Emerald linears */}
            <div className="grid grid-cols-2 gap-6">
              {/* Removed old cards, keeping grid layout spacing */}
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROMISE – Emerald section */}
      <section className="py-20 bg-linear-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-emerald-700 mb-10">
                Our Approach
              </h2>
              <div className="grid md:grid-cols-2 gap-10">
                {[
                  {
                    icon: CheckCircle2,
                    title: "Clear Commercial Terms",
                    desc: "Price, specification and delivery terms are agreed before an order is confirmed.",
                  },
                  {
                    icon: Clock,
                    title: "Product-Based Sourcing",
                    desc: "We source products by the manufacturer, part number, drawing or technical specification the customer provides.",
                  },
                  {
                    icon: Truck,
                    title: "Order Coordination",
                    desc: "Customers are kept informed on the status of their inquiry and order.",
                  },
                  {
                    icon: Users,
                    title: "Single Point of Contact",
                    desc: "Each inquiry is handled by a designated company representative.",
                  },
                ].map((promise) => (
                  <div
                    key={promise.title}
                    className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                    <promise.icon className="w-16 h-16 text-emerald-600 mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2 text-center">
                      {promise.title}
                    </h3>
                    <p className="text-slate-600 text-center">{promise.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
