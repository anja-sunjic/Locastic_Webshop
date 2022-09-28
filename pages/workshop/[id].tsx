import { CartType, ContentType, UserType, WorkshopData } from "../../types";
import { getCartQuantity, getCartValue } from "../../helpers/cart";
import { useEffect, useState } from "react";

import Details from "../../components/Single/Details";
import Header from "../../components/UI/Header";
import Layout from "../../components/UI/Layout";
import type { NextPage } from "next";
import Sidebar from "../../components/Single/Sidebar";
import axios from "axios";
import fetchData from "../../helpers/api";
import { useRouter } from "next/router";

const Workshop: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

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
    if (id) {
      const workshopData = fetchData("single", id);
      const userData = fetchData("users");

      axios
      .all([workshopData, userData])
      .then(
        axios.spread(
          (...responses: Array<any>) => {
            const workshop: Array<ContentType> = responses[0];
            const users: Array<UserType> = responses[1];

            setData({
              content: workshop.length ? workshop : [],
              loading: false,
              message: !workshop.length ? "No data available" : "",
              users: users,
            });
          }
        )
      )
      .catch((errors) => {
        console.log(errors);
      });

      setCart({
        open: false,
        data: getCartValue("cart"),
        quantity: getCartQuantity()
      });
    }
  }, [id]);

  return (
    <Layout>
      <Header cart={cart} setCart={setCart} />
      <Sidebar />
      {!data.loading && <Details data={data} cart={cart} setCart={setCart} />}
    </Layout>
  );
};

export default Workshop;
