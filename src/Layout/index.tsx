import { ReactNode } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
