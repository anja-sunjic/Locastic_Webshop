import React, { ReactNode } from "react";

import Footer from "./Footer";
import Head from "next/head";

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
    <div className="root-style">{children}</div>
    <Footer />
  </div>
);

export default Layout;
