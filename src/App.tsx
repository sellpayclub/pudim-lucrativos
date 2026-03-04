import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero, About, VideoCarousel, Benefits, Simulation, Bonuses, Testimonials, Pricing, Footer } from './components/Sections';
import DeliveryPage from './pages/DeliveryPage';
import SalesPageV2 from './pages/SalesPageV2';

function SalesPage() {
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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SalesPage />} />
        <Route path="/pv2" element={<SalesPageV2 />} />
        <Route path="/entregavel" element={<DeliveryPage />} />
      </Routes>
    </Router>
  );
}
