const { Router } = require('express');
const router = Router();
const { getAllCharactersOnApi } = require('../controllers/CharactersController');

router.get('/getAllCharactersOnApi', getAllCharactersOnApi);

module.exports = router;