"use client";

import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import HeroImage from "@/public/assests/Visual.png";
import Cylinder from "@/public/assests/cylinder.png";
import HalfTorus from "@/public/assests/half-torus.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WAITLIST_URL = "https://tally.so/r/wM2d2M";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="p-8 pb-16 md:p-10 lg:p-20 font-medium bg-gradient-to-tr from-[#001E80] via-[#e4eaff] overflow-x-clip md:items-center gap-3"
    >
      <div className="md:flex items-center justify-center gap-16">
        <div className="md:w-[478px]">
          <div className="border-2 w-fit p-0.5 px-1 lg:text-lg rounded-lg border-slate-400/80">
            Cheat-proof tech hiring
          </div>
          <div className="text-5xl md:text-7xl font-black my-7 bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text tracking-tighter">
            LLM-resistant assessments
          </div>
          <div className="text-xl lg:text-2xl tracking-tighter opacity-85">
            71 % of candidates admit to cheating. Mictlan AI reduces it to 0.
          </div>

          <div className="flex items-center gap-3 mt-6 text-lg">
            <Button text="Get started free" />
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline inline-flex items-center gap-1"
            >
              How it works <FaArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="pt-12 md:pt-0 md:h-[648px] md:w-[648px] relative">
          <motion.img
            src={Cylinder.src}
            alt="Cylinder"
            className="hidden md:block md:absolute -left-8 -top-8"
            style={{ translateY }}
          />
          <motion.img
            src={HeroImage.src}
            alt="Hero illustration"
            className="md:absolute md:h-full md:w-auto md:max-w-none"
            animate={{ translateY: [-30, 30] }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut" }}
          />
          <motion.img
            src={HalfTorus.src}
            alt="Half-torus"
            className="hidden lg:block md:absolute left-[400px] top-[500px]"
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
