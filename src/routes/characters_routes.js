const { Router } = require('express');
const router = Router();
const { getAllCharactersOnApi } = require('../controllers/charactersController');

router.get('/getAllCharactersOnApi', getAllCharactersOnApi);

module.exports = router;