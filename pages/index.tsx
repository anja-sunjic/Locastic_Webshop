import type { NextPage } from "next";
import Image from "next/image";
import Sidebar from "../components/Home/Sidebar";
import Workshops from "../components/Home/Workshops";
import Layout from "../components/UI/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Sidebar />
      <Workshops />
    </Layout>
  );
};

export default Home;
