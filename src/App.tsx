import { Hero, About, VideoCarousel, Benefits, Simulation, Bonuses, Testimonials, Pricing, Footer } from './components/Sections';

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen">
      <Hero />
      <About />
      <VideoCarousel />
      <Benefits />
      <Simulation />
      <Bonuses />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
