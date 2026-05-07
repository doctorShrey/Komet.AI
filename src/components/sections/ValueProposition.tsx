/**
 * @file ValueProposition.tsx
 * @brief Page section component rendering the ValueProposition area.
 * @author Shreyansh Dhingra
 * @role Full-Stack Engineering, Architecture, UI/UX, Security
 * @created 2026-04-30
 * 
 * @copyright Copyright (c) 2026 Komet.AI. All Rights Reserved.
 * This software is the confidential and proprietary information of Komet.AI.
 * Unauthorized copying, modification, or distribution of this file, via any medium, 
 * is strictly prohibited.
 */
import { motion } from "framer-motion";
import { Blocks, Smile, Users } from "lucide-react";

const features = [
  {
    icon: Blocks,
    title: "Learn by Building",
    description: "No boring lectures here! Kids learn by getting their hands dirty, building real, fun mini-projects from day one.",
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    icon: Smile,
    title: "AI Made Friendly",
    description: "No scary code required. We use visual, playful tools like Google's Teachable Machine to make AI concepts click instantly.",
    color: "bg-accent/20 text-yellow-600 border-accent/30",
  },
  {
    icon: Users,
    title: "Mentors Who Get Kids",
    description: "Small batches led by patient, kid-first instructors who know how to keep young minds engaged, curious, and smiling.",
    color: "bg-secondary/10 text-secondary border-secondary/20",
  },
];

/**
 * Section highlighting the key benefits and value of the program.
 * 
 * @returns {JSX.Element} The rendered ValueProposition component.
 */
export function ValueProposition() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground"
          >
            Why Kids Love Komet.AI
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 text-xl max-w-2xl mx-auto font-medium"
          >
            We've turned complex technology into a playground of imagination.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white border-2 border-gray-100 rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all group"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border-2 ${feature.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm`}>
                <feature.icon size={40} />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}