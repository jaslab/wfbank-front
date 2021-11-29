const express = require('express');
const router = express.Router();
const memberfeeController = require('../controllers/memberfee.controller')

router.get('/',memberfeeController.getAll);
router.get('/:id',memberfeeController.getOne);
router.post('/',memberfeeController.create);
router.put('/',memberfeeController.update);

module.exports = router;
