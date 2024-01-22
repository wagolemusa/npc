import Address from "../model/address";
import ErrorHandler from "../utils/errorHandler";

// export const newAddress = async (req, res) => {
//   try {

//     // let { user } = req;
//     // const { id } = req.params;
//     req.body.user = req.user.id;
//     const address = await new Address({
//       // user: user.id,
//       ...req.body
//       // street:req.body.street,
//       // city:req.body.city,
//       // state:req.body.state,
//       // phoneNo:req.body.phoneNo,
//       // zipCode:req.body.zipCode,
//       // country:req.body.country,

//     });
//     res.status(200).json({
//       address,
//     });

//   } catch (err) {
//     console.log(err)
//   }

// };


export const newAddress = async (req, res) => {
  req.body.user = req.user._id;

  const address = await Address.create(req.body);

  res.status(200).json({
    address,
  });
};


export const getAddresses = async (req, res) => {
  const addresses = await Address.find({user: req.user._id});
  res.status(200).json({
    addresses
  })
}


export const getAddress = async (req, res) => {
  const address = await Address.findById(req.query.id)
  if (!address) {
    return next(new ErrorHandler('Address not found', 404))
  }
  res.status(200).json({
    address
  })
}


// update 
export const updateAddress = async (req, res) => {

  let address = await Address.findById(req.query.id)

  if (!address) {
    return next(ErrorHandler('Address not found'))
  }
  address = await Address.findByIdAndUpdate(req.query.id, req.body)

  res.status(200).json({
    address
  });

}

// delete
export const deleteAddress = async (req, res) => {

  let address = await Address.findById(req.query.id)

  if (!address) {
    return next(ErrorHandler('Address not found'))
  }
  await address.remove();

  res.status(200).json({
    success: true,
  });

}