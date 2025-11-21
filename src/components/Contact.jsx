import { useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Contact(){
  const [status, setStatus] = useState(null);

  function onSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    fetch(`${API}/api/inquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }).then(r=>r.json()).then(()=>{
      setStatus("Thanks! We'll be in touch shortly.");
      e.currentTarget.reset();
    }).catch(()=> setStatus("Sent! We'll text you shortly."));
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl text-white font-semibold tracking-tight">Join the Giant Maine Coon Waitlist</h2>
              <p className="mt-2 text-white/70">Prefer text or FaceTime? Call 818-934-4657. No deposit required.</p>
            </div>
            <a href="#kittens" className="inline-flex px-5 py-3 rounded-full bg-gradient-to-r from-rose-300 to-amber-200 text-black font-medium shadow">View Available Kittens</a>
          </div>

          <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-4">
            <input name="name" required placeholder="Full Name" className="px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-white/40"/>
            <input type="email" name="email" required placeholder="Email" className="px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-white/40"/>
            <input name="phone" placeholder="Phone (text/FaceTime)" className="px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-white/40"/>
            <input name="preferred_color" placeholder="Preferred Color" className="px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-white/40"/>
            <input name="location" placeholder="Location (City, State)" className="px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-white/40"/>
            <select name="contact_method" className="px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-white/40">
              <option value="text">Best way: Text</option>
              <option value="facetime">Best way: FaceTime</option>
              <option value="email">Best way: Email</option>
            </select>
            <textarea name="message" placeholder="Tell us your ideal kitten (color, temperament, timing)" className="md:col-span-2 px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-white/40 min-h-[120px]"/>
            <div className="md:col-span-2 flex items-center gap-4">
              <button className="inline-flex px-6 py-3 rounded-full bg-gradient-to-r from-rose-300 to-amber-200 text-black font-medium shadow">Join Waitlist</button>
              {status && <div className="text-white/80">{status}</div>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
