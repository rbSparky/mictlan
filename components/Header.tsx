import Image from "next/image";
import Logo from "@/public/assests/logo.png";
import { FaBars } from "react-icons/fa";
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 backdrop-blur-md sticky top-0 z-20 bg-gradient-to-r from-[#E0E7FD] to-[#FDFEFF] shadow-md">
      <div className="flex items-center gap-2">
        <Image src={Logo} alt="Logo" className="cursor-pointer h-8 w-auto" />
        <span className="font-bold text-xl">Mictlan AI</span>
      </div>
      <FaBars className="block md:hidden" />
      <nav className="hidden md:block">
        <ul className="flex gap-6 items-center">
          <li>
            <a href="#">Why Mictlan?</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Case Studies</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <Button text="Request a Demo" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;