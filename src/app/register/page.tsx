"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  User, 
  School, 
  Zap, 
  CreditCard, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  MessageCircle
} from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import StepForm from "@/components/StepForm";
import EventSelector from "@/components/EventSelector";
import PaymentSection from "@/components/PaymentSection";

const steps = [
  { id: 1, title: "Personal", icon: <User size={20} /> },
  { id: 2, title: "College", icon: <School size={20} /> },
  { id: 3, title: "Events", icon: <Zap size={20} /> },
  { id: 4, title: "Payment", icon: <CreditCard size={20} /> },
  { id: 5, title: "Finalize", icon: <CheckCircle2 size={20} /> },
];

const technicalEventsList = ["Rapid Relay (Quiz)", "Pitch Scope (Project)", "Watt Talks (Paper)", "Circuit Doctor (Debugging)"];
const nonTechnicalEventsList = ["Connectricals", "Chess", "Survival Instinct (Free Fire)","Mischief Marathon"];

export default function RegisterPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    year: "I",
    department: "",
    college: "",
    technicalEvents: [] as string[],
    nonTechnicalEvents: [] as string[],
    paymentMethod: "UPI",
    referenceNumber: "",
    payerName: "",
    amountPaid: "250",
    foodPreference: "Veg",
    whatsappJoin: "Yes",
    paymentProof: null as File | null,
  });

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const MAX_EVENTS = 3;

  const handleTechEventToggle = (event: string) => {
    const isSelected = formData.technicalEvents.includes(event);
  
    const totalSelected =
      formData.technicalEvents.length + formData.nonTechnicalEvents.length;
  
    if (!isSelected && totalSelected >= MAX_EVENTS) {
      toast.error("You can select a maximum of 3 events only");
      return;
    }
  
    const updated = isSelected
      ? formData.technicalEvents.filter((e) => e !== event)
      : [...formData.technicalEvents, event];
  
    updateFormData({ technicalEvents: updated });
  };
  
  const handleNonTechEventToggle = (event: string) => {
    const isSelected = formData.nonTechnicalEvents.includes(event);
  
    const totalSelected =
      formData.technicalEvents.length + formData.nonTechnicalEvents.length;
  
    if (!isSelected && totalSelected >= MAX_EVENTS) {
      toast.error("You can select a maximum of 3 events only");
      return;
    }
  
    const updated = isSelected
      ? formData.nonTechnicalEvents.filter((e) => e !== event)
      : [...formData.nonTechnicalEvents, event];
  
    updateFormData({ nonTechnicalEvents: updated });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep !== 5) return nextStep();

    setIsSubmitting(true);
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "technicalEvents" || key === "nonTechnicalEvents") {
        form.append(key, JSON.stringify(value));
      } else if (key === "paymentProof" && value) {
        form.append("file", value as File);
      } else if (value !== null && value !== undefined) {
        form.append(key, value.toString());
      }
    });

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: form,
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Registration Successful!");
        router.push(`/success?id=${data.participantId}`);
      } else {
        toast.error(data.error || "Submission failed");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsSubmitting(false);
    }

  };
  

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-zinc-950">
      <StepForm currentStep={currentStep} steps={steps}>
        <form onSubmit={handleSubmit} className="space-y-6">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold mb-6">Personal Details</h2>
              <div className="space-y-4">
                <div className="relative">
                  <label className="text-sm font-medium mb-1.5 block">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => updateFormData({ name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="relative">
                  <label className="text-sm font-medium mb-1.5 block">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => updateFormData({ email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Mobile Number</label>
                    <input 
                      required
                      type="tel" 
                      value={formData.mobile}
                      onChange={(e) => updateFormData({ mobile: e.target.value })}
                      placeholder="9876543210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Year of Study</label>
                    <select 
                      value={formData.year}
                      onChange={(e) => updateFormData({ year: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    >
                      <option>I</option>
                      <option>II</option>
                      <option>III</option>
                      <option>IV</option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold mb-6">College Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Department</label>
                  <input 
                    required
                    type="text" 
                    value={formData.department}
                    onChange={(e) => updateFormData({ department: e.target.value })}
                    placeholder="Electrical and Electronics Engineering"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">College Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.college}
                    onChange={(e) => updateFormData({ college: e.target.value })}
                    placeholder="Anna University"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold mb-2">Event Selection</h2>
              <p className="text-gray-500 text-sm mb-6">Select the events you'd like to participate in</p>
              
              <div className="space-y-8">
                <EventSelector 
                  label="Technical Events"
                  items={technicalEventsList}
                  selectedItems={formData.technicalEvents}
                  onToggle={handleTechEventToggle}
                  accentColor="blue"
                />
                <EventSelector 
                  label="Non-Technical Events"
                  items={nonTechnicalEventsList}
                  selectedItems={formData.nonTechnicalEvents}
                  onToggle={handleNonTechEventToggle}
                  accentColor="indigo"
                />
              </div>
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
              <PaymentSection formData={formData} updateFormData={updateFormData} />
            </motion.div>
          )}

          {currentStep === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold mb-6">Final Preferences</h2>
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-3 block">Food Preference</label>
                  <div className="flex gap-4">
                    {["Veg", "Non-Veg"].map((pref) => (
                      <div 
                        key={pref}
                        onClick={() => updateFormData({ foodPreference: pref })}
                        className={`flex-1 p-4 rounded-xl border-2 transition-all cursor-pointer text-center font-bold ${
                          formData.foodPreference === pref 
                            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600" 
                            : "border-gray-100 dark:border-zinc-800"
                        }`}
                      >
                        {pref}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-100 dark:border-green-900/20">
                  <div className="flex items-center gap-4 mb-3">
                    <MessageCircle className="text-green-600" />
                    <h3 className="font-bold">Join WhatsApp Group?</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Receive important updates and announcements directly on your mobile.
                  </p>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((choice) => (
                      <div 
                        key={choice}
                        onClick={() => updateFormData({ whatsappJoin: choice })}
                        className={`flex-1 p-3 rounded-xl border-2 transition-all cursor-pointer text-center font-bold ${
                          formData.whatsappJoin === choice 
                            ? "border-green-500 bg-white dark:bg-zinc-900 text-green-600" 
                            : "border-transparent text-gray-400"
                        }`}
                      >
                        {choice}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-8 border-t border-gray-100 dark:border-zinc-800">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all font-sans"
              >
                <ChevronLeft size={20} /> Back
              </button>
            )}
            <div className="ml-auto">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:bg-blue-700 transition-all disabled:opacity-50 active:scale-95 font-sans"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : currentStep === 5 ? (
                  "Complete Registration"
                ) : (
                  <>Next <ChevronRight size={20} /></>
                )}
              </button>
            </div>
          </div>
        </form>
      </StepForm>
    </div>
  );
}
