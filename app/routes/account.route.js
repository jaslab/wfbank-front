const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account.controller')

router.get('/',accountController.getAll);
router.get('/:id',accountController.getOne);
router.post('/',accountController.create);
router.put('/',accountController.update);

module.exports = router;
