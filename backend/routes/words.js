const express = require('express');
const router = express.Router();
const wordController = require('../src/controllers/wordController');

router.get('/', wordController.getWords);
router.post('/', wordController.createWord);
router.put('/:id', wordController.updateWord);
router.delete('/:id', wordController.deleteWord);

module.exports = router;
