import Link from "next/link";
import { Button } from "../Button";
import { Logo } from "../Logo";

export const Footer = () => {
  return (
    <footer className="container pt-24 pb-8">
      <div className="flex xs:justify-between items-center flex-wrap 
     justify-center gap-4">
        <div className="flex flex-col items-center">
          <Logo />
          <p className="mt-6 mb-1">The best way to get bids</p>
          <Button>Get Started</Button>
        </div>

        <div className="flex flex-col items-center space-y-1">
          <h3 className="font-semibold">Contact</h3>
          <p className="text-[color:var(--blue)]">info@beep.com</p>
          <p>(416) 551-78672</p>
        </div>
      </div>

      <div className="dividerLine"></div>
      <div className="flex xs:justify-between items-center flex-wrap 
      justify-center gap-4">
        <p className="text-sm">&copy; Beep. 2022</p>
        <div className="flex space-x-4">
          <Link href="/" passHref>
            <span className="text-sm cursor-pointer font-medium">
              Terms of use
            </span>
          </Link>
          <Link href="/" passHref>
            <span className="text-sm cursor-pointer font-medium">
              Privacy Policy
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};
