// All primary CTAs (Get started, Get for free, etc.) use this button.
// They now open the wait-list form in a new tab.

const WAITLIST_URL = "https://tally.so/r/wM2d2M";

const Button = ({ text }: { text: string }) => (
  <a
    href={WAITLIST_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white bg-black py-2 px-3 rounded-lg cursor-pointer inline-block"
  >
    {text}
  </a>
);

export default Button;
