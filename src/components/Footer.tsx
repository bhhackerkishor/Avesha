// components/Footer.tsx
import Link from 'next/link';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-y-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 bg-white rounded-2xl flex items-center justify-center text-sky-950 font-black text-3xl">A</div>
            <div className="text-3xl font-bold tracking-tighter">AVESHA 2026</div>
          </div>
          <p className="text-slate-400 max-w-xs">
            Department of Electrical and Electronics Engineering<br />
            University College of Engineering (BIT Campus)<br />
            Anna University, Tiruchirappalli
          </p>
        </div>

        <div>
          <div className="text-slate-400 text-sm tracking-widest mb-4">QUICK LINKS</div>
          <div className="space-y-3 text-lg">
            <a href="#events" className="block hover:text-sky-400 transition-colors">Events</a>
            <a href="#committee" className="block hover:text-sky-400 transition-colors">Committee</a>
            <a href="#about" className="block hover:text-sky-400 transition-colors">About</a>
          </div>
        </div>

        <div>
          <div className="text-slate-400 text-sm tracking-widest mb-6">FOLLOW US</div>
          <div className="flex gap-6">
            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-sky-400 transition-colors">
                <Icon size={28} />
              </a>
            ))}
          </div>
          <div className="mt-12 text-xs text-slate-500">
            © 2026 AVESHA. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}