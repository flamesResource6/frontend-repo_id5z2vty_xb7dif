import { motion } from "framer-motion";

export default function About(){
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.7}}
            className="relative aspect-video rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=1400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Gentle Giant"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent"/>
          </motion.div>
        </div>
        <div>
          <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl md:text-5xl text-white font-semibold tracking-tight">Ethical. Health-Focused. Family Raised.</motion.h2>
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.1}} className="mt-6 text-white/80">
            Decades in animal care and rescue work drive everything we do. With vet clinic experience and a karma-first ethos, we focus on size, health, and temperament—never shortcuts. Every pairing is DNA screened and HCM-tested across three generations.
          </motion.p>
          <motion.ul initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.2}} className="mt-8 grid gap-3 text-white/80">
            <li>• Giant European bloodlines (35+ lbs)</li>
            <li>• Rare colors: smoke black, shaded silver, white, red, more</li>
            <li>• FaceTime meet & greet, no deposit required</li>
            <li>• Based in Miami & Los Angeles, hand delivery USA & Canada</li>
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
