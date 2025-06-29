"use client";

import Image from "next/image";
import Avatar1 from "@/public/assests/avatar-1.png";
import Avatar2 from "@/public/assests/avatar-2.png";
import Avatar3 from "@/public/assests/avatar-3.png";
import Avatar4 from "@/public/assests/avatar-4.png";
import Avatar5 from "@/public/assests/avatar-5.png";
import Avatar6 from "@/public/assests/avatar-6.png";
import Avatar7 from "@/public/assests/avatar-7.png";
import Avatar8 from "@/public/assests/avatar-8.png";
import Avatar9 from "@/public/assests/avatar-9.png";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "We were struggling with candidates acing our coding tests but failing on the job. Mictlan AI changed everything. We're finally seeing true problem-solving skills.",
    avatar: Avatar1,
    name: "Alex Rivera",
    handle: "Lead Recruiter, TechCorp",
  },
  {
    text: "The quality of our technical hires has improved dramatically. Mictlan's questions are tough but fair, and they genuinely filter for the kind of engineers we want.",
    avatar: Avatar6,
    name: "Josh Smith",
    handle: "CTO, Innovate Solutions",
  },
  {
    text: "I can trust the results from Mictlan AI. It's a relief to know that a candidate's score reflects their ability, not their skill with ChatGPT.",
    avatar: Avatar3,
    name: "Morgan Lee",
    handle: "VP of Engineering, DataDriven Inc.",
  },
  {
    text: "Finally, an assessment platform that's caught up to the age of AI. It's an essential part of our hiring toolkit now.",
    avatar: Avatar7,
    name: "Casey Jordan",
    handle: "Hiring Manager, NextGen Apps",
  },
  {
    text: "Integrating Mictlan was seamless. We started identifying stronger, more authentic candidates from day one. The difference is night and day.",
    avatar: Avatar2,
    name: "Taylor Kim",
    handle: "Founder, CodeCrafters",
  },
  {
    text: "The problem quality is exceptional. They test for creativity and deep understanding, not just pattern matching.",
    avatar: Avatar5,
    name: "Riley Smith",
    handle: "Senior Engineer, QuantumLeap",
  },
  {
    text: "The confidence Mictlan gives us is unparalleled. We've eliminated the 'AI factor' from our initial screening.",
    avatar: Avatar4,
    name: "Jordan Patels",
    handle: "Head of Talent, ScaleUp",
  },
  {
    text: "Mictlan's platform is intuitive. We were creating and sending out robust, cheat-proof assessments within minutes.",
    avatar: Avatar8,
    name: "Sam Dawson",
    handle: "Recruiter, DevHouse",
  },
  {
    text: "As a startup, we can't afford bad hires. Mictlan ensures we're talking to candidates with genuine, verifiable skills.",
    avatar: Avatar9,
    name: "Casey Harper",
    handle: "CEO, FirstRound",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <div className="shadow-xl w-[310px] rounded-2xl p-8">
    <div className="font-medium pb-4">{testimonial.text}</div>
    <div className="flex items-center gap-3">
      <Image src={testimonial.avatar} alt="Avatar" className="h-12 w-12" />
      <div>
        <div className="font-semibold">{testimonial.name}</div>
        <div>{testimonial.handle}</div>
      </div>
    </div>
  </div>
);

const TestimonialsColumn = ({
  testimonials,
  className,
}: {
  testimonials: any[];
  className?: string;
}) => (
  <div className={className}>
    {testimonials.map((t, i) => (
      <div key={i} className={i > 0 ? "my-6" : ""}>
        <TestimonialCard testimonial={t} />
      </div>
    ))}
  </div>
);

const Testimonials = () => {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <div className="pt-12">
      <div className="flex flex-col items-center px-28 pb-16">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl font-semibold border-slate-300/80">
          Testimonials
        </div>
        <div className="text-4xl lg:text-5xl pt-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
          What our clients say
        </div>
      </div>
      <div className="overflow-hidden [mask-image:linear-gradient(to_top,transparent,black,transparent)] h-[750px] mb-12 md:mb-28 lg:mb-36">
        <motion.div
          animate={{
            translateY: "-50%",
          }}
          transition={{
            duration: 15, // Adjusted duration for better speed
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex flex-col gap-6" // Added gap for spacing between the two blocks
        >
          <div className="flex items-start justify-center overflow-x-hidden gap-4 ">
            <TestimonialsColumn
              testimonials={firstColumn}
              className="hidden md:block"
            />
            <TestimonialsColumn testimonials={secondColumn} />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden md:block"
            />
          </div>
          <div className="flex items-start justify-center overflow-x-hidden gap-4 ">
            <TestimonialsColumn
              testimonials={firstColumn}
              className="hidden md:block"
            />
            <TestimonialsColumn testimonials={secondColumn} />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden md:block"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;