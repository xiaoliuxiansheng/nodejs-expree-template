/**
 * @name: test2
 * @author: LIULIU
 * @date: 2020-07-31 10:16
 * @description：test2
 * @update: 2020-07-31 10:16
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('test222222');
});

module.exports = router;
