import { motion } from "framer-motion";

const adults = [
  { name: "King Nero", color: "Smoke Black", img: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f2f?w=1400&q=80&auto=format&fit=crop" },
  { name: "Aurora", color: "Shaded Silver", img: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1400&q=80&auto=format&fit=crop" },
  { name: "Bjorn", color: "Red", img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1400&q=80&auto=format&fit=crop" },
  { name: "Freya", color: "White", img: "https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?w=1400&q=80&auto=format&fit=crop" },
  { name: "Titan", color: "Black Smoke", img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1400&q=80&auto=format&fit=crop" },
];

export default function Gallery(){
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-5xl text-white font-semibold tracking-tight">Gallery of Giant Adults</h2>
        <div className="mt-8 overflow-x-auto no-scrollbar">
          <div className="flex gap-6 snap-x snap-mandatory">
            {adults.map((a, i) => (
              <motion.div key={i} whileHover={{y:-4}} className="w-[80vw] sm:w-[420px] snap-start shrink-0 rounded-3xl overflow-hidden bg-white/5 border border-white/10">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={a.img} alt={a.name} className="w-full h-full object-cover transition duration-700 hover:scale-[1.05]"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent"/>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm text-white/80">{a.color}</div>
                    <div className="text-lg font-medium">{a.name}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
