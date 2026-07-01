import CardNav from "./components/CardNav";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Portfolio from "./components/Portfolio";
import WhyUs from "./components/WhyUs";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { CARD_NAV_ITEMS } from "./lib/content";

function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <CardNav
        items={CARD_NAV_ITEMS}
        baseColor="#111118"
        menuColor="#F8F8FF"
        buttonBgColor="#4BA3E3"
        buttonTextColor="#0A0A0F"
        ease="power3.out"
      />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <HowItWorks />
        <Portfolio />
        <WhyUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
