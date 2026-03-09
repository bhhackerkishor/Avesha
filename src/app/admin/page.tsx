/* eslint-disable */
"use client";

import { useEffect, useState } from "react";
import { 
  Users, 
  Cpu, 
  Gamepad2, 
  IndianRupee, 
  Search, 
  Download, 
  ExternalLink,
  Filter,
  Trash2
} from "lucide-react";
import * as XLSX from "xlsx";
import toast from "react-hot-toast";

export default function AdminDashboard() {
  const [data, setData] = useState<any[]>([]);
  const [stats, setStats] = useState<any>({ total: 0, technical: 0, nonTechnical: 0, TotalAmount: 0 });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterEvent, setFilterEvent] = useState("");
  const ADMIN_PASSWORD = "avesha_admin_2026";
  const [authorized, setAuthorized] = useState(false);
const [password, setPassword] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch("/api/admin/registrations");
      const result = await res.json();
      if (res.ok) {
        setData(result.registrations);
        setStats(result.stats);
      }
    } catch (error) {
      toast.error("Failed to fetch registrations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Registrations");
    XLSX.writeFile(workbook, "AVESHA26_Registrations.xlsx");
  };

  const filteredData = data.filter((reg) => {
    const matchesSearch = reg.name.toLowerCase().includes(search.toLowerCase()) || 
                         reg.participantId.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filterEvent === "" || 
                         reg.technicalEvents.includes(filterEvent) || 
                         reg.nonTechnicalEvents.includes(filterEvent);
    return matchesSearch && matchesFilter;
  });

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950">
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl space-y-4 w-[350px]">
          <h2 className="text-xl font-bold text-center">Admin Access</h2>
  
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950"
          />
  
          <button
            onClick={() => {
              if (password === ADMIN_PASSWORD) {
                setAuthorized(true);
              } else {
                toast.error("Incorrect password");
              }
            }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold"
          >
            Login
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-500">Manage all registrations for AVESHA'26</p>
        </div>
        <button 
          onClick={exportToExcel}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 transition-all"
        >
          <Download size={20} /> Export Excel
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Registrations", value: stats.total, icon: <Users />, color: "bg-blue-500" },
          { label: "Technical Participants", value: stats.technical, icon: <Cpu />, color: "bg-indigo-500" },
          { label: "Non-Technical", value: stats.nonTechnical, icon: <Gamepad2 />, color: "bg-purple-500" },
          { label: "Total Revenue", value: `₹${stats.revenue}`, icon: <IndianRupee />, color: "bg-emerald-500" },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl text-white ${stat.color}`}>
                {stat.icon}
              </div>
            </div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-2xl font-black mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-zinc-800 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name or ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 outline-none"
            />
          </div>
          <select 
            className="px-4 py-2 rounded-lg border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 outline-none"
            value={filterEvent}
            onChange={(e) => setFilterEvent(e.target.value)}
          >
            <option value="">All Events</option>
            <optgroup label="Technical">
              <option>Rapid Relay (Quiz)</option>
              <option>Pitch Scope (Project)</option>
              <option>Watt Talks (Paper)</option>
              <option>Circuit Doctor (Debugging)</option>
            </optgroup>
            <optgroup label="Non-Technical">
              <option>Connectricals</option>
              <option>Chess</option>
              <option>Survival Instinct (Free Fire)</option>
              <option>Mischief Marathon</option>
            </optgroup>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-zinc-950 text-xs font-bold uppercase text-gray-500">
              <tr>
                <th className="px-6 py-4">Participant ID</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">College</th>
                <th className="px-6 py-4">Technical Events</th>
                <th className="px-6 py-4">Non-Tech Events</th>
                <th className="px-6 py-4">Payment</th>
                <th className="px-6 py-4">Proof</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-zinc-800">
              {filteredData.map((reg) => (
                <tr key={reg._id} className="hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-blue-600">{reg.participantId}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium">{reg.name}</p>
                      <p className="text-xs text-gray-500">{reg.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{reg.college}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {reg.technicalEvents.map((e: string, i: number) => (
                        <span key={i} className="text-[10px] bg-blue-50 dark:bg-blue-900/20 text-blue-600 px-1.5 py-0.5 rounded">
                          {e.split(" (")[0]}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {reg.nonTechnicalEvents.map((e: string, i: number) => (
                        <span key={i} className="text-[10px] bg-purple-50 dark:bg-purple-900/20 text-purple-600 px-1.5 py-0.5 rounded">
                          {e}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <p className="font-bold">₹{reg.amountPaid}</p>
                    <p className="text-[10px] text-gray-400">{reg.referenceNumber}</p>
                  </td>
                  <td className="px-6 py-4">
                    <a 
                      href={reg.paymentProof} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1 text-xs"
                    >
                      <ExternalLink size={14} /> View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
