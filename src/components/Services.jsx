import { ModernServicesShowcase } from "@/components/ui/animated-glassy-services";
import { SERVICES_SHOWCASE } from "../lib/content";

export default function Services() {
  return (
    <section id="services" className="border-t border-brand-border">
      <ModernServicesShowcase
        title="Everything Your Business Needs to Grow"
        subtitle="Three ways we help — pick one, or let us build the whole engine."
        services={SERVICES_SHOWCASE}
        showAnimatedBackground
      />
    </section>
  );
}
