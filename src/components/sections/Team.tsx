/**
 * @file Team.tsx
 * @brief Page section component rendering the Team area.
 * @author Shreyansh Dhingra
 * @role Full-Stack Engineering, Architecture, UI/UX, Security
 * @created 2026-05-06
 * 
 * @copyright Copyright (c) 2026 Komet.AI. All Rights Reserved.
 * This software is the confidential and proprietary information of Komet.AI.
 * Unauthorized copying, modification, or distribution of this file, via any medium, 
 * is strictly prohibited.
 */
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Shrey Dhingra",
    title: "Co-Founder & Lead Educator",
    bio: "Conducts advanced research at UMass and architects hackathons at Trent University. An award-winning competitor at MIT international science fairs and Robotics Championships, passionate about translating high-level tech research into student success. Currently helping young builders master the co-pilot era.",
    image: "/assets/shrey.png",
    favoriteTool: "ChatGPT & Midjourney",
    linkedinUrl: "https://www.linkedin.com/in/shreyd007"
  },
  {
    name: "Arav Ahuja",
    title: "Co-Founder & Head of Curriculum",
    bio: "Business strategist and AI mentor translating complex tech into intuitive, real-world playgrounds to build the next generation of digital leaders. Leveraging business experience to teach practical, future-proof problem solving and equip the next generation with the AI fluency and entrepreneurial mindset required to build the future. ",
    image: "/assets/arav.png",
    favoriteTool: "Teachable Machine",
    linkedinUrl: "https://www.linkedin.com/in/arav-ahuja-37aa27213"
  },
  {
    name: "Tarun Dhingra",
    title: "Operations Lead & Student Success Director",
    bio: "Launches successful global businesses and architects government-level education initiatives. As an early pioneer of classroom hardware and a veteran mentor for elite robotics and international science fair teams, he is passionate about translating industry-leading innovations into student success.",
    image: "/assets/tarun.png",
    favoriteTool: "Cursor & GitHub Copilot",
    linkedinUrl: "https://www.linkedin.com/in/tdhingra/"
  },
  {
    name: "Yogesh Kumar",
    title: "Lead Technical Mentor",
    bio: "Vice President at Oracle and a foundational architect behind BlastAI.org. As a seasoned mentor to Y Combinator-backed founders and competitive robotics teams, he is passionate about translating enterprise-level innovation into student success. He brings his world-class industry leadership to Komet.AI to help young builders master the AI era.",
    image: "/assets/yogesh.png",
    favoriteTool: "Canva AI",
    linkedinUrl: "https://www.linkedin.com/in/yokumar/"
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-sans font-black mb-6 text-slate-900 tracking-tight"
          >
            Mentored by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-500">Industry Leaders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            Your child isn't just learning from anyone. They're guided by elite technologists and educators from top institutions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
            >
              {/* Profile Image with Ring Effect */}
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500 to-teal-500 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 scale-110" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-md z-10"
                />

                {/* Hidden Hover Elements */}
                <div className="absolute -bottom-3 -right-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <a href={member.linkedinUrl} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-teal-600 hover:text-teal-700 hover:scale-110 transition-transform">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-sm font-bold text-teal-600 mb-4">{member.title}</p>

              <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6 flex-grow">
                {member.bio}
              </p>

              <div className="w-full pt-4 border-t border-slate-100 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <Sparkles size={14} className="text-orange-500" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Fav Tool:</span>
                <span className="text-xs font-bold text-slate-800">{member.favoriteTool}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
