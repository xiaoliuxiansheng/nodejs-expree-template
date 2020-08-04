let express = require('express');
let router = express.Router();
let mysql = require('mysql')

//连接数据库
let db = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "123456",
    database: "mysql"
});
db.connect();
let sql = 'select * from websites'

let str = " ";
db.query(sql, function (err, result) {
    if (err) {
        console.log('[SELECT ERROR]:', err.message);
    }
    str = result;
    console.log(str);
});
/* GET users listing. */
router.get('/users/:userId/books/:bookId', function (req, res, next) {
    res.send(req.params);
});


router.post('/users', function (req, res, next) {
    db.query(`select * from websites limit ${(req.query.page - 1) * req.query.limit},${req.query.limit}`,
        function (err, result) {
            if (err) {
                console.log('[SELECT ERROR]:', err.message);
            }
            res.send({
                error: 0,
                data: result
            });
        })
});
/* 新增 */
router.post('/addUsers', function (req, res, next) {
  console.log(`INSERT INTO Websites (name, url, alexa, country) VALUES (${String(req.query.name)},${req.query.url},${req.query.alexa},${req.query.country})`)
    db.query(`INSERT INTO Websites (name, url, alexa, country) VALUES (${req.query.name},${req.query.url},${req.query.alexa},${req.query.country})`, function(err, result){

        if (err) {
            console.log('[SELECT ERROR]:', err.message);
          res.send({
            error: 500,
            data:{
              msg:'添加失败'
            }
          });
        } else {
          res.send({
            error: 0,
            data:{
              msg:'添加成功'
            }
          });
        }
    })

});

/* 删除 */

router.post('/delete',(req,res) => {
    db.query(`DELETE FROM Websites
WHERE id=${req.query.id}`,(err,result) => {
        if (err) {
            console.log('[SELECT ERROR]:', err.message);
            res.send({
                error: 500,
                data:{
                    msg:'删除失败！'
                }
            });
        } else {
            res.send({
                error: 0,
                data:{
                    msg:'删除成功'
                }
            });
        }
    })
})

/* 修改 */

router.post('/updates',(req, res) => {
    db.query(`update websites set name = ${req.query.name}, url = ${req.query.url},alexa = ${req.query.alexa},country = ${req.query.country} where id=${req.query.id}`,(err, result) => {
        if (err) {
            console.log('[SELECT ERROR]:', err.message);
            res.send({
                error: 500,
                data:{
                    msg:'更新失败！'
                }
            });
        } else {
            res.send({
                error: 0,
                data:{
                    msg:'更新成功'
                }
            });
        }
    })
})
router.get('/test', function (req, res, next) {
    // res.send(200,'test222222');
    // res.json(500, { error: 'message' })
    // res.redirect(301, 'http://baidu.com');
});
module.exports = router;
