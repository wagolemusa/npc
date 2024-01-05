import axios from "axios";
// import ListOrders from '../../../components/orders/ListOrders'
import React from "react"
// import queryString from "query-string";
import { cookies } from "next/headers";

// const getOrders = async () => {

//   const nextCookies = cookies();

//   const nextAuthSessionToken = nextCookies.get("next-auth.session-token");

//   // const urlParams = {
//   //   page: searchParams.page || 1,
//   // }

//   // const searchQuery = queryString.stringify(urlParams);

//   const { data } = await axios.get(`${process.env.ENVIRONMENT_URL}/api/admin/orders`, {
//     headers: {
//       Cookie: `next-auth.session-token=${nextAuthSessionToken?.value}`,
//     },
//   });

//   return data
// }


// const AdminOrdersPage = async () => {
//   const orders = await getOrders()

//   console.log("orders", orders)

//   return <ListOrders orders={orders} />;
// }

// export default AdminOrdersPage;



import queryString from "query-string";
import Orders from "../../../components/admin/Orders"

const getOrders = async (searchParams) => {
  const nextCookies = cookies();

  const nextAuthSessionToken = nextCookies.get("next-auth.session-token");

  const urlParams = {
    page: searchParams.page || 1,
  };

  const searchQuery = queryString.stringify(urlParams);

  const { data } = await axios.get(
    `${process.env.ENVIRONMENT_URL}/api/admin/orders?${searchQuery}`,
    {
      headers: {
        Cookie: `next-auth.session-token=${nextAuthSessionToken?.value}`,
      },
    }
  );

  return data;
};

const AdminOrdersPage = async ({ searchParams }) => {
  const orders = await getOrders(searchParams);

  return <Orders orders={orders} />;
};

export default AdminOrdersPage;