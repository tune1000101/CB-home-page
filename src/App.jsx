import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Portfolio from "./components/Portfolio";
import WhyUs from "./components/WhyUs";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Nav />
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
