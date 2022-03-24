import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
};

export const Button = ({ children, disabled, ...rest }: ButtonProps) => {
  return (
    <button
      className="font-semibold text-white bg-[color:var(--blue)] py-2 px-6 
          rounded-lg shadow-md hover:brightness-90 hover:shadow-lg 
          transition duration-300 whitespace-nowrap inline-flex justify-center 
          w-28"
      disabled={disabled}
      {...rest}
    >

      {children}
    </button>
  );
};
