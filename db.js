const mysql = require('mysql')
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'todolist'
 })

 dbConn.connect((err)=>{
    if(err) throw err
    console.log('berhasil terkoneksi')
 })

 module.exports =  dbConn