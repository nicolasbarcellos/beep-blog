import { ReactNode, useEffect } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";
import "prismjs/themes/prism-tomorrow.css";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    Prism.highlightAll();
    Prism.plugins.NormalizeWhitespace.defaults = {
      "remove-trailing": true,
      "remove-indent": true,
      "left-trim": true,
      "right-trim": true,
      "break-lines": 80,
    };
  }, []);
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
