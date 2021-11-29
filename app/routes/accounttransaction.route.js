const express = require('express');
const router = express.Router();
const accounttransactionController = require('../controllers/accounttransaction.controller')

router.get('/',accounttransactionController.getAll);
router.get('/:id',accounttransactionController.getOne);
router.post('/',accounttransactionController.create);
router.put('/',accounttransactionController.update);

module.exports = router;
