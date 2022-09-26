import { useEffect, useState } from "react";

import { MainData } from "../../types";
import type { NextPage } from "next";
import fetchData from "../../helpers/api";
import { useRouter } from "next/router";

import Details from "../../components/Single/Details";
import Sidebar from "../../components/Single/Sidebar";
import Layout from "../../components/UI/Layout";

const Workshop: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState<MainData>({
    content: [],
    loading: true,
    message: "",
  });

  useEffect(() => {
    if (id) {
      const newData = fetchData("single", id);

      newData
        .then((data) => {
          setData({
            content: data.length ? data[0] : [],
            loading: false,
            message: !data.content?.length ? "No data available" : "",
          });
        })
        .catch(console.error);
    }
  }, [id]);

  return (
    <Layout>
      <Sidebar />
      {!data.loading && <Details workshop={data.content} />}
    </Layout>
  );
};

export default Workshop;
