/**
 * @file Home.tsx
 * @brief Main view component for the Home page.
 * @author Shreyansh Dhingra
 * @role Full-Stack Engineering, Architecture, UI/UX, Security
 * @created 2026-05-01
 * 
 * @copyright Copyright (c) 2026 Komet.AI. All Rights Reserved.
 * This software is the confidential and proprietary information of Komet.AI.
 * Unauthorized copying, modification, or distribution of this file, via any medium, 
 * is strictly prohibited.
 */
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Webinar } from "@/components/sections/Webinar";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { CourseLevels } from "@/components/sections/CourseLevels";
import { Curriculum } from "@/components/sections/Curriculum";
import { Portfolios } from "@/components/sections/Portfolios";
import { Pricing } from "@/components/sections/Pricing";
import { ApplicationPortal } from "@/components/sections/ApplicationPortal";
import { FAQ } from "@/components/sections/FAQ";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Team } from "@/components/sections/Team";

/**
 * The Home component orchestrates the landing page by rendering the Navbar,
 * all content sections in order, and the Footer.
 * 
 * @returns {JSX.Element} The assembled Home page.
 */
export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-background text-foreground font-sans overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LogoMarquee />
        <Webinar />
        <ValueProposition />
        <CourseLevels />
        <Curriculum />
        <Team />
        <Portfolios />
        <Pricing />
        <ApplicationPortal />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
