import { createRouter } from 'next-connect';
import dbConnect from "../../../backend/config/dbConnect";
import { getAddersses, newAddress } from '../../../backend/controllers/address.Controllers';


const router = createRouter();

dbConnect();

router.get(getAddersses)
router.post(newAddress);


export default router.handler();