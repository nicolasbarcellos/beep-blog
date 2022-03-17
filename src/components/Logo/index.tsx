import Link from "next/link";

export const Logo = () => {
  return (
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
  );
};
