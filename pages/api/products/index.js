import { createRouter } from 'next-connect';
import dbConnect from "../../../backend/config/dbConnect";
import { getProducts, newProduct, querythreeProduct } from "../../../backend/controllers/productController"
// /backend/controllers/productController";
import onError from "../../../backend/middlewares/errors"

const router = createRouter( { onError });

dbConnect();

router.post(newProduct);
router.get(getProducts);
router.get(querythreeProduct)


export default router.handler();