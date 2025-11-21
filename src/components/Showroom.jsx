import { motion } from "framer-motion";

const colors = [
  { name: "Smoke Black", desc: "Dramatic gradient with pale undercoat.", img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1400&q=80&auto=format&fit=crop", swatch: "bg-neutral-800" },
  { name: "Shaded Silver", desc: "Iridescent silver with dark tips.", img: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1400&q=80&auto=format&fit=crop", swatch: "bg-slate-200" },
  { name: "White", desc: "Pure and luminous snow coat.", img: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=1400&q=80&auto=format&fit=crop", swatch: "bg-white" },
  { name: "Red", desc: "Warm, rich, and regal ginger.", img: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=1400&q=80&auto=format&fit=crop", swatch: "bg-rose-400" },
]

export default function Showroom(){
  return (
    <section id="colors" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-5xl text-white font-semibold tracking-tight">Color & Pattern Showroom</h2>
        <p className="mt-3 text-white/70">Explore rare European lines presented like a high-end color catalog.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {colors.map((c, i) => (
            <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.05]"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent"/>
                <div className="absolute bottom-4 left-4">
                  <div className={`w-6 h-6 rounded-full ring-2 ring-white/40 ${c.swatch}`}/>
                </div>
              </div>
              <div className="p-5 text-white">
                <div className="text-lg font-semibold">{c.name}</div>
                <div className="text-white/70 text-sm mt-1">{c.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
