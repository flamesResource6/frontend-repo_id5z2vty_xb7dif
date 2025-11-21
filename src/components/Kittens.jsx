import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Tag, Venus, Mars } from "lucide-react";

const API = import.meta.env.VITE_BACKEND_URL || "";

const filters = [
  { key: "color", label: "Color" },
  { key: "location", label: "Location" },
  { key: "sex", label: "Sex" },
  { key: "age", label: "Age" },
];

export default function Kittens(){
  const [kittens, setKittens] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/testimonials`) // warmup
    fetch(`${API}/api/kittens`).then(r => r.json()).then(setKittens).catch(() => {
      // graceful fallback examples if backend not reachable
      setKittens([
        { id: "1", name: "Atlas", color: "Smoke Black", sex: "Male", location: "Miami, FL", giant: true, images:["https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=1200&q=80&auto=format&fit=crop"] },
        { id: "2", name: "Lyra", color: "Shaded Silver", sex: "Female", location: "Los Angeles, CA", giant: true, images:["https://images.unsplash.com/photo-1518281262744-2674b90b6e79?w=1200&q=80&auto=format&fit=crop"] },
        { id: "3", name: "Orion", color: "White", sex: "Male", location: "Miami, FL", giant: true, images:["https://images.unsplash.com/photo-1583089892943-e02e5b017b6d?w=1200&q=80&auto=format&fit=crop"] },
      ]);
    })
  }, [])

  return (
    <section id="kittens" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl text-white font-semibold tracking-tight">Featured Giants / Available Kittens</h2>
            <p className="mt-3 text-white/70">Rare colors. Giant frames. Health-tested European lines.</p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            {filters.map(f => (
              <button key={f.key} className="text-sm px-3 py-1.5 rounded-full border border-white/15 text-white/80 hover:bg-white/10">{f.label}</button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kittens.map((k, idx) => (
            <motion.div key={k.id || idx} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay: idx*0.05}}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={k.images?.[0]} alt={k.name} className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.04]"/>
                <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 text-white text-xs">
                  <Tag className="w-3.5 h-3.5 text-amber-200"/> Giant Size
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-xl font-semibold">{k.name}</h3>
                  <div className="text-white/80 flex items-center gap-2">
                    {k.sex?.toLowerCase() === 'female' ? <Venus className="w-4 h-4"/> : <Mars className="w-4 h-4"/>}
                    <span className="text-xs">{k.sex}</span>
                  </div>
                </div>
                <p className="text-white/70 text-sm mt-1">{k.color}</p>
                <div className="mt-3 inline-flex items-center gap-2 text-white/80 text-sm">
                  <MapPin className="w-4 h-4"/> {k.location}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <a href="#contact" className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-rose-300 to-amber-200 text-black shadow">Request Info</a>
                  <button className="text-white/70 text-sm hover:text-white">View Details →</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
