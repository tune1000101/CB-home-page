import CardNav from "./components/CardNav";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Demos from "./components/Demos";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";
import CTA from "./components/CTA";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import { CARD_NAV_ITEMS } from "./lib/content";

function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <CardNav
        items={CARD_NAV_ITEMS}
        baseColor="#ffffff"
        menuColor="#0b1220"
        buttonBgColor="#2563eb"
        buttonTextColor="#ffffff"
        ease="power3.out"
      />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <HowItWorks />
        <Demos />
        <Portfolio />
        <Testimonials />
        <WhyUs />
        <CTA />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}

export default App;
