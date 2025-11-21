import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Testimonials(){
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`${API}/api/testimonials`).then(r=>r.json()).then(setItems).catch(()=>{
      setItems([
        { author: "Sofia R.", handle: "@sof_and_max", content: "Our shaded silver boy is massive and so gentle. The FaceTime call sealed our trust—everything was exactly as promised.", rating: 5 },
        { author: "Michael T.", handle: "@mt_angeleno", content: "Hand delivery to LA was seamless. Genetics and health transparency are top-tier. Couldn’t be happier!", rating: 5 },
        { author: "Hannah G.", handle: "@hannahgrooms", content: "Truly Apple-level experience. From first text to delivery, everything felt premium and caring.", rating: 5 },
      ])
    })
  }, [])

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-5xl text-white font-semibold tracking-tight">Testimonials & Social</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              className="rounded-3xl p-6 bg-white/5 border border-white/10 text-white">
              <div className="text-lg font-medium">{t.author}</div>
              <div className="text-white/70 text-sm">{t.handle}</div>
              <div className="mt-4 text-white/80">{t.content}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <a href="#" className="inline-flex px-5 py-3 rounded-full bg-gradient-to-r from-rose-300 to-amber-200 text-black font-medium shadow">Follow us on Instagram</a>
        </div>
      </div>
    </section>
  )
}
