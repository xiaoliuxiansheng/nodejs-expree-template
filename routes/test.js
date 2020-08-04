/**
 * @name: test
 * @author: LIULIU
 * @date: 2020-07-31 10:11
 * @description：test
 * @update: 2020-07-31 10:11
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.query)
    res.send('test sdsd');
});

module.exports = router;
