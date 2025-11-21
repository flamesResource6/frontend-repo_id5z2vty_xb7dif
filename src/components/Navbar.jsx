import { motion } from "framer-motion";
import { Phone, Cat, Menu } from "lucide-react";
import { useState } from "react";

const phoneNumber = "818-934-4657";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between py-3 px-4">
            <a href="#" className="flex items-center gap-3">
              <Cat className="w-7 h-7 text-rose-300" />
              <span className="text-white font-semibold tracking-wide">Gentle Giant Maine Coon</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#kittens" className="text-sm text-white/80 hover:text-white transition">Available Kittens</a>
              <a href="#colors" className="text-sm text-white/80 hover:text-white transition">Colors</a>
              <a href="#health" className="text-sm text-white/80 hover:text-white transition">Health</a>
              <a href="#about" className="text-sm text-white/80 hover:text-white transition">About</a>
              <a href="#contact" className="text-sm text-white/80 hover:text-white transition">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <a href={`tel:${phoneNumber}`} className="hidden sm:flex items-center gap-2 text-sm text-white/90 hover:text-white">
                <Phone className="w-4 h-4" /> {phoneNumber}
              </a>
              <a href="#kittens" className="hidden md:inline-flex text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-rose-300/90 to-amber-200/90 text-black shadow hover:from-rose-300 hover:to-amber-200 transition">
                View Kittens
              </a>
              <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-xl bg-white/10 text-white">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="grid gap-3">
                <a onClick={() => setOpen(false)} href="#kittens" className="text-white/90">Available Kittens</a>
                <a onClick={() => setOpen(false)} href="#colors" className="text-white/90">Colors</a>
                <a onClick={() => setOpen(false)} href="#health" className="text-white/90">Health</a>
                <a onClick={() => setOpen(false)} href="#about" className="text-white/90">About</a>
                <a onClick={() => setOpen(false)} href="#contact" className="text-white/90">Contact</a>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-2 text-white/90"><Phone className="w-4 h-4"/> {phoneNumber}</a>
                <a href="#kittens" className="text-sm font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-rose-300 to-amber-200 text-black shadow">View Kittens</a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
