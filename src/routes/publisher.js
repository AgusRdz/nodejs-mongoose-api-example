const express = require('express');
const router = express.Router();
const publisher = require('../controllers/publisher/index');

router.post('/', publisher.create);
router.get('/', publisher.list);
router.put('/:id/update', publisher.update);
router.delete('/:id/delete', publisher.destroy);

module.exports = app => app.use('/publishers', router);
