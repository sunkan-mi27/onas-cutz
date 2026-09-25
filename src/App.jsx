import CinematicIntro from "./components/CinematicIntro";
import BrandIntro from "./components/BrandIntro";
import WorkShowcase from "./components/WorkShowcase";
import WorkGallery from "./components/WorkGallery";
import Services from "./components/Services";
import DetailSection from "./components/DetailSection";
import Reviews from "./components/Reviews";
import Booking from "./components/Booking";
import Location from "./components/Location";
import FinalCTA from "./components/FinalCTA";

function App() {
  return (
    <main>
      <CinematicIntro />
      <BrandIntro />
      <WorkShowcase />
      <WorkGallery />
      <Services />
      <DetailSection />
      <Reviews />
      <Booking />
      <Location />
      <FinalCTA />
    </main>
  );
}

export default App;
