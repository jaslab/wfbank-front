const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loan.controller')

router.get('/',loanController.getAll);
router.get('/:id',loanController.getOne);
router.post('/',loanController.create);
router.put('/',loanController.update);

module.exports = router;
