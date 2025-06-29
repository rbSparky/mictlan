import Image from "next/image";
import Logo from "@/public/assests/logo.png";
import {
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row bg-black text-white p-16 gap-8 justify-between md:px-20 xl:px-44">
      <div className="flex flex-col gap-8 text-gray-300/85 max-w-[300px]">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" className="cursor-pointer h-8 w-auto" />
          <span className="font-bold text-xl text-white">Mictlan AI</span>
        </div>
        <div>
          Mictlan AI is revolutionizing tech hiring with cheat-proof assessments
          designed for the new era of AI.
          <br />
          <br />© 2024 Mictlan AI. All rights reserved.
        </div>
        <div className="flex gap-4 text-2xl cursor-pointer">
          <FaXTwitter className="hover:scale-125" />
          <FaLinkedin className="hover:scale-125" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg">Product</div>
        <div className="cursor-pointer text-gray-300/85">Features</div>
        <div className="cursor-pointer text-gray-300/85">Integrations</div>
        <div className="cursor-pointer text-gray-300/85">Pricing</div>
        <div className="cursor-pointer text-gray-300/85">Changelog</div>
        <div className="cursor-pointer text-gray-300/85">Request a Demo</div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg">Company</div>
        <div className="cursor-pointer text-gray-300/85">About</div>
        <div className="cursor-pointer text-gray-300/85">Blog</div>
        <div className="cursor-pointer text-gray-300/85">Careers</div>
        <div className="cursor-pointer text-gray-300/85">Contact</div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg">Resources</div>
        <div className="cursor-pointer text-gray-300/85">Problem Examples</div>
        <div className="cursor-pointer text-gray-300/85">Case Studies</div>
        <div className="cursor-pointer text-gray-300/85">Guides</div>
        <div className="cursor-pointer text-gray-300/85">Docs</div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg">Legal</div>
        <div className="cursor-pointer text-gray-300/85">Privacy Policy</div>
        <div className="cursor-pointer text-gray-300/85">Terms of Service</div>
        <div className="cursor-pointer text-gray-300/85">Security</div>
      </div>
    </div>
  );
};

export default Footer;