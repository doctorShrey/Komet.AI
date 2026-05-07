/**
 * @file LogoMarquee.tsx
 * @brief Page section component rendering the LogoMarquee area.
 * @author Shreyansh Dhingra
 * @role Full-Stack Engineering, Architecture, UI/UX, Security
 * @created 2026-05-01
 * 
 * @copyright Copyright (c) 2026 Komet.AI. All Rights Reserved.
 * This software is the confidential and proprietary information of Komet.AI.
 * Unauthorized copying, modification, or distribution of this file, via any medium, 
 * is strictly prohibited.
 */
import React, { useState } from 'react';

const logos = [
  { name: "", img: "../assets/umasslowell.png", isObscure: true },
  { name: "", img: "../assets/trentu.png", isObscure: true },



  { name: "MIT", img: "../assets/mit.png", isObscure: false },
  { name: "Harvard", img: "../assets/harvard.png", isObscure: false },
  { name: "", img: "../assets/uiuc.png", isObscure: true },
  { name: "Stanford", img: "../assets/stanford.png", isObscure: false },
  { name: "UC Berkeley", img: "../assets/berkley.png", isObscure: false },
  { name: "UCLA", img: "../assets/ucla.png", isObscure: false },
  { name: "", img: "../assets/toronto.png", isObscure: true },
  { name: "Indian Institute of Technology", img: "../assets/iit.png", isObscure: true },
  { name: "", img: "../assets/du.png", isObscure: true },
  { name: "", img: "../assets/manipal.png", isObscure: true },
  { name: "", img: "../assets/amity.png", isObscure: true },
  { name: "Y Combinator", img: "../assets/ycombinator.png", isObscure: false },
  { name: "BlastAI", img: "../assets/blastai.png", isObscure: true },
  { name: "Google", img: "../assets/google.png", isObscure: false },
  { name: "Microsoft", img: "../assets/microsoft.png", isObscure: false },
  { name: "Amazon", img: "../assets/amazon.png", isObscure: false },
  { name: "Drytis", isObscure: true },
  { name: "Oracle", img: "../assets/oracle.png", isObscure: false },
  { name: "Meta", img: "../assets/meta.png", isObscure: false },
  { name: "Nvidia", img: "../assets/nvidia.png", isObscure: false },
  { name: "Dell", img: "../assets/dell.png", isObscure: false },
  { name: "NTT", img: "../assets/ntt.png", isObscure: false },
  { name: "", img: "../assets/heph.png", isObscure: true },
  { name: "", img: "../assets/cardekho.png", isObscure: true },
  { name: "", img: "../assets/tcs.png", isObscure: true }
];

const LogoImage = ({ name, img, isObscure }: { name: string; img?: string; isObscure?: boolean }) => {
  const [error, setError] = useState(!img);

  if (error) {
    return <span className="text-xl md:text-2xl font-bold font-sans text-slate-700 whitespace-nowrap">{name}</span>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <img
        src={img}
        alt={`${name} logo`}
        className="h-12 w-auto max-w-[120px] object-contain"
        onError={() => setError(true)}
        loading="lazy"
      />
      {isObscure && (
        <span className="text-[10px] text-slate-400 tracking-widest uppercase font-semibold text-center whitespace-nowrap">
          {name}
        </span>
      )}
    </div>
  );
};

export function LogoMarquee() {
  return (
    <section className="w-full py-10 md:py-16 overflow-hidden bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-10">
        <h2 className="text-center text-sm md:text-base font-bold tracking-widest text-slate-400 uppercase">
          Backed by Mentors From
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Subtle fade-out gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Container */}
        <div className="flex animate-marquee w-max hover:[animation-play-state:paused]">
          {/* First set of logos */}
          <div className="flex items-center shrink-0 pr-12">
            {logos.map((logo, idx) => (
              <div key={`logo-1-${idx}`} className="mx-10 md:mx-14 opacity-60 hover:opacity-100 transition-all duration-300 flex items-center justify-center min-w-[120px] h-[80px]">
                <LogoImage name={logo.name} img={logo.img} isObscure={logo.isObscure} />
              </div>
            ))}
          </div>
          {/* Duplicated set for seamless loop */}
          <div className="flex items-center shrink-0 pr-12">
            {logos.map((logo, idx) => (
              <div key={`logo-2-${idx}`} className="mx-10 md:mx-14 opacity-60 hover:opacity-100 transition-all duration-300 flex items-center justify-center min-w-[120px] h-[80px]">
                <LogoImage name={logo.name} img={logo.img} isObscure={logo.isObscure} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );


}
