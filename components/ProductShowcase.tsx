"use client";

import ProductImage from "@/public/assests/Product Image.png";
import Pyramid from "@/public/assests/pyramid.png";
import Tube from "@/public/assests/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoShieldCheck, GoGraph } from "react-icons/go";
import { LuDatabase } from "react-icons/lu";
import { MdVisibility } from "react-icons/md";

const WAITLIST_URL = "https://tally.so/r/wM2d2M";

const FeatureLink = ({ children }: { children: React.ReactNode }) => (
  <a
    href={WAITLIST_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="text-lg font-medium hover:underline inline-flex items-center gap-1"
  >
    {children} <FaArrowRight className="h-3 w-3" />
  </a>
);

const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div
      id="why-mictlan"
      ref={sectionRef}
      className="bg-gradient-to-t from-[#acbae8] to-white flex flex-col items-center overflow-x-hidden pb-24"
    >
      {/* header block unchanged */}
      <div className="flex flex-col items-center font-medium mt-24 px-8 mx-auto md:w-[550px] lg:w-[630px]">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
          Why Mictlan AI
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
          Built for integrity-first hiring
        </div>
        <div className="text-center text-lg mb-8 md:text-xl">
          Our ever-growing library of human-vetted, LLM-resistant challenges
          spots AI-generated answers instantly and surfaces true ability.
        </div>
      </div>

      {/* mock screenshot */}
      <div className="relative">
        <motion.img
          src={Pyramid.src}
          alt="Pyramid"
          className="absolute -right-24 -top-20 w-72 h-72 hidden md:block"
          style={{ translateY }}
        />
        <Image src={ProductImage} alt="Platform screenshot" className="px-1" />
        <motion.img
          src={Tube.src}
          alt="Tube"
          className="absolute w-72 h-72 top-64 -left-28 hidden md:block"
          style={{ translateY }}
        />
      </div>

      {/* feature grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 max-w-[1400px] lg:px-28">
        <div className="mt-16">
          <LuDatabase className="text-2xl mb-3" />
          <div className="font-bold text-2xl">Human-vetted problem bank</div>
          <div className="text-lg my-2">
            Thousands of fresh questions tested on engineers—and on every major
            LLM—to ensure humans pass while bots flunk.
          </div>
          <FeatureLink>Learn more</FeatureLink>
        </div>

        <div className="mt-16">
          <MdVisibility className="text-2xl mb-3" />
          <div className="font-bold text-2xl">Automatic replay & proctoring</div>
          <div className="text-lg my-2">
            Code playback, copy-paste detection and webcam proctoring give a
            clear audit trail for every attempt.
          </div>
          <FeatureLink>Learn more</FeatureLink>
        </div>

        <div className="mt-16">
          <GoGraph className="text-2xl mb-3" />
          <div className="font-bold text-2xl">Adaptive difficulty analytics</div>
          <div className="text-lg my-2">
            Dynamic scoring benchmarks each candidate against calibrated human
            percentiles.
          </div>
          <FeatureLink>Learn more</FeatureLink>
        </div>

        <div className="mt-16">
          <GoShieldCheck className="text-2xl mb-3" />
          <div className="font-bold text-2xl">LLM signature detection</div>
          <div className="text-lg my-2">
            Proprietary heuristics flag ChatGPT-style patterns with&nbsp;&gt;95 %
            precision, so you know who really solved the problem.
          </div>
          <FeatureLink>Learn more</FeatureLink>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
