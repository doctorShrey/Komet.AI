/**
 * @file ApplicationPortal.tsx
 * @brief Page section component rendering the ApplicationPortal area.
 * @author Shreyansh Dhingra
 * @role Full-Stack Engineering, Architecture, UI/UX, Security
 * @created 2026-05-02
 * 
 * @copyright Copyright (c) 2026 Komet.AI. All Rights Reserved.
 * This software is the confidential and proprietary information of Komet.AI.
 * Unauthorized copying, modification, or distribution of this file, via any medium, 
 * is strictly prohibited.
 */
import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, ChevronRight, ChevronLeft, Send } from "lucide-react";

/**
 * Interface representing the application form data structure.
 */
interface ApplicationFormData {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childGrade: string;
  interests: string;
}

/**
 * Utility to sanitize user input to prevent basic injection attacks.
 * @param {string} input - The raw user input string.
 * @returns {string} The sanitized string.
 */
const sanitizeInput = (input: string): string => {
  return input.replace(/[<>]/g, "").trim();
};

/**
 * ApplicationPortal component manages a multi-step form for cohort applications.
 * Integrates with FormSubmit for backend processing and uses framer-motion for transitions.
 * 
 * @returns {React.JSX.Element} The rendered Application Portal section.
 */
export function ApplicationPortal(): React.JSX.Element {
  const { toast } = useToast();
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  const [formData, setFormData] = useState<ApplicationFormData>({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childGrade: "",
    interests: ""
  });

  /**
   * Handles input changes and sanitizes data before updating state.
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const sanitizedValue = sanitizeInput(e.target.value);
    setFormData((prev) => ({ ...prev, [e.target.name]: sanitizedValue }));
  };

  /**
   * Validates the current step's required fields.
   */
  const validateStep = (): boolean => {
    if (step === 1) {
      // Basic email regex for sanity check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return !!formData.parentName && emailRegex.test(formData.email);
    }
    if (step === 2) {
      return !!formData.childName && !!formData.childGrade;
    }
    return true;
  };

  /**
   * Proceeds to the next form step if validation passes.
   */
  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    } else {
      toast({
        title: "Invalid Information",
        description: "Please fill out all required fields correctly before continuing.",
        variant: "destructive",
      });
    }
  };

  /**
   * Returns to the previous form step.
   */
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  /**
   * Submits the application payload to the FormSubmit API.
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateStep()) {
      toast({
        title: "Missing Information",
        description: "Please complete the form before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/supportkometai@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: "New Application for Komet.AI",
          "Parent Name": formData.parentName,
          "Email Address": formData.email,
          "Phone Number": formData.phone || "Not provided",
          "Child's Name": formData.childName,
          "Child's Grade": formData.childGrade,
          "Child's Interests": formData.interests || "Not provided",
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      toast({
        title: "Application Submitted Successfully! 🎉",
        description: "We've sent a confirmation to your email. We'll be in touch soon.",
        className: "bg-teal-500 text-white border-none",
      });

      // Clear state upon success
      setStep(1);
      setFormData({
        parentName: "",
        email: "",
        phone: "",
        childName: "",
        childGrade: "",
        interests: ""
      });

    } catch (error) {
      console.error("Submission Error:", error);
      toast({
        title: "Submission Failed",
        description: "There was an issue submitting your application. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-sans font-black mb-6 text-slate-900 tracking-tight"
          >
            Apply for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-500">Next Cohort</span>
          </motion.h2>
          <p className="text-slate-600 text-lg md:text-xl font-medium">
            Seats are strictly limited to ensure an elite 10:1 student-to-mentor ratio.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50"
        >
          {/* Progress Indicator */}
          <div className="flex justify-between items-center mb-10 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0" />
            <div
              className="absolute top-1/2 left-0 h-1 bg-teal-500 -translate-y-1/2 z-0 transition-all duration-500 ease-in-out"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            />

            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-colors duration-300 ${step >= num ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20' : 'bg-slate-200 text-slate-400'
                  }`}
              >
                {step > num ? <CheckCircle2 size={20} /> : num}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Parent Details</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="parentName" className="text-slate-700 font-bold">Full Name *</Label>
                      <Input
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Jane Doe"
                        className="h-12 bg-white rounded-xl mt-1 border-slate-200 focus-visible:ring-teal-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-700 font-bold">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="h-12 bg-white rounded-xl mt-1 border-slate-200 focus-visible:ring-teal-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-slate-700 font-bold">Phone Number (Optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="h-12 bg-white rounded-xl mt-1 border-slate-200 focus-visible:ring-teal-500"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Child Details</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="childName" className="text-slate-700 font-bold">Child's First Name *</Label>
                      <Input
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        placeholder="e.g. Leo"
                        className="h-12 bg-white rounded-xl mt-1 border-slate-200 focus-visible:ring-teal-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="childGrade" className="text-slate-700 font-bold">Current Grade Level *</Label>
                      <select
                        id="childGrade"
                        name="childGrade"
                        value={formData.childGrade}
                        onChange={handleChange}
                        className="flex h-12 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                      >
                        <option value="" disabled>Select Grade</option>
                        <option value="1">1st Grade</option>
                        <option value="2">2nd Grade</option>
                        <option value="3">3rd Grade</option>
                        <option value="4">4th Grade</option>
                        <option value="5">5th Grade</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Final Details</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="interests" className="text-slate-700 font-bold">What excites your child about technology? (Optional)</Label>
                      <Textarea
                        id="interests"
                        name="interests"
                        value={formData.interests}
                        onChange={handleChange}
                        placeholder="e.g. They love playing Roblox and always ask how video games are made..."
                        className="min-h-[120px] bg-white rounded-xl mt-1 border-slate-200 focus-visible:ring-teal-500 resize-none"
                      />
                    </div>

                    <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl">
                      <p className="text-sm text-orange-800 font-medium leading-relaxed">
                        By submitting this application, you are securing a spot in our review queue. We will reach out within 24 hours to confirm enrollment details and answer any questions.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between items-center mt-10 pt-6 border-t border-slate-200">
              <Button
                type="button"
                variant="ghost"
                onClick={prevStep}
                disabled={step === 1 || isSubmitting}
                className={`font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-xl px-6 ${step === 1 ? 'invisible' : ''}`}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              {step < 3 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-8 h-12 font-bold shadow-md transition-all"
                >
                  Continue
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-teal-500 hover:bg-teal-600 text-white rounded-xl px-8 h-12 font-bold shadow-md shadow-teal-500/20 transition-all"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Submit Application
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}