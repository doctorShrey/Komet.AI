/**
 * @file Navbar.tsx
 * @brief Global layout component for Navbar.
 * @author Shreyansh Dhingra
 * @role Full-Stack Engineering, Architecture, UI/UX, Security
 * @created 2026-05-02
 * 
 * @copyright Copyright (c) 2026 Komet.AI. All Rights Reserved.
 * This software is the confidential and proprietary information of Komet.AI.
 * Unauthorized copying, modification, or distribution of this file, via any medium, 
 * is strictly prohibited.
 */
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const logoImg = "/assets/logov1.png";

/**
 * Responsive navigation bar with smooth scrolling links.
 * 
 * @returns {JSX.Element} The rendered Navbar component.
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Curriculum", id: "curriculum" },
    { name: "Projects", id: "projects" },
    { name: "Pricing", id: "pricing" },
    { name: "FAQ", id: "faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${isScrolled
          ? "bg-white/90 backdrop-blur-md border-gray-200 shadow-sm py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logoImg} alt="Komet.AI Logo" className="h-10 object-contain" />
          <span className="text-2xl font-display font-bold tracking-tight text-foreground hidden sm:block">Komet.AI</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-base font-bold text-gray-600 hover:text-primary transition-colors font-sans"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => scrollToSection("apply")}
            className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg"
          >
            Enroll Now
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl p-4 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-xl font-bold py-3 px-4 hover:bg-gray-50 rounded-xl transition-colors text-gray-700"
            >
              {link.name}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection("apply")}
            className="w-full mt-4 bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-full text-xl shadow-md"
          >
            Enroll Now
          </Button>
        </div>
      )}
    </header>
  );
}