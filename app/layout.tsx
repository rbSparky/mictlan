import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { FaArrowRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] });
const WAITLIST_URL = "https://tally.so/r/wM2d2M";

export const metadata: Metadata = {
  title: "Mictlan AI – LLM-Resistant Hiring Assessments",
  description:
    "Stop AI-generated cheating in technical hiring. Mictlan AI delivers human-vetted, LLM-resistant coding challenges so you identify authentic engineering talent.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge(dmSans.className, "antialiased")}>
        <div className="bg-black text-white p-3 text-sm text-center">
          <span className="hidden sm:inline pr-2 opacity-80">
            Stop AI-generated cheating in tech hiring.
          </span>
          <a
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pr-1 font-semibold hover:underline underline-offset-2 inline-flex items-center gap-1"
          >
            Join the wait-list
            <FaArrowRight className="h-2 w-2" />
          </a>
        </div>
        {children}
      </body>
    </html>
  );
}
