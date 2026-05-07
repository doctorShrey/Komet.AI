/**
 * @file Pricing.tsx
 * @brief Page section component rendering the Pricing area.
 * @author Shreyansh Dhingra
 * @role Full-Stack Engineering, Architecture, UI/UX, Security
 * @created 2026-05-04
 * 
 * @copyright Copyright (c) 2026 Komet.AI. All Rights Reserved.
 * This software is the confidential and proprietary information of Komet.AI.
 * Unauthorized copying, modification, or distribution of this file, via any medium, 
 * is strictly prohibited.
 */
import { ReactElement } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * List of benefits provided in the elite tier.
 * Abstracted to a constant for easy modification and rendering.
 */
const eliteBenefits: readonly string[] = [
  "Strict Micro-Cohort Size (Max 10 Students)",
  "20 Days of Live Expert Mentorship",
  "Capstone Project Portfolio",
  "Pathway to High School NeurIPS Prep",
  "Access to Premium AI Tool Accounts",
  "Lifetime Access to Session Recordings"
];

/**
 * Pricing section component that displays the cost and benefits
 * of the AI bootcamp program, alongside a call-to-action.
 * 
 * @returns {ReactElement} The rendered Pricing section.
 */
export function Pricing(): ReactElement {
  /**
   * Smoothly scrolls the viewport to the application form section.
   */
  const scrollToApply = (): void => {
    const element = document.getElementById("apply");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-teal-100/50 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-100/50 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-sans font-black mb-6 text-slate-900 tracking-tight"
          >
            An Investment in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-500">Their Future</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            Secure your child's spot in the most elite AI bootcamp for elementary students.
          </motion.p>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="w-full max-w-xl"
          >
            {/* Premium Card */}
            <div className="relative group rounded-[2.5rem] bg-white p-1">
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-orange-400 to-teal-400 rounded-[2.5rem] opacity-30 group-hover:opacity-100 blur transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-b from-orange-400 to-teal-400 rounded-[2.5rem]" />

              <div className="relative bg-white rounded-[2.4rem] p-8 md:p-12 h-full flex flex-col">

                {/* Banner */}
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                  <div className="bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg border border-slate-700 flex items-center gap-2">
                    <Sparkles size={14} className="text-orange-400" />
                    First Cohort Filling Fast
                  </div>
                </div>

                <div className="text-center mb-8 pt-4">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">The 20-Day Co-Pilot Sprint</h3>
                  <p className="text-slate-500 font-medium">Complete access to the live mentorship program.</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-2 mb-10">
                  <div className="flex items-center gap-3 text-slate-400">
                    <span className="text-sm font-bold uppercase tracking-wider">Full Retail Mentorship Rate:</span>
                    <span className="text-2xl line-through font-bold decoration-slate-300 decoration-2">$500</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter">$349</span>
                    <span className="text-lg text-slate-500 font-bold uppercase tracking-widest">/ student</span>
                  </div>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-4 mb-10">
                    {eliteBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="bg-teal-50 p-1 rounded-full text-teal-600 shrink-0 mt-0.5">
                          <Check className="w-4 h-4" strokeWidth={3} />
                        </div>
                        <span className="text-slate-700 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={scrollToApply}
                  className="w-full h-16 text-lg font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
                >
                  Secure Their Spot Now
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="ml-2 inline-block"
                  >
                    →
                  </motion.div>
                </Button>

                <p className="text-center text-xs text-slate-400 font-medium mt-6">
                  14-day money-back guarantee. No questions asked.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}