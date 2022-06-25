const { application } = require('express');
const express = require('express');
const router = express.Router();
const { getTransactions, createTransactions, deleteTransactions } = require('../controllers/transactions')

router.get('/', getTransactions);
router.post('/', createTransactions);
router.delete('/:id', deleteTransactions);

module.exports = router;