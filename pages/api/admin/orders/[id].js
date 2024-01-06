import { createRouter } from 'next-connect';
import dbConnect from "../../../../backend/config/dbConnect";
import onError from "../../../../backend/middlewares/errors";

import {
  
  isAuthenticatedUser,
} from "../../../../backend/middlewares/auth";
import { deleteOrder, getOrder, updateOrder } from '../../../../backend/controllers/orderControllers';



const router = createRouter({ 
    onError,
 });

dbConnect();


router.use(isAuthenticatedUser).get(getOrder);
router.use(isAuthenticatedUser).put(updateOrder);
router.use(isAuthenticatedUser).delete(deleteOrder);


export default router.handler();