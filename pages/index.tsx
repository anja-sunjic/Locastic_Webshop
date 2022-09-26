import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { ContentType, UserType, WorkshopData } from "../types";

import Sidebar from "../components/Home/Sidebar";
import Workshops from "../components/Home/Workshops";
import Layout from "../components/UI/Layout";
import fetchData from "../helpers/api";
import axios from "axios";

const Home: NextPage = () => {
  const [data, setData] = useState<WorkshopData>({
    content: [],
    loading: true,
    message: "",
    users: [],
  });
  useEffect(() => {
    const workshopData = fetchData("workshops");
    const userData = fetchData("users");

    axios
      .all([workshopData, userData])
      .then(
        axios.spread(
          (...responses: Array<Array<ContentType> | Array<UserType>>) => {
            const workshops = responses[0];
            const users = responses[1];

            setData({
              content: workshops,
              loading: false,
              message: !workshops.length ? "No data available" : "",
              users: users,
            });
          }
        )
      )
      .catch((errors) => {
        console.log(errors);
      });
  }, []);
  return (
    <Layout>
      <Sidebar />
      {!data.loading && <Workshops data={data} />}
    </Layout>
  );
};

export default Home;
