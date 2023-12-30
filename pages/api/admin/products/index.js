import { createRouter } from 'next-connect';
import dbConnect from "../../../../backend/config/dbConnect";
import onError from "../../../../backend/middlewares/errors";

import {
  authorizeRoles,
  isAuthenticatedUser,
} from "../../../../backend/middlewares/auth";

import { newProduct } from "../../../../backend/controllers/productController";

const router = createRouter({ 
    onError,
 });

dbConnect();


router.use(isAuthenticatedUser, authorizeRoles("admin")).post(newProduct);

export default router.handler();