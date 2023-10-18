import { createRouter } from 'next-connect';
import dbConnect from "../../../backend/config/dbConnect";
import { getProducts, newProduct } from "../../../backend/controllers/productController"
// /backend/controllers/productController";
import onError from "../../../backend/middlewares/errors"

const router = createRouter( { onError });

dbConnect();

router.post(newProduct);
router.get(getProducts);


export default router.handler();