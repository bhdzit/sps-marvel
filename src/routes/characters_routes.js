import Router from 'express';
const router = Router();
import { getAllCharacters, findCharacter } from '../controllers/charactersController.js';

router.get('/getAllCharacters', getAllCharacters);
router.get('/findCharacter/:id', findCharacter);

export const characterRouteList = router;