const express = require('express');
const router = express.Router();
const AvaliacaoController = require('../controllers/AvaliacaoController');

router.post('/', AvaliacaoController.create);
router.get('/', AvaliacaoController.index);

module.exports = router;