import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

export const checkoutSession = async (req, res) => {
  const body = req.body;

  const line_items = body?.items?.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.image],
          metadata: { productId: item.product },
        },
        unit_amount: item.price * 100,
      },
    //   tax_rates: ["txr_1MUVJSAlHMiRMt8E2khIxJEi"],m 
      quantity: item.quantity,
    };
  });

  const shippingInfo = body?.shippingInfo;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    success_url: `${process.env.ENVIRONMENT_URL}/me/orders?order_success=true`,
    cancel_url: `${process.env.ENVIRONMENT_URL}`,
    customer_email: req?.user?.email,
    client_reference_id: req?.user?._id,
    mode: "payment",
    metadata: { shippingInfo },
    shipping_options: [
      {
        shipping_rate: "shr_1OL5hKDtSmo7ipf1JaKgrE7N",
      },
    ],
    line_items,
  });

  res.status(200).json({
    url: session.url,
  });
};