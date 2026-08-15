import { Router } from 'express';
import { getSpaceToday  } from './planetary/controllers/planetary.controller';

const router = Router();


router.get('/today', getSpaceToday);
export default router;

