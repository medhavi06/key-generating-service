const router = require('express').Router();

router.get('/ping', function (req, res) {
    res.send('hello world')
});

module.exports = router;
