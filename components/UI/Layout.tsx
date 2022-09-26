import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div style={{ overflow: "hidden", maxWidth: "100vw" }}>
    <Head>
      <title>Title</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <div className="root-style">{children}</div>
    <Footer />
  </div>
);

export default Layout;
