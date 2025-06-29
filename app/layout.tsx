import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { FaArrowRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mictlan AI – LLM-Resistant Hiring Assessments",
  description:
    "Stop AI-generated cheating in technical hiring. Mictlan AI delivers human-vetted, LLM-resistant coding challenges so you identify authentic engineering talent with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(dmSans.className, "antialiased")}>
        <div className="bg-black text-white p-3 text-sm text-center cursor-pointer">
          <span className="hidden sm:inline pr-2 opacity-80">
            Stop AI-generated cheating in tech hiring.
          </span>
          <span className="pr-1 font-semibold">
            Try Mictlan AI free&nbsp;
            <FaArrowRight className="inline h-2 w-2" />
          </span>
        </div>
        {children}
      </body>
    </html>
  );
}
