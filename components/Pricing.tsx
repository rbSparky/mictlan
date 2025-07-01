import { IoMdCheckmark } from "react-icons/io";

const WAITLIST_URL = "https://tally.so/r/wM2d2M";

const PlanButton = ({ text }: { text: string }) => (
  <a
    href={WAITLIST_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white bg-black py-1.5 w-full rounded-lg cursor-pointer inline-block text-center font-medium"
  >
    {text}
  </a>
);

const Pricing = () => {
  return (
    <div id="pricing" className="mb-8">
      {/* heading unchanged */}
      <div className="flex flex-col items-center font-medium mt-16 mb-12 px-12 mx-auto max-w-[550px] ">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
          Simple, transparent pricing
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
          Pay only for real talent signals
        </div>
        <div className="text-center text-lg mb-8 md:text-xl">
          Every plan includes our full LLM-resistant question bank, automatic
          grading and cheating detection. Cancel anytime.
        </div>
      </div>

      {/* plan cards */}
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center pb-20 gap-8">
        {/* Community */}
        <div className="shadow-xl border-gray-100 border-2 rounded-2xl p-8">
          <div className="font-bold text-gray-500">Community</div>
          <div className="py-8">
            <span className="font-extrabold text-5xl">$0</span>
            <span className="font-semibold text-gray-600">/month</span>
          </div>
          <PlanButton text="Join wait-list" />
          <div className="flex flex-col gap-6 mt-8">
            <div><IoMdCheckmark className="inline mr-2" />10 candidates / month</div>
            <div><IoMdCheckmark className="inline mr-2" />Core question bank</div>
            <div><IoMdCheckmark className="inline mr-2" />Basic LLM detection</div>
            <div><IoMdCheckmark className="inline mr-2" />Email support</div>
          </div>
        </div>

        {/* Growth */}
        <div className="shadow-2xl border-2 rounded-2xl p-8 bg-black text-white">
          <div className="flex justify-between items-center">
            <div className="font-bold text-gray-400">Growth</div>
            <div className="border-2 w-fit p-0.5 px-3 text-xs rounded-xl border-slate-300/20 bg-gradient-to-r from-pink-500 via-lime-600 to-sky-400 text-transparent bg-clip-text font-bold tracking-tighter">
              Most Popular
            </div>
          </div>
          <div className="py-8">
            <span className="font-extrabold text-5xl">$99</span>
            <span className="font-semibold text-gray-400">/month</span>
          </div>
          <PlanButton text="Join wait-list" />
          <div className="flex flex-col gap-6 mt-8">
            <div><IoMdCheckmark className="inline mr-2" />100 candidates / month</div>
            <div><IoMdCheckmark className="inline mr-2" />Unlimited roles</div>
            <div><IoMdCheckmark className="inline mr-2" />Advanced LLM detection</div>
            <div><IoMdCheckmark className="inline mr-2" />ATS integrations</div>
            <div><IoMdCheckmark className="inline mr-2" />Priority support</div>
          </div>
        </div>

        {/* Enterprise */}
        <div className="shadow-xl border-gray-100 border-2 rounded-2xl p-8">
          <div className="font-bold text-gray-500">Enterprise</div>
          <div className="py-8">
            <span className="font-extrabold text-5xl">$199</span>
            <span className="font-semibold text-gray-600">/month</span>
          </div>
          <PlanButton text="Join
          
          wait-list" />
          <div className="flex flex-col gap-6 mt-8">
            <div><IoMdCheckmark className="inline mr-2" />Unlimited candidates</div>
            <div><IoMdCheckmark className="inline mr-2" />Custom questions</div>
            <div><IoMdCheckmark className="inline mr-2" />Dedicated CSM</div>
            <div><IoMdCheckmark className="inline mr-2" />API & webhooks</div>
            <div><IoMdCheckmark className="inline mr-2" />SOC 2 & SSO</div>
            <div><IoMdCheckmark className="inline mr-2" />24/7 priority support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
