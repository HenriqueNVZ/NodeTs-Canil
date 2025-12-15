import { Router } from 'express';
import * as PageController from '../controllers/PageController';
import * as SearchController from '../controllers/SearchController';

const router = Router();

//Definindo Rotas
router.get('/',PageController.home)
router.get('/dogs',PageController.dogs)
router.get('/cats',PageController.cats)
router.get('/fishes',PageController.fishes)
router.get('/search',SearchController.search)


//Exportando router para outros arquivos 
export default router;