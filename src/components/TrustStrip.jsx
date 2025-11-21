import { motion } from "framer-motion";
import { ShieldCheck, Stethoscope, Package, Video, AlertTriangle } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "3-Generation HCM / DNA Tested" },
  { icon: Stethoscope, text: "Ethical, Size-Focused Breeding" },
  { icon: Package, text: "Hand Delivery: USA & Canada" },
  { icon: Video, text: "No Deposit + FaceTime Meet & Greet" },
];

export default function TrustStrip(){
  return (
    <section className="py-10 border-t border-white/10 border-b bg-white/5">
      <div className="mx-auto max-w-7xl px-4 overflow-hidden">
        <motion.div initial={{x:0}} animate={{x:[0,-600]}} transition={{repeat:Infinity, duration:20, ease:"linear"}}
          className="flex items-center gap-6 whitespace-nowrap">
          {items.concat(items).concat(items).map((it, idx) => (
            <div key={idx} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/40 border border-white/10 text-white/90 backdrop-blur">
              <it.icon className="w-4 h-4 text-rose-200"/>
              <span className="text-sm">{it.text}</span>
            </div>
          ))}
        </motion.div>
        <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
          <AlertTriangle className="w-4 h-4"/>
          <span>Beware of scammers – our website is printed on official posters. Backup site: Mainecoonsize.com</span>
        </div>
      </div>
    </section>
  )
}
