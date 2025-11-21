import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,182,193,0.12),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(255,215,170,0.14),transparent_40%)]"/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"/>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}}
              className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
              Giant European Maine Coons, Raised Like Family.
            </motion.h1>
            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.15,duration:0.7}}
              className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              35+ lb bloodlines, rare colors, and health-tested European pedigrees. Based in Miami & Los Angeles. Hand delivery across USA & Canada.
            </motion.p>
            <motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:0.25,duration:0.6}} className="mt-8 flex flex-wrap gap-3">
              <a href="#kittens" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-rose-300 to-amber-200 text-black font-medium shadow-lg hover:from-rose-200 hover:to-amber-100 transition">
                View Available Kittens
              </a>
              <a href="tel:8189344657" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">
                Text / FaceTime Consultation • 818-934-4657
              </a>
            </motion.div>
            <p className="mt-4 text-white/70 text-sm">No deposit required. Hand delivery across USA & Canada.</p>
          </div>

          <div className="relative">
            <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.9}}
              className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img src="https://images.unsplash.com/photo-1712629440965-5b142bc2b47a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHaWFudCUyME1haW5lJTIwQ29vbnxlbnwwfDB8fHwxNzYzNzY5NDc5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Giant Maine Coon" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"/>
            </motion.div>
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}} className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/15 text-white p-4 rounded-2xl max-w-[85%]">
              <p className="text-sm">Smoke Black • Giant European Bloodline • DNA & 3-Gen HCM Tested</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
