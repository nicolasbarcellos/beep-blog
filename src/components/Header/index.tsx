import Link from "next/link";

import { AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  return (
    <header className="container flex py-6 items-center justify-between flex-col gap-4 
    xs:flex-row xs:gap-0 overflow-x-hidden">
      <Link href="/" passHref>
        <h1 className="text-4xl sm:text-5xl uppercase font-bold cursor-pointer">
          <span
            className="text-white bg-[color:var(--blue)] 
        rounded-md px-3 py-1"
          >
            B
          </span>
          eep<span className="text-[color:var(--red)]">.</span>
        </h1>
      </Link>

      <div className="flex items-center font-semibold space-x-4 md:space-x-8 ">
        <nav className="hidden sm:block">
          <ul className="flex space-x-4 md:space-x-8">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li className="text-[color:var(--red)]">
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">FAQs</Link>
            </li>
          </ul>
        </nav>
        <div className="hidden sm:block bg-black w-[2px] h-6" ></div>
        <div className="space-x-4">
          <button className="font-semibold hover:brightness-95 transition">Log In</button>
          <button className="font-semibold text-white bg-[color:var(--blue)] py-2 px-6 
          rounded-lg shadow-md hover:brightness-95 transition">Sign Up</button>
        </div>
        <AiOutlineMenu className="sm:hidden inline-flex cursor-pointer" size={18} />
      </div>
    </header>
  );
};
