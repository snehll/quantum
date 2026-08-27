import { Card } from "@/components/ui/card";
import { Truck, Wrench, Globe, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "International B2B Supply",
    desc: "We work with industrial customers and suppliers across international markets.",
  },
  {
    icon: Truck,
    title: "Product Sourcing",
    desc: "We source spare parts and components to the required specification, manufacturer or part number.",
  },
  {
    icon: Wrench,
    title: "OEM & Aftermarket Options",
    desc: "We offer original parts or compatible alternatives, depending on the product and its availability.",
  },
  {
    icon: ShieldCheck,
    title: "Clear Documentation",
    desc: "Every order comes with the commercial and shipping documents it needs.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <Card
              key={i}
              className="p-8 text-center hover:shadow-xl transition">
              <f.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
