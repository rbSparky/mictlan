import Shield from "@/public/assests/cube-helix 1.png";
import Chart from "@/public/assests/cube-helix.png";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="pb-28 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center pt-28 px-12 pb-10 md:w-[600px]">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
          Everything you need
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
          Precision screening at scale
        </div>
        <div className="text-center text-lg mb-8 md:text-xl">
          Mictlan AI combines an evolving, LLM-resistant problem bank with
          automated evaluation and rich analytics—everything in one platform.
        </div>
      </div>

      <div className="flex flex-col gap-16 pt-4 lg:flex-row justify-center items-center px-8">
        <div className="shadow-2xl rounded-xl flex flex-col items-center p-8 max-w-[400px]">
          <Image src={Shield} alt="LLM-proof" className="pb-4" />
          <div className="text-2xl font-bold pb-3 text-center">
            LLM-proof challenges
          </div>
          <div className="text-center">
            Every question is evaluated against the latest public models to
            guarantee they can’t be one-shot by AI.
          </div>
        </div>

        <div className="shadow-2xl rounded-xl flex flex-col items-center p-8 max-w-[400px]">
          <Image src={Chart} alt="Insights" className="pb-4" />
          <div className="text-2xl font-bold pb-3 text-center">
            Deep candidate insights
          </div>
          <div className="text-center">
            Playback, keystroke dynamics and comparative analytics surface true
            signal—so you can make confident hiring calls faster.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
