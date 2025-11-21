import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import About from "./components/About";
import Kittens from "./components/Kittens";
import Gallery from "./components/Gallery";
import Showroom from "./components/Showroom";
import Health from "./components/Health";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0d]">
      {/* subtle background motion */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_10%,rgba(255,182,193,0.08),transparent),radial-gradient(50%_40%_at_80%_90%,rgba(255,215,170,0.08),transparent)]"/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/0 to-black/60"/>
      </div>

      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Kittens />
        <Gallery />
        <Showroom />
        <Health />
        <Testimonials />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 text-white/70 text-sm grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-white font-semibold">Gentle Giant Maine Coon</div>
            <div className="mt-2">Based in Miami & Los Angeles. Hand delivery across USA & Canada.</div>
            <div className="mt-2">Call or text 818-934-4657</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <a href="#kittens" className="hover:text-white">Available Kittens</a>
            <a href="#contact" className="hover:text-white">Adoption Application</a>
            <a href="#contact" className="hover:text-white">Breeder Application</a>
            <a href="#colors" className="hover:text-white">Colors</a>
            <a href="#health" className="hover:text-white">Health Guarantee</a>
            <a href="#" className="hover:text-white">Blog / Learn</a>
          </div>
          <div className="text-white/60">© {new Date().getFullYear()} Gentle Giant Maine Coon. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
