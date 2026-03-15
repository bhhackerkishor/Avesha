// components/Committee.tsx
import { Users } from 'lucide-react';

const committeeMembers = [
  { role: 'President', name: 'Hema S' },
  { role: 'Vice President', name: 'Vengatesh PTV' },
  { role: 'General Secretary', name: 'Malini R' },
  { role: 'Joint Secretary', name: 'Dhanuja AS' },
  { role: 'Joint Secretary', name: 'Sri Varsha D' },
  { role: 'Treasurer', name: 'Anitha A' },
  { role: 'Treasurer', name: 'Muthumani Kandan RP' },
];

export default function Committee() {
  return (
    <section id="committee" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-sky-600">
            <Users className="w-8 h-8" />
            <span className="uppercase tracking-widest text-sm font-bold">Organizing Committee</span>
          </div>
          <h2 className="text-5xl font-bold tracking-tighter mt-3">Meet the Team</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member, index) => (
            <div key={index} className="glass rounded-3xl p-8 text-center hover:shadow-xl transition-all">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-sky-400 to-blue-500 rounded-3xl flex items-center justify-center text-white text-4xl font-bold mb-6 shadow-inner">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="font-semibold text-xl text-slate-800">{member.name}</div>
              <div className="text-sky-600 mt-1 font-medium tracking-wider text-sm">{member.role.toUpperCase()}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-slate-100 px-8 py-4 rounded-3xl text-slate-700 font-medium">
            Head of Department: <span className="font-semibold text-slate-900">Dr. R. Kanimozhi</span>
          </div>
        </div>
      </div>
    </section>
  );
}