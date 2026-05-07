/**
 * @file Portfolios.tsx
 * @brief Page section component rendering the Portfolios area.
 * @author Shreyansh Dhingra
 * @role Full-Stack Engineering, Architecture, UI/UX, Security
 * @created 2026-05-01
 * 
 * @copyright Copyright (c) 2026 Komet.AI. All Rights Reserved.
 * This software is the confidential and proprietary information of Komet.AI.
 * Unauthorized copying, modification, or distribution of this file, via any medium, 
 * is strictly prohibited.
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

const showcaseProjects = [
  {
    title: "Magic Doodle Guesser",
    student: "Dev, Grade 4",
    type: "Machine Learning Model",
    description: "Dev trained a vision model to recognize 15 different types of dinosaurs from quick sketches.",
    image: "../assets/kids-portfolio-1.png",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZpYmFyeThscWhrOWhtcWhsMjI2OGxicWg3NmNybzIwdWZpdDF3aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSjRrfIPjeiVyM/giphy.gif",
    color: "bg-teal-500"
  },
  {
    title: "Happy Robot Friend",
    student: "Jessica, Grade 2",
    type: "Sentiment Analysis",
    description: "Jessica built a virtual pet that changes its expression based on the emotion it detects in the user's voice.",
    image: "../assets/kids-portfolio-3.png",
    gif: "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
    color: "bg-orange-500"
  },
  {
    title: "Eco-Sorter Bot",
    student: "Maya, Grade 5",
    type: "Image Classification",
    description: "Maya created a tool that uses the webcam to tell you whether an item goes in the recycling, compost, or trash.",
    image: "../assets/kids-portfolio-2.png",
    gif: "https://media.giphy.com/media/l3vR16pONsV8cKCEo/giphy.gif",
    color: "bg-blue-500"
  }
];

const polaroids = [
  { img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400&h=400", rotate: "-rotate-6", caption: "Training Day 1" },
  { img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400&h=400", rotate: "rotate-3", caption: "Debugging the Model" },
  { img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=400&h=400", rotate: "-rotate-2", caption: "Graduation Showcase" },
  { img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400&h=400", rotate: "rotate-6", caption: "Team Brainstorming" },
];

export function Portfolios() {
  const [activeTab, setActiveTab] = useState<"projects" | "bts">("projects");

  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-sans font-black mb-6 text-white tracking-tight"
          >
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400">Young Builders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-8"
          >
            Explore the incredible, functional AI models kids have built during their 20-day sprint.
          </motion.p>

          {/* Tabs */}
          <div className="inline-flex bg-slate-800 p-1.5 rounded-full border border-slate-700 shadow-inner">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'projects' ? 'bg-teal-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              Interactive Showcase
            </button>
            <button
              onClick={() => setActiveTab("bts")}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'bts' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              Behind the Scenes
            </button>
          </div>
        </div>

        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {showcaseProjects.map((project, idx) => (
                  <div key={idx} className="group relative overflow-hidden transition-all duration-300">

                    {/* Content area with Hover GIF swap - Border and rounding moved strictly to image container [cite: 1413] */}
                    <div className="relative aspect-video bg-slate-100 rounded-3xl overflow-hidden cursor-pointer border border-slate-700 group-hover:border-teal-500/50 transition-colors duration-300">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500" />
                      <img src={project.gif} alt="AI Model working" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-2 bg-white/90 text-slate-900 px-4 py-2 rounded-full font-bold text-sm transform scale-90 group-hover:scale-100 transition-transform duration-300 delay-100">
                          <Play size={16} className="text-teal-600" />
                          View Model in Action
                        </div>
                      </div>
                    </div>

                    {/* Text description section now sits "naked" on slate-900 for a cleaner look [cite: 1414] */}
                    <div className="py-6 px-2">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`w-2.5 h-2.5 rounded-full ${project.color} shadow-[0_0_8px_currentColor]`} />
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{project.type}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-teal-400 text-sm font-medium mb-4">By {project.student}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "bts" && (
              <motion.div
                key="bts"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-wrap justify-center gap-10 py-10"
              >
                {polaroids.map((p, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: "0deg", zIndex: 30 }}
                    className={`bg-white p-3 pb-12 rounded-sm shadow-2xl shadow-black/40 border border-slate-200 w-64 ${p.rotate} relative transition-all duration-300`}
                  >
                    <div className="aspect-square overflow-hidden mb-4 bg-slate-100">
                      <img src={p.img} alt="Kids learning AI" className="w-full h-full object-cover filter contrast-125" />
                    </div>
                    <div className="absolute bottom-4 left-0 w-full text-center">
                      <span className="font-display text-slate-800 text-lg font-bold tracking-tight">{p.caption}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}