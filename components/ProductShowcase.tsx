"use client";

import ProductImage from "@/public/assests/Product Image.png";
import Pyramid from "@/public/assests/pyramid.png";
import Tube from "@/public/assests/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowRight, FaCode, FaBrain } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { MdLockOutline } from "react-icons/md";

const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-t from-[#acbae8] to-white flex flex-col items-center overflow-x-hidden pb-24"
    >
      <div className="flex flex-col items-center font-medium mt-24 px-8 mx-auto md:w-[550px] lg:w-[630px]">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
          Ensure Hiring Integrity
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
          Why Mictlan AI is Cheat-Proof
        </div>

        <div className="text-center text-lg mb-8 md:text-xl">
          Our assessments are meticulously designed to challenge human
          intellect and expose the limitations of generative AI, ensuring you
          evaluate genuine problem-solving skills.
        </div>
      </div>
      <div className="relative ">
        <motion.img
          src={Pyramid.src}
          alt="Pyramid Image"
          className="absolute -right-24 -top-20 w-72 h-72 hidden md:block"
          style={{
            translateY: translateY,
          }}
        />
        <Image src={ProductImage} alt="Product Image" className="px-1" />
        <motion.img
          src={Tube.src}
          alt="Tube Image"
          className="absolute w-72 h-72 top-64 -left-28 hidden md:block"
          style={{
            translateY: translateY,
          }}
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 max-w-[1400px] lg:px-28">
        <div className="mt-16">
          <MdLockOutline className="text-2xl mb-3" />
          <div className="font-bold text-2xl">LLM-Resistant Questions</div>
          <div className="text-lg my-2">
            Our bank is engineered to be unsolvable by models like GPT-4,
            ensuring authentic responses.
          </div>
          <div className="text-lg font-medium">
            Learn more <FaArrowRight className="inline h-3 w-3" />
          </div>
        </div>

        <div className="mt-16">
          <GoGoal className="text-2xl mb-3" />
          <div className="font-bold text-2xl">Human-Vetted Problems</div>
          <div className="text-lg my-2">
            Each problem is tested by human developers to ensure fairness and
            accurate difficulty.
          </div>
          <div className="text-lg font-medium">
            Learn more <FaArrowRight className="inline h-3 w-3" />
          </div>
        </div>

        <div className="mt-16">
          <FaBrain className="text-2xl mb-3" />
          <div className="font-bold text-2xl">Deep Reasoning Challenges</div>
          <div className="text-lg my-2">
            We focus on problems requiring creative logic and insight that AI
            cannot mimic.
          </div>
          <div className="text-lg font-medium">
            Learn more <FaArrowRight className="inline h-3 w-3" />
          </div>
        </div>

        <div className="mt-16">
          <FaCode className="text-2xl mb-3" />
          <div className="font-bold text-2xl">Comprehensive Coverage</div>
          <div className="text-lg my-2">
            Assess candidates across various CS domains, from algorithms to
            competitive programming.
          </div>
          <div className="text-lg font-medium">
            Learn more <FaArrowRight className="inline h-3 w-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;