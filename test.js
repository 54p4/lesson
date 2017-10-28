var express = require('express')
var app = express()

var mysql = require('mysql')

// 创建连接池
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'yiea'
})

function sqlCUR (sql, params) {
  // 直接使用
  pool.query(userAddSql, userAddSql_Params, function (err, result) {
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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
