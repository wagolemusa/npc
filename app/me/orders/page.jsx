import axios from "axios";
import ListOrders from '../../../components/orders/ListOrders'
import React from "react"

import { cookies } from "next/headers";

const getOrders = async (searchParams) => {

  const nextCookies = cookies();

  const nextAuthSessionToken = nextCookies.get("next-auth.session-token");

  // const urlParams = {
  //   page: searchParams.page || 1,
  // }

  // const searchQuery = queryString.stringify(urlParams);

  const { data } = await axios.get(`${process.env.ENVIRONMENT_URL}/api/orders/me`, {
    headers: {
      Cookie: `next-auth.session-token=${nextAuthSessionToken?.value}`,
    },
  });

  return data
}


const MyOrdersPage = async () => {
  const orders = await getOrders()

  console.log("orders", orders)

  return <ListOrders orders={orders} />;
}

export default MyOrdersPage;

