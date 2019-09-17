const router = require('express').Router();
const notes = require('../routes/routeController');

router.get('/url/:noteId', notes.findOne);
router.get('/url', notes.findAll);

module.exports = router;
