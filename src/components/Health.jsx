import { motion } from "framer-motion";
import { HeartPulse, Dna, ShieldCheck } from "lucide-react";

export default function Health(){
  return (
    <section id="health" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl text-white font-semibold tracking-tight">Health & Ethics</h2>
            <p className="mt-4 text-white/80">We emphasize health and temperament with transparent genetics. Every pairing is DNA-screened and HCM-tested across three generations.</p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl p-4 bg-white/5 border border-white/10 text-white">
                <Dna className="w-6 h-6 text-rose-200"/>
                <div className="mt-2 font-medium">DNA & HCM</div>
                <div className="text-sm text-white/70">3-generation genetic testing</div>
              </div>
              <div className="rounded-2xl p-4 bg-white/5 border border-white/10 text-white">
                <HeartPulse className="w-6 h-6 text-rose-200"/>
                <div className="mt-2 font-medium">Ethical</div>
                <div className="text-sm text-white/70">Size and temperament-first</div>
              </div>
              <div className="rounded-2xl p-4 bg-white/5 border border-white/10 text-white">
                <ShieldCheck className="w-6 h-6 text-rose-200"/>
                <div className="mt-2 font-medium">Guarantee</div>
                <div className="text-sm text-white/70">Healthy & Loved Guaranteed</div>
              </div>
            </div>
          </div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-white/10">
              <img src="https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent"/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
