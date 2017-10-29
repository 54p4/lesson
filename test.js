var express = require('express')
var bodyParser = require('body-parser');
var mysql = require('mysql')
var app = express()

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// 创建连接池
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'yiea'
})

function sqlCUR (sql, params) {
  // 直接使用
  pool.query(sql, params, function (err, result) {
    if (err) throw err
    console.log('The is: ', result)
  })
}

function sqlDel (sql) {
  // 直接使用
  pool.query(userAddSql,  function (err, rows, fields) {
    if (err) throw err
    console.log('The is: ', rows)
  })
}

app.get('/proxy', function (req, res) {
  res.send('Hello World!')
})

app.get('/proxy/navi', function (req, res) {


  res.send('[{"id":"1234","title":"hello"},{"id":"4567","title":"word"},{"id":"12345","title":"hello word"}]');
  
})

app.post('/proxy/word/save',function(req,res){
  var sql ="insert into word(title,lessonId,japanese,chinese,english,example,cdate)"
  +"values(?,?,?,?,?,?,?)"
  var parms = [req.body.title,req.body.lessonId,req.body.japanese,
  req.body.chinese,req.body.english,req.body.example,new Date()];
  sqlCUR(sql,parms);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
