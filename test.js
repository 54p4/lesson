var express = require('express')
var bodyParser = require('body-parser')
var mysql = require('mysql')
var app = express()
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const SEED = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

// 创建连接池
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'yiea',
  typeCast: function (field, next) {
    if (field.type == 'BLOB' || field.type == 'TINYBLOB') {
      var buff = field.buffer()
      var bufferBase64 = ''
      if (buff != null) {
        var bufferBase64 = new Buffer(buff, 'binary').toString()
      }
      return bufferBase64
    }
    return next()
  }
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
  pool.query(sql, function (err, rows, fields) {
    if (err) throw err
   // console.log('The is: ', rows)
  })
}

app.get('/proxy', function (req, res) {
  res.send('Hello World!')
})

app.post('/proxy/lesson', function (req, res) {
  var lessonid = req.body.lessonid

  var sql = 'select * from lesson where lessonid = ?'

  pool.query(sql, [lessonid], function (err, result) {
    if (result.length > 0) {
      res.send(result[0])
    }else {
      res.send('{}')
    }
  })
})

app.get('/proxy/navi', function (req, res) {
  // res.send('[{"id":"1234","title":"hello"},{"id":"4567","title":"word"},{"id":"12345","title":"hello word"},{"id":"1234","title":"hello"},{"id":"4567","title":"word"},{"id":"12345","title":"hello word"},{"id":"1234","title":"hello"},{"id":"4567","title":"word"},{"id":"12345","title":"hello word"},{"id":"1234","title":"hello"},{"id":"4567","title":"word"},{"id":"12345","title":"hello word"},{"id":"1234","title":"hello"},{"id":"4567","title":"word"},{"id":"12345","title":"hello word"},{"id":"1234","title":"hello"},{"id":"4567","title":"word"},{"id":"12345","title":"hello word"},{"id":"1234","title":"hello"},{"id":"4567","title":"word"},{"id":"12345","title":"hello word"},{"id":"1234","title":"hello"},{"id":"4567","title":"word"},{"id":"12345","title":"hello word"}]')
  var sql = 'select lessonid,title from lesson order by cdate desc'
  pool.query(sql, function (err, result) {
    res.send(result)
  })
})

app.post('/proxy/lesson/update', function (req, res) {
  var sql = 'update lesson set title=? , lesson=? where lessonid=? '
  var parms = [req.body.title, req.body.lesson, req.body.lessonid]
  sqlCUR(sql, parms)
  res.send('success')
})

app.post('/proxy/lesson/save', function (req, res) {
  var timestamp = parseInt(new Date().getTime(), 16)

  var lessonid = SEED[Math.floor(Math.random() * 62)] + timestamp
  + SEED[Math.floor(Math.random() * 62)]

  var sql = 'insert into lesson(lessonid,title,lesson,type,cdate)'
    + 'values(?,?,?,?,?)'
  var parms = [lessonid, req.body.title, req.body.lesson,
    req.body.type, new Date()]
  sqlCUR(sql, parms)
  res.send(lessonid)
})

app.post('/proxy/word/save', function (req, res) {
  var sql = 'insert into word(title,lessonid,japanese,chinese,english,example,cdate)'
    + 'values(?,?,?,?,?,?,?)'
  var parms = [req.body.title, req.body.lessonid, req.body.japanese,
    req.body.chinese, req.body.english, req.body.example, new Date()]
  sqlCUR(sql, parms)
  res.send('success')
})

app.post('/proxy/word/update', function (req, res) {
  var sql = 'update word set japanese =? , chinese=? ,english=?,example=? where id=? '

  var parms = [ req.body.japanese,
    req.body.chinese, req.body.english, req.body.example, req.body.id]
  sqlCUR(sql, parms)
  res.send('success')
})

app.post('/proxy/word/delete', function (req, res) {
  var sql = 'delete from word where id=?  '

  pool.query(sql, [req.body.id], function (err, rows, fields) {
    if (err) throw err
   // console.log('The is: ', rows)
  })
  res.send('success')
})

app.post('/proxy/word', function (req, res) {
  var sql = 'select * from word where lessonid = ? order by mdate desc'
  pool.query(sql, [req.body.lessonid], function (err, result) {
    console.log(result);
    if (result.length > 0) {
      res.send(result)
    }else {
      res.send('[]')
    }
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
