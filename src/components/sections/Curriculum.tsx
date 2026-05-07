/**
 * @file Curriculum.tsx
 * @brief Page section component rendering the Curriculum area.
 * @author Shreyansh Dhingra
 * @role Full-Stack Engineering, Architecture, UI/UX, Security
 * @created 2026-05-04
 * 
 * @copyright Copyright (c) 2026 Komet.AI. All Rights Reserved.
 * This software is the confidential and proprietary information of Komet.AI.
 * Unauthorized copying, modification, or distribution of this file, via any medium, 
 * is strictly prohibited.
 */
import { motion } from "framer-motion";
import { Sparkles, PenTool, Lightbulb, Rocket } from "lucide-react";

const curriculum = [
  {
    week: "Day 1-5",
    title: "Demystifying the Machine",
    focus: "Proving AI isn't magic—it's just pattern recognition.",
    tools: "Google Quick, Draw! & Teachable Machine",
    icon: <Sparkles className="w-8 h-8 text-teal-500" />,
    color: "bg-teal-50 border-teal-100",
    shadow: "hover:shadow-teal-500/20"
  },
  {
    week: "Day 6-10",
    title: "The Creative Director",
    focus: "Mastering prompt engineering and precise communication.",
    tools: "Canva AI & AI Storytelling",
    icon: <PenTool className="w-8 h-8 text-orange-500" />,
    color: "bg-orange-50 border-orange-100",
    shadow: "hover:shadow-orange-500/20"
  },
  {
    week: "Day 11-15",
    title: "The Life Optimizer",
    focus: "Using AI as a personalized 24/7 tutor and understanding bias.",
    tools: "Code.org AI for Oceans",
    icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-50 border-blue-100",
    shadow: "hover:shadow-blue-500/20"
  },
  {
    week: "Day 16-20",
    title: "The Innovation Capstone",
    focus: "Integrating machine learning into interactive projects. Live Showcase!",
    tools: "Scratch + ML Extensions",
    icon: <Rocket className="w-8 h-8 text-purple-500" />,
    color: "bg-purple-50 border-purple-100",
    shadow: "hover:shadow-purple-500/20"
  }
];

export function Curriculum() {
  return (
    <section id="curriculum" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-bold text-sm tracking-wide uppercase mb-6"
          >
            20-Day Co-Pilot Sprint
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-sans font-black mb-6 text-slate-900 tracking-tight"
          >
            The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-500">AI Curriculum</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            4 weeks. 20 days. 1 hour a day. Watch your child transform from a passive consumer to an elite AI creator.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {curriculum.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              className={`relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:-translate-y-2 transition-all duration-300 group ${item.shadow}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                {item.week}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                {item.title}
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Focus</div>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    {item.focus}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Tools</div>
                  <p className="text-slate-800 font-bold text-sm">
                    {item.tools}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}