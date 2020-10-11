const express = require('express');
const router = express.Router();
const { query, getById, add, update, remove } = require('./post.controller');

module.exports = router;

router.get('/', query);
router.get('/:id', getById);
router.post('/', add);
router.put('/:id', update);
router.delete('/:id', remove);