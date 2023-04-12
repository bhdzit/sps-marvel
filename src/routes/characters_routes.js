import Router from 'express';
const router = Router();
import { getAllCharactersOnApi } from '../controllers/charactersController.js';

router.get('/getAllCharactersOnApi', getAllCharactersOnApi);

export const characterRouteList=router ;