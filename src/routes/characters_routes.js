import Router from 'express';
import { body }  from 'express-validator';

const router = Router();
import { getAllCharacters, findCharacter, updateCharacter, deleteCharacter, createCharacter } from '../controllers/charactersController.js';
import { validarCampos } from '../utils/validar-campos.js';

/**
 * @swagger
 * /api/characters/getAllCharacters:
 * 
 *   get:
 *     description: "Fetches lists of comic characters"
 *     tags:
 *       - Characters
 *     responses:
 *       200:
 *         description: "Successful operation"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
*/
router.get('/getAllCharacters', getAllCharacters);
/**
 * @swagger
 * /api/characters/findCharacter/{id}:
 * 
 *   get:
 *     description: "Finds a single comic  character by entityId"
 *     tags:
 *       - Characters
 *     produces:
 *          -application/json
 *     parameters:
 *          - in: path
 *            name: id
 *            description:  EntityId of comic character
 *     responses:
 *       200:
 *         description: "Successful operation"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
*/

router.get('/findCharacter/:id', findCharacter);
/**
 * @swagger
 * /api/characters/updateCharacter:
 * 
 *   patch:
 *     description: "Lets you update a character now his entityId"
 *     tags:
 *       - Characters
 *     produces:
 *          -application/json
 *     consumes:
 *      - application/json
 *     parameters:
 *      - in: body
 *        name: user
 *        description: The user to create.
 *        schema:
 *          type: object
 *          required:
 *            - entityId
 *            - name
 *          properties:
 *            entityId:
 *             type: string
 *            name:
 *              type: string
 *            description:
 *              type: string
 *     responses:
 *       200:
 *         description: "Successful operation"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 *       409:
 *         description: Invalid or unrecognized parameter.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
*/

router.patch('/updateCharacter',[
    body('entityId', 'El nombre es obligatorio').isString().notEmpty(),
    body('name', 'El rx es obligatorio').isString().notEmpty(),
    body('description', 'el precio es obligatorio').isString().notEmpty(),
    validarCampos
], updateCharacter);


/**
 * @swagger
 * /api/characters/deleteCharacter/{id}:
 * 
 *   delete:
 *     description: "Lets you delete a character now his entityId"
 *     tags:
 *       - Characters
 *     produces:
 *          -application/json
 *     consumes:
 *      - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: The user to create.
 *     responses:
 *       200:
 *         description: "Successful operation"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 *       409:
 *         description: Invalid or unrecognized parameter.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
*/

router.delete('/deleteCharacter/:id', deleteCharacter);

/**
 * @swagger
 * /api/characters/createCharacter:
 * 
 *   post:
 *     description: "Lets you create a character"
 *     tags:
 *       - Characters
 *     produces:
 *          -application/json
 *     consumes:
 *      - application/json
 *     parameters:
 *      - in: body
 *        name: user
 *        description: The user to create.
 *        schema:
 *          type: object
 *          required:
 *            - name
 *          properties:
 *            name:
 *              type: string
 *            description:
 *              type: string
 *     responses:
 *       200:
 *         description: "Successful operation"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 *       409:
 *         description: Invalid or unrecognized parameter.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
*/

router.post("/createCharacter",[

    body('name', 'El rx es obligatorio').isString().notEmpty(),
    body('description', 'el precio es obligatorio').isString().notEmpty(),
    validarCampos
], createCharacter);

export const characterRouteList = router;