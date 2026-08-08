import { Router } from 'express';
import { getSpaceToday  } from './planetary/controllers/planetary.controller';

const router = Router();


router.get('/endpoint-curso', getSpaceToday);
export default router;

