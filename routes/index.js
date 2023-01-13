import express from 'express';
import { 
    getHome, 
    getUs, 
    getOpinions, 
    getTravels,
    detailTravelPage,
} from '../controller/pagesController.js';
import { saveOpinion } from '../controller/opinionController.js';

const router = express.Router();

router.get('/', getHome);
router.get('/nosotros', getUs);
router.get('/viajes', getTravels);
router.get('/viajes/:slug', detailTravelPage);

router.get('/opiniones', getOpinions);
router.post('/opiniones', saveOpinion);

export default router;