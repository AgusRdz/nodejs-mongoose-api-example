const express = require('express');
const router = express.Router();
const game = require('../controllers/game/index');

router.post('/', game.create);
router.get('/', game.list);
router.put('/:id/update', game.update);
router.delete('/:id/delete', game.destroy);

module.exports = app => app.use('/games', router);
