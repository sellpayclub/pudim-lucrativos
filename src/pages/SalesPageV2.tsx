import { HeroV2, PricingV2 } from '../components/SectionsV2';
import { About, VideoCarousel, Benefits, Simulation, Bonuses, Testimonials, Footer } from '../components/Sections';

export default function SalesPageV2() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen">
      <HeroV2 />
      <About />
      <VideoCarousel />
      <Benefits />
      <Simulation />
      <Bonuses />
      <Testimonials />
      <PricingV2 />
      <Footer />
    </div>
  );
}
