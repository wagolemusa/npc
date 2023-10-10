import { createRouter } from 'next-connect';
import dbConnect from "../../../backend/config/dbConnect";
import { getAddersses, newAddress } from '../../../backend/controllers/address.Controllers';
import { isAuthenticatedUser } from '../../../backend/middlewares/auth';
 import onError from "../../../backend/middlewares/errors"


const router = createRouter({ onError });

dbConnect();

router.use(isAuthenticatedUser).get(getAddersses)
router.use(isAuthenticatedUser).post(newAddress);


export default router.handler();