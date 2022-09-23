import type { NextPage } from "next";
import Image from "next/image";
import Details from "../components/Single/Details";
import Sidebar from "../components/Single/Sidebar";
import Layout from "../components/UI/Layout";

const Single: NextPage = () => {
  return (
    <Layout>
      <Sidebar />
      <Details />
    </Layout>
  );
};

export default Single;
