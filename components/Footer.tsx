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
import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row bg-black text-white p-16 gap-8 justify-between md:px-20 xl:px-44">
      <div className="flex flex-col gap-8 text-gray-300/85 max-w-[300px]">
        <Image
          src={Logo}
          alt="Logo"
          className="h-8 w-auto cursor-pointer"
        />
        <div className="flex gap-4 text-2xl cursor-pointer">
          <FaXTwitter className="hover:scale-125" />
          <AiFillInstagram className="hover:scale-125" />
          <FaPinterest className="hover:scale-125" />
          <FaLinkedin className="hover:scale-125" />
          <FaTiktok className="hover:scale-125" />
          <FaYoutube className="hover:scale-125" />
        </div>
      </div>
      {/* ... rest of footer columns unchanged */}
    </div>
  );
};

export default Footer;
