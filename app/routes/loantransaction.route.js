const express = require('express');
const router = express.Router();
const loantransactionController = require('../controllers/loantransaction.controller')

router.get('/',loantransactionController.getAll);
router.get('/:id',loantransactionController.getOne);
router.post('/',loantransactionController.create);
router.put('/',loantransactionController.update);

module.exports = router;
