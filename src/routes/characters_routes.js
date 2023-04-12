import Router from 'express';
const router = Router();
import { getAllCharacters, findCharacter, updateCharacter, deleteCharacter, createCharacter } from '../controllers/charactersController.js';

router.get('/getAllCharacters', getAllCharacters);
router.get('/findCharacter/:id', findCharacter);
router.patch('/updateCharacter', updateCharacter);
router.delete('/deleteCharacter/:id', deleteCharacter);
router.post("/createCharacter", createCharacter);

export const characterRouteList = router;