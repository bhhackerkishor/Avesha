"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Copy, MessageCircle, Home, Download } from "lucide-react";
import toast from "react-hot-toast";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const participantId = searchParams.get("id");

  const copyToClipboard = () => {
    if (participantId) {
      navigator.clipboard.writeText(participantId);
      toast.success("ID copied to clipboard!");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-md w-full bg-white dark:bg-zinc-900 rounded-[2.5rem] p-10 shadow-2xl shadow-black/5 text-center border border-gray-100 dark:border-zinc-800"
      >
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <CheckCircle2 size={40} />
        </div>
        
        <h1 className="text-3xl font-black mb-2">Registration Successful!</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          You're all set for AVESHA'26. We've received your application.
        </p>

        <div className="bg-gray-50 dark:bg-zinc-950 rounded-2xl p-6 mb-8 border border-gray-100 dark:border-zinc-800">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Your Participant ID</p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl font-black text-blue-600 tracking-wider">
              {participantId || "AVE26-XXXX"}
            </span>
            <button 
              onClick={copyToClipboard}
              className="p-2 hover:bg-gray-200 dark:hover:bg-zinc-800 rounded-lg transition-colors text-gray-400"
            >
              <Copy size={18} />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-red-500 font-medium">
            ⚠️ Please save your Participant ID for future reference and on-spot verification.
          </p>
          
          <div className="flex flex-col gap-3">
            <Link 
              href="https://wa.me/your-group-link" 
              className="flex items-center justify-center gap-2 w-full py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-600/20"
            >
              <MessageCircle size={20} /> Join WhatsApp Group
            </Link>
            
            <Link 
              href="/" 
              className="flex items-center justify-center gap-2 w-full py-4 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-white rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all"
            >
              <Home size={20} /> Back to Home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
