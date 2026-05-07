/**
 * @file Footer.tsx
 * @brief Global layout component for Footer.
 * @author Shreyansh Dhingra
 * @role Full-Stack Engineering, Architecture, UI/UX, Security
 * @created 2026-05-06
 * 
 * @copyright Copyright (c) 2026 Komet.AI. All Rights Reserved.
 * This software is the confidential and proprietary information of Komet.AI.
 * Unauthorized copying, modification, or distribution of this file, via any medium, 
 * is strictly prohibited.
 */
import { Mail } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
const logoImg = "assets/logov1.png";

export function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900 text-slate-300">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoImg} alt="Komet.AI Logo" className="h-10 object-contain filter brightness-0 invert opacity-90" />
              <span className="text-2xl font-sans font-black tracking-tight text-white">Komet.AI</span>
            </div>
            <p className="text-slate-400 text-lg font-medium max-w-md mb-8 leading-relaxed">
              Igniting young minds through playful, hands-on AI education. Where every kid becomes a creator, not just a consumer.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-all">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-all">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-all">
                <FaXTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-all">
                <FaYoutube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-all">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-sans font-bold text-lg tracking-wide uppercase mb-6">Explore</h4>
            <ul className="space-y-4 font-medium text-slate-400">
              <li><button onClick={() => document.getElementById("curriculum")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">Curriculum</button></li>
              <li><button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">Kid's Projects</button></li>
              <li><button onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">Enrollment</button></li>
              <li><button onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">FAQ</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-sans font-bold text-lg tracking-wide uppercase mb-6">Get in Touch</h4>
            <ul className="space-y-4 font-medium text-slate-400">
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={18} />
                <a href="mailto:support@kometai.org">support@kometai.org</a>
              </li>
              <li className="text-slate-500">Global Remote Cohorts</li>
              <li className="text-slate-500">Live Support Available</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold text-slate-600">
          <div>&copy; {new Date().getFullYear()} Komet.AI. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}