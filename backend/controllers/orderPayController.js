
import Order from '../model/order'
import APIFilters from "../utils/APIFilters"


export const myOrders = async (req, res) => {
  const resPerPage = 2;
  const ordersCount = await Order.countDocuments();

  const apiFilters = new APIFilters(Order.find(), req.query).pagination(
    resPerPage
  );

  const orders = await apiFilters.query
    .find({ user: req.user._id })
    .populate("shippingInfo user");

  res.status(200).json({
    ordersCount,
    resPerPage,
    orders,
  });
};


export const checkoutSession = async (req, res) => {
  const body = req.body;
  try {  
   const { tax, amount, totalAmount} = req.body;

    const order = await Order.create({
      tax,
      amount,
      totalAmount,
      ...req.body,
      
    })
      res.status(201).json({ 
        success: true,
        order
    });
    
  } catch (error) {
    console.log(error);
  }
};





