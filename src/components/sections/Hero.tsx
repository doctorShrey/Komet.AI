/**
 * @file Hero.tsx
 * @brief Page section component rendering the Hero area.
 * @author Shreyansh Dhingra
 * @role Full-Stack Engineering, Architecture, UI/UX, Security
 * @created 2026-05-01
 * 
 * @copyright Copyright (c) 2026 Komet.AI. All Rights Reserved.
 * This software is the confidential and proprietary information of Komet.AI.
 * Unauthorized copying, modification, or distribution of this file, via any medium, 
 * is strictly prohibited.
 */
import { ReactElement } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Rocket } from "lucide-react";

/**
 * Animated background elements for the Hero section.
 * 
 * @returns {ReactElement} Rendered background component.
 */
function HeroBackground(): ReactElement {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-10 w-48 h-48 bg-teal-500/10 rounded-full blur-[60px]"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]"
      />
      {/* Floating Stars */}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} className="absolute hidden md:block top-32 left-8 lg:left-20 text-teal-400">
        <Sparkles size={32} />
      </motion.div>
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute hidden md:block bottom-40 right-8 lg:right-20 text-orange-400">
        <Sparkles size={24} />
      </motion.div>
    </div>
  );
}

/**
 * Mockup image with animated UI overlays for the Hero section.
 * 
 * @returns {ReactElement} Rendered mockup component.
 */
function HeroImageMockup(): ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.2 }}
      className="relative lg:h-[600px] flex items-center justify-center w-full"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-orange-500/20 rounded-3xl blur-3xl opacity-50" />
      <div className="relative z-10 w-full max-w-[500px] aspect-square md:aspect-auto md:h-[500px] bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden group">
        <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src="/assets/kids-hero.png"
          alt="Kid using AI Dashboard"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Mockup UI Overlays */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute top-6 left-6 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-sm border border-slate-100 z-20 flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
            <Sparkles size={16} />
          </div>
          <div className="text-xs font-bold text-slate-700">Model Trained!</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-sm border border-slate-100 z-20"
        >
          <div className="text-xs text-slate-500 mb-1">Accuracy</div>
          <div className="text-lg font-bold text-slate-900">98.5%</div>
          <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "98.5%" }}
              transition={{ delay: 1.5, duration: 1 }}
              className="h-full bg-orange-500"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/**
 * Hero section displaying the main value proposition, call-to-action buttons,
 * and an animated background.
 * 
 * @returns {ReactElement} The rendered Hero component.
 */
export function Hero(): ReactElement {
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-50">
      <HeroBackground />

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-bold text-sm sm:text-base mb-8 shadow-sm"
            >
              <Rocket size={18} className="text-orange-500" />
              <span>First Cohort — Now Enrolling</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
            >
              Where Young Minds <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-500">Build the Future with AI.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 font-medium leading-relaxed"
            >
              Move your child from the "search era" into the "co-pilot era." An elite, 20-day live sprint for grades 1–5 to build, train, and direct artificial intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full sm:w-auto"
              >
                <Button
                  onClick={() => scrollToSection("pricing")}
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all group"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <Button
                onClick={() => scrollToSection("webinar")}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-lg font-bold border-2 border-teal-500 text-teal-600 hover:bg-teal-50 hover:text-teal-700 rounded-full transition-all"
              >
                Watch Free Masterclass
              </Button>
            </motion.div>
          </div>

          <HeroImageMockup />
        </div>
      </div>
    </section>
  );
}