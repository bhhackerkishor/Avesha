"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Zap, 
  Lightbulb, 
  BookOpen, 
  Cpu, 
  Puzzle, 
  Trophy, 
  Gamepad2, 
  Users,
  MessageCircle,
  ArrowRight,
  ShieldCheck
  
} from "lucide-react";

const events = {
  technical: [
    { name: "Rapid Relay", icon: <Zap className="text-yellow-500" />, desc: "Technical Quiz competition" },
    { name: "Pitch Scope", icon: <Lightbulb className="text-blue-500" />, desc: "Project Presentation" },
    { name: "Watt Talks", icon: <BookOpen className="text-green-500" />, desc: "Paper Presentation" },
    { name: "Circuit Doctor", icon: <Cpu className="text-purple-500" />, desc: "Circuit Debugging" },
  ],
  nonTechnical: [
    { name: "Connectricals", icon: <Puzzle className="text-red-500" />, desc: "Fun connection games" },
    { name: "Chess", icon: <Trophy className="text-orange-500" />, desc: "Strategic battle" },
    { name: "Survival Instinct", icon: <Gamepad2 className="text-emerald-500" />, desc: "Free Fire Tournament" },
    { name: "Mischief Marathon", icon: <ShieldCheck className="text-emerald-500" />, desc: "fun tricky game" },
  
  ]
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black overflow-x-hidden">

      {/* Hero Section */}
      <section className="py-24 px-4 flex flex-col items-center justify-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-semibold mb-6 inline-block">
            Organized by Department of EEE
          </span>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6">
            AVESHA<span className="text-blue-600">'26</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Unleash your technical prowess at the National Level Technical Symposium.
            Innovation meets excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/register"
              className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2"
            >
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="https://wa.me/your-group-link"
              className="px-8 py-4 bg-white text-black border border-gray-300 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-blue-500" />
              Join WhatsApp
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Event Lineup</h2>
            <p className="text-gray-600">
              Discover a wide range of technical and non-technical challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* Technical Events */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Cpu className="text-blue-600" /> Technical Events
              </h3>

              <div className="grid gap-6">
                {events.technical.map((event, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm flex items-start gap-4"
                  >
                    <div className="p-3 bg-blue-50 rounded-lg">
                      {event.icon}
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-1">{event.name}</h4>
                      <p className="text-gray-600 text-sm">{event.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Non-Technical Events */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Users className="text-blue-600" /> Non-Technical Events
              </h3>

              <div className="grid gap-6">
                {events.nonTechnical.map((event, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm flex items-start gap-4"
                  >
                    <div className="p-3 bg-blue-50 rounded-lg">
                      {event.icon}
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-1">{event.name}</h4>
                      <p className="text-gray-600 text-sm">{event.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">

          <div className="p-12 rounded-3xl bg-blue-600 text-white shadow-xl">

            <h2 className="text-4xl font-bold mb-6">Registration Fee</h2>

            <div className="mb-8">
              <span className="text-7xl font-black">₹300</span>
              
            </div>

            <p className="text-blue-100 mb-10 max-w-lg mx-auto leading-relaxed">
              Register once and participate in any three events from technical or
              non-technical events. Get lunch, certificates, and the chance
              to win exciting prizes!
            </p>

            <Link
              href="/register"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors"
            >
              Secure Your Spot
            </Link>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 text-center">
        <p className="text-gray-600">
          © 2026 AVESHA'26 | Dept of EEE | All Rights Reserved
        </p>
      </footer>

    </div>
  );
}