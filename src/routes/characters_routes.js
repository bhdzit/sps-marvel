import Router from 'express';
const router = Router();
import { getAllCharacters, findCharacter, updateCharacter, deleteCharacter } from '../controllers/charactersController.js';

router.get('/getAllCharacters', getAllCharacters);
router.get('/findCharacter/:id', findCharacter);
router.patch('/updateCharacter', updateCharacter);
router.delete('/deleteCharacter/:id', deleteCharacter);
export const characterRouteList = router;