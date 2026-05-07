/**
 * @file FAQ.tsx
 * @brief Page section component rendering the FAQ area.
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What ages is this for?",
    answer: "Our curriculum is specifically designed for kids in Grades 1 through 5. The activities are tailored so younger kids (Grades 1-2) focus more on play and discovery, while older kids (Grades 3-5) build more complex projects.",
  },
  {
    question: "Does my child need any prior experience or coding skills?",
    answer: "Absolutely not! Zero prerequisites required. We start from the very beginning with visual, intuitive tools that don't require typing lines of scary code.",
  },
  {
    question: "What tools will my child use?",
    answer: "We focus on safe, browser-based tools created for education. The primary tools are Google's Teachable Machine and Quick, Draw! — there is nothing to download or install.",
  },
  {
    question: "How much screen time is involved?",
    answer: "Sessions are highly interactive and typically last 60 minutes. We emphasize active creating, speaking, and physical movement (like gestures for the camera) rather than passive staring at a screen.",
  },
  {
    question: "How are sessions structured? Live or recorded?",
    answer: "All cohort sessions are live, interactive, and led by our expert mentors in small groups. We want kids asking questions and sharing their creations in real-time.",
  },
  {
    question: "What's the refund policy?",
    answer: "We want both you and your child to love it. We offer a full refund if you decide it's not a fit within the first two weeks of the cohort.",
  },
  {
    question: "Will my child get a certificate?",
    answer: "Yes! Every child who completes the program receives a beautiful, printed Komet.AI 'Young Builder' certificate to proudly display at home.",
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-sans font-black mb-6 text-slate-900 tracking-tight"
          >
            Questions Parents Ask
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg font-medium"
          >
            We've got answers. If you don't see yours, just reach out to support@kometai.org!
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-slate-50 border border-slate-200 rounded-2xl px-6 data-[state=open]:bg-white data-[state=open]:border-teal-500/30 data-[state=open]:shadow-lg data-[state=open]:shadow-teal-500/5 transition-all duration-300 overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-6 text-left text-lg md:text-xl font-bold text-slate-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base md:text-lg font-medium pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}