// components/Events.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { technicalEvents, nonTechnicalEvents, EventType } from '@/lib/events';
import { X, Trophy, Users } from 'lucide-react';

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  const openModal = (event: EventType) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  const renderEventCard = (event: EventType) => (
    <motion.div
      key={event.id}
      whileHover={{ y: -10 }}
      onClick={() => openModal(event)}
      className="glass rounded-3xl p-8 cursor-pointer card-hover border border-white/60 group"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="uppercase tracking-[2px] text-xs font-semibold text-sky-500 mb-2">
            {event.category === 'technical' ? 'TECHNICAL' : 'NON-TECHNICAL'}
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">{event.title}</h3>
        </div>
        <div className="bg-sky-100 text-sky-600 w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0">
          <Users className="w-5 h-5" />
        </div>
      </div>

      <div className="flex items-center gap-3 text-sm text-slate-600 mb-6">
        <div className="bg-white px-4 py-1 rounded-2xl shadow-sm">{event.teamSize}</div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          {event.prize.first ? (
            <div className="flex items-center gap-2 text-emerald-600">
              <Trophy className="w-4 h-4" />
              <span className="font-semibold">{event.prize.first}</span>
            </div>
          ) : (
            <div className="text-emerald-600 font-medium text-sm">Exciting Prizes</div>
          )}
        </div>
        <span className="text-xs text-slate-400 group-hover:text-sky-500 transition-colors">View Details →</span>
      </div>
    </motion.div>
  );

  return (
    <section id="events" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sky-600 font-semibold tracking-widest text-sm mb-3">COMPETE • INNOVATE • WIN</div>
          <h2 className="text-5xl font-bold tracking-tighter">Events</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-md mx-auto">Choose your battlefield and register today</p>
        </div>

        {/* Technical Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 flex items-center gap-3">
            <span className="text-sky-500">⚡</span> TECHNICAL EVENTS
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalEvents.map(renderEventCard)}
          </div>
        </div>

        {/* Non-Technical Events */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 flex items-center gap-3">
            <span className="text-amber-500">🎲</span> NON-TECHNICAL EVENTS
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonTechnicalEvents.map(renderEventCard)}
          </div>
        </div>
      </div>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/70" onClick={closeModal}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: 'spring', bounce: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-8 md:p-12 relative">
                <button 
                  onClick={closeModal}
                  className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <X size={28} />
                </button>

                <div className="uppercase text-xs tracking-widest text-sky-500 mb-2">{selectedEvent.category.toUpperCase()}</div>
                <h3 className="text-4xl font-bold tracking-tight mb-8">{selectedEvent.title}</h3>

                <div className="space-y-10">
                  {/* Team Size */}
                  <div>
                    <div className="flex items-center gap-3 text-lg font-medium">
                      <Users className="text-sky-500" />
                      <span>Team Size</span>
                    </div>
                    <p className="mt-2 text-2xl font-semibold text-slate-700">{selectedEvent.teamSize}</p>
                  </div>

                  {/* Description */}
                  {selectedEvent.description && (
                    <div>
                      <div className="font-medium mb-3">Description</div>
                      <p className="text-slate-600 leading-relaxed">{selectedEvent.description}</p>
                    </div>
                  )}

                  {/* Rules */}
                  <div>
                    <div className="font-medium mb-4">Rules &amp; Guidelines</div>
                    <ul className="space-y-3 text-slate-600">
                      {selectedEvent.rules.map((rule, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-sky-400 mt-1">•</span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Prize */}
                  <div className="bg-emerald-50 rounded-2xl p-8">
                    <div className="font-medium text-emerald-700 mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5" /> PRIZE MONEY
                    </div>
                    {selectedEvent.prize.first && (
                      <div className="flex justify-between text-3xl font-semibold text-emerald-800">
                        <span>1st Prize</span>
                        <span>{selectedEvent.prize.first}</span>
                      </div>
                    )}
                    {selectedEvent.prize.second && (
                      <div className="flex justify-between text-3xl font-semibold text-emerald-800 mt-3">
                        <span>2nd Prize</span>
                        <span>{selectedEvent.prize.second}</span>
                      </div>
                    )}
                    {selectedEvent.prize.note && (
                      <p className="mt-6 text-emerald-700 text-lg font-medium">{selectedEvent.prize.note}</p>
                    )}
                  </div>
                </div>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfmCh1kOcyGGXlAFLkbWprKtXW7Pu97F7pyi3VTdlaoDIbA5w/viewform"
                  target="_blank"
                  className="mt-12 block w-full py-5 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold text-xl rounded-2xl hover:brightness-110 transition-all active:scale-[0.985] shadow-xl shadow-sky-300 text-center"
                >
                  Register for this Event →
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}