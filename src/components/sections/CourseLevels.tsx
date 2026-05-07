/**
 * @file CourseLevels.tsx
 * @brief Page section component rendering the CourseLevels area.
 * @author Shreyansh Dhingra
 * @role Full-Stack Engineering, Architecture, UI/UX, Security
 * @created 2026-05-02
 * 
 * @copyright Copyright (c) 2026 Komet.AI. All Rights Reserved.
 * This software is the confidential and proprietary information of Komet.AI.
 * Unauthorized copying, modification, or distribution of this file, via any medium, 
 * is strictly prohibited.
 */
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const levels = [
  {
    name: "Explorer",
    subtitle: "Grades 1–2",
    description: "Their first taste of AI through interactive play, stories, and guided discovery. Igniting curiosity.",
    outcomes: ["Understand AI basics", "Play with smart tools", "Create AI stories"],
    color: "bg-accent",
    textColor: "text-yellow-900",
    icon: "🌟"
  },
  {
    name: "Creator",
    subtitle: "Grades 3–4",
    description: "Hands-on making! Train custom image and gesture models, and see how computers learn to 'see' and 'hear'.",
    outcomes: ["Use Teachable Machine", "Draw with Quick, Draw!", "Train simple models"],
    color: "bg-secondary",
    textColor: "text-teal-900",
    icon: "🎨"
  },
  {
    name: "Innovator",
    subtitle: "Grade 5",
    description: "Combine tools to build mini AI projects they can show off to friends and family. Real building.",
    outcomes: ["Combine AI tools", "Build interactive projects", "Present their creations"],
    color: "bg-primary",
    textColor: "text-red-950",
    icon: "🚀"
  },
];

/**
 * Section displaying the different learning tracks and levels
 * available in the curriculum.
 * 
 * @returns {JSX.Element} The rendered CourseLevels component.
 */
export function CourseLevels() {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground"
          >
            Stages of Discovery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-xl max-w-2xl mx-auto font-medium"
          >
            Age-appropriate learning paths designed to grow with your child.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative z-10 rounded-[2.5rem] p-8 border-4 border-white shadow-xl flex flex-col h-full ${level.color} transform hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className="bg-white/30 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm">
                {level.icon}
              </div>
              
              <div className="mb-6">
                <span className={`text-sm font-black tracking-wider uppercase ${level.textColor} mb-2 block opacity-80`}>{level.subtitle}</span>
                <h3 className={`text-3xl font-display font-bold text-white drop-shadow-sm`}>{level.name}</h3>
              </div>
              
              <p className="text-white/90 text-lg mb-8 flex-grow font-medium leading-relaxed">
                {level.description}
              </p>
              
              <ul className="space-y-4 bg-white/20 p-6 rounded-3xl backdrop-blur-sm">
                {level.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-white shrink-0 fill-white" />
                    <span className="text-white font-bold">{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}