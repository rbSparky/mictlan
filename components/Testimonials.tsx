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

const Testimonials = () => {
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
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          <div className="flex items-center justify-center overflow-x-hidden pb-4 gap-4 ">
            <div className="hidden md:block">
              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  We were struggling with candidates acing our coding tests but
                  failing on the job. Mictlan AI changed everything. We're
                  finally seeing true problem-solving skills.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar1} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Alex Rivera</div>
                    <div>Lead Recruiter, TechCorp</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8 my-6">
                <div className="font-medium pb-4">
                  The quality of our technical hires has improved dramatically.
                  Mictlan's questions are tough but fair, and they genuinely
                  filter for the kind of engineers we want.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar6} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Josh Smith</div>
                    <div>CTO, Innovate Solutions</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  I can trust the results from Mictlan AI. It's a relief to
                  know that a candidate's score reflects their ability, not
                  their skill with ChatGPT.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar3} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Morgan Lee</div>
                    <div>VP of Engineering, DataDriven Inc.</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  Finally, an assessment platform that's caught up to the
                  age of AI. It's an essential part of our hiring toolkit
                  now.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar7} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Casey Jordan</div>
                    <div>Hiring Manager, NextGen Apps</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8 my-6">
                <div className="font-medium pb-4">
                  Integrating Mictlan was seamless. We started identifying
                  stronger, more authentic candidates from day one. The
                  difference is night and day.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar2} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Taylor Kim</div>
                    <div>Founder, CodeCrafters</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  The problem quality is exceptional. They test for creativity
                  and deep understanding, not just pattern matching.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar5} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Riley Smith</div>
                    <div>Senior Software Engineer, QuantumLeap</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  The confidence Mictlan gives us is unparalleled. We've
                  eliminated the 'AI factor' from our initial
                  screening.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar4} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Jordan Patels</div>
                    <div>Head of Talent, ScaleUp</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8 my-6">
                <div className="font-medium pb-4">
                  Mictlan's platform is intuitive. We were creating and
                  sending out robust, cheat-proof assessments within minutes.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar8} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Sam Dawson</div>
                    <div>Recruiter, DevHouse</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  As a startup, we can't afford bad hires. Mictlan ensures
                  we're talking to candidates with genuine, verifiable
                  skills.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar9} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Casey Harper</div>
                    <div>CEO, FirstRound</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center overflow-x-hidden gap-4 ">
            <div className="hidden md:block">
              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  We were struggling with candidates acing our coding tests but
                  failing on the job. Mictlan AI changed everything. We're
                  finally seeing true problem-solving skills.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar1} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Alex Rivera</div>
                    <div>Lead Recruiter, TechCorp</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8 my-6">
                <div className="font-medium pb-4">
                  The quality of our technical hires has improved dramatically.
                  Mictlan's questions are tough but fair, and they genuinely
                  filter for the kind of engineers we want.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar6} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Josh Smith</div>
                    <div>CTO, Innovate Solutions</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  I can trust the results from Mictlan AI. It's a relief to
                  know that a candidate's score reflects their ability, not
                  their skill with ChatGPT.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar3} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Morgan Lee</div>
                    <div>VP of Engineering, DataDriven Inc.</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  Finally, an assessment platform that's caught up to the
                  age of AI. It's an essential part of our hiring toolkit
                  now.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar7} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Casey Jordan</div>
                    <div>Hiring Manager, NextGen Apps</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8 my-6">
                <div className="font-medium pb-4">
                  Integrating Mictlan was seamless. We started identifying
                  stronger, more authentic candidates from day one. The
                  difference is night and day.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar2} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Taylor Kim</div>
                    <div>Founder, CodeCrafters</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  The problem quality is exceptional. They test for creativity
                  and deep understanding, not just pattern matching.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar5} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Riley Smith</div>
                    <div>Senior Software Engineer, QuantumLeap</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  The confidence Mictlan gives us is unparalleled. We've
                  eliminated the 'AI factor' from our initial
                  screening.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar4} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Jordan Patels</div>
                    <div>Head of Talent, ScaleUp</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8 my-6">
                <div className="font-medium pb-4">
                  Mictlan's platform is intuitive. We were creating and
                  sending out robust, cheat-proof assessments within minutes.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar8} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Sam Dawson</div>
                    <div>Recruiter, DevHouse</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  As a startup, we can't afford bad hires. Mictlan ensures
                  we're talking to candidates with genuine, verifiable
                  skills.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar9} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Casey Harper</div>
                    <div>CEO, FirstRound</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;