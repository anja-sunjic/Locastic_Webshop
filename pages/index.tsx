import { CartType, ContentType, UserType, WorkshopData } from "../types";
import { getCartQuantity, getCartValue } from "../helpers/cart";
import { useEffect, useState } from "react";

import Header from "../components/UI/Header";
import Layout from "../components/UI/Layout";
import type { NextPage } from "next";
import Sidebar from "../components/Home/Sidebar";
import Workshops from "../components/Home/Workshops";
import axios from "axios";
import fetchData from "../helpers/api";

const Home: NextPage = () => {
  const [data, setData] = useState<WorkshopData>({
    content: [],
    loading: true,
    message: "",
    users: [],
  });

  const [cart, setCart] = useState<CartType>({
    data: [],
    open: false,
    quantity: 0,
  });

  useEffect(() => {
    const workshopData = fetchData("workshops");
    const userData = fetchData("users");

    setCart({
      open: false,
      data: getCartValue("cart"),
      quantity: getCartQuantity()
    });

    axios
      .all([workshopData, userData])
      .then(
        axios.spread(
          (...responses: Array<any>) => {
            const workshops: Array<ContentType> = responses[0];
            const users: Array<UserType> = responses[1];

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
      <Header cart={cart} setCart={setCart} />
      <Sidebar data={data} setData={setData} />
      {!data.loading && <Workshops data={data} cart={cart} setCart={setCart} />}
    </Layout>
  );
};

export default Home;
