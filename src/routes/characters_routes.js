import Router from 'express';
const router = Router();
import { getAllCharacters, findCharacter, updateCharacter } from '../controllers/charactersController.js';

router.get('/getAllCharacters', getAllCharacters);
router.get('/findCharacter/:id', findCharacter);
router.patch('/updateCharacter', updateCharacter);

export const characterRouteList = router;