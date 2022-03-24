import { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import NextNProgress from "nextjs-progressbar";
import { useState } from "react";
import { Router } from "next/router";
import { Loader } from "../components/Loader";


function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <Layout>
      <NextNProgress color="#2a7de1" />
      {loading && <Loader />}
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} />
    </Layout>
  );
}

export default MyApp;
