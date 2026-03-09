/* eslint-disable */
"use client";

import { CreditCard, Upload } from "lucide-react";

interface PaymentSectionProps {
  formData: any;
  updateFormData: (data: any) => void;
}

export default function PaymentSection({ formData, updateFormData }: PaymentSectionProps) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/30">
        <h3 className="font-bold mb-4 flex items-center gap-2">
           <CreditCard className="text-blue-600" /> Bank & UPI Details
        </h3>
        <div className="grid gap-4 text-sm">
          <div>
            <p className="text-blue-600 font-bold uppercase text-[10px]">Bank Account</p>
            <p className="font-medium">CANARA BANK</p>
            <p className="font-medium">A/C: XXXXXXXXXXXX</p>
            <p className="font-medium">IFSC: XXXXXXXXXXX</p>
          </div>
          <div className="pt-2 border-t border-blue-200 dark:border-blue-800">
            <p className="text-blue-600 font-bold uppercase text-[10px]">UPI IDs</p>
            <p className="font-medium">xxxxxxx@oksbi</p>
            <p className="font-medium">yyyyyyy@oksbi</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Payment Method</label>
            <select 
              value={formData.paymentMethod}
              onChange={(e) => updateFormData({ paymentMethod: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 outline-none"
            >
              <option>UPI</option>
              <option>Bank Transfer</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Reference Number</label>
            <input 
              required
              type="text" 
              value={formData.referenceNumber}
              onChange={(e) => updateFormData({ referenceNumber: e.target.value })}
              placeholder="UTR / Transaction ID"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 outline-none"
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Payer Name</label>
          <input 
            required
            type="text" 
            value={formData.payerName}
            onChange={(e) => updateFormData({ payerName: e.target.value })}
            placeholder="Name as in bank record"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Payment Proof (Screenshot)</label>
          <div className="relative group">
            <input 
              required
              type="file" 
              accept="image/*,application/pdf"
              onChange={(e) => updateFormData({ paymentProof: e.target.files?.[0] || null })}
              className="hidden"
              id="file-upload"
            />
            <label 
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full px-6 py-10 border-2 border-dashed border-gray-300 dark:border-zinc-800 rounded-2xl cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-all"
            >
              <Upload className="w-8 h-8 text-gray-400 mb-2" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {formData.paymentProof ? formData.paymentProof.name : "Click to upload image or PDF"}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
