import { createRouter } from 'next-connect';
import dbConnect from "../../../backend/config/dbConnect";
import { getProducts, newProduct } from "../../../backend/controllers/productController"
// /backend/controllers/productController";


const router = createRouter();

dbConnect();

router.post(newProduct);
router.get(getProducts);


export default router.handler();