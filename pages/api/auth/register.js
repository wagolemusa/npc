import { createRouter } from 'next-connect';
import dbConnect from "../../../backend/config/dbConnect";
import { registerUser } from "../../../backend/controllers/authControllers"
// /backend/controllers/productController";


const router = createRouter();

dbConnect();

router.post(registerUser);

export default router.handler();