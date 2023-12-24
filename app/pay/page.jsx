import axios from "axios";
import React from "react"

import { cookies } from "next/headers";
// import Shipping from "../../components/cart/Shipping";
import Pay from '../../components/cart/Pay'

const getAddresses = async () => {

    const nextCookies = cookies();

  const nextAuthSessionToken = nextCookies.get("next-auth.session-token");
  
    const { data } = await axios.get(`${process.env.ENVIRONMENT_URL}/api/address`, {
        headers: {
            Cookie: `next-auth.session-token=${nextAuthSessionToken?.value}`,
          },
    });

    return data?.addresses
}


const Payment = async () => {
    const addresses = await getAddresses()

    return <Pay addresses={addresses} />;
}

export default Payment;

