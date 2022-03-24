import GridLoader from "react-spinners/GridLoader";
import { Logo } from "../Logo";

export const Loader = () => {
  return (
    <div className='loading'>
      <div className='animate-pulse' >
      <Logo />
      </div>
    </div>
  );
};
