"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Plane,
  Truck,
  Ship,
  Globe,
  Package,
  Warehouse,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Plane,
    title: "Spare Parts and Components",
    desc: "Sourcing and supply of parts for industrial machinery, heavy equipment and engines.",
  },
  {
    icon: Truck,
    title: "Product Identification",
    desc: "We select products by manufacturer, model, part number, drawing or technical specification.",
  },
  {
    icon: Ship,
    title: "OEM and Aftermarket Parts",
    desc: "Original components or suitable aftermarket alternatives, subject to availability and customer approval.",
  },
  {
    icon: Globe,
    title: "International Procurement",
    desc: "Purchasing and supply of products from manufacturers and specialized suppliers worldwide.",
  },
  {
    icon: Package,
    title: "Commercial Documentation",
    desc: "Quotations, contracts, invoices, packing lists and other documents, prepared for every order.",
  },
  {
    icon: Warehouse,
    title: "Delivery Coordination",
    desc: "We coordinate delivery to the destination agreed with the customer.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Industrial Spare Parts Supply
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We help business customers source and supply industrial spare parts, components and technical products. Each inquiry is reviewed individually by specification, quantity, availability and delivery requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={i}>
              <Card className="h-full border border-slate-200 bg-white hover:shadow-xl hover:border-emerald-200 transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-lg">{service.desc}</p>
                  <ArrowRight className="w-5 h-5 text-emerald-600 mt-4 opacity-0 group-hover:opacity-100 transition" />
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
