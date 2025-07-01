// /components/Button.tsx

// All primary CTAs (Get started, Get for free, etc.) use this button.
// Default opens the wait-list, but you can override with `href`.
const WAITLIST_URL = "https://tally.so/r/wM2d2M";

interface ButtonProps {
  text: string;
  href?: string;
}

const Button = ({ text, href }: ButtonProps) => (
  <a
    href={href ?? WAITLIST_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white bg-black py-2 px-3 rounded-lg cursor-pointer inline-block"
  >
    {text}
  </a>
);

export default Button;
