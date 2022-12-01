import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Head>
        <title>AnimeDB</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main className="pt-10">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
