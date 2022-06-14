const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mydb'
})

connection.connect()

connection.query('SELECT * FROM user', (err, results, fields) => {
  if (err) throw err
  // console.log(`${results.length} rows`)
  // console.log(results)
  for (let i = 0; i < results.length; i++) {
    console.log(`no:${i}`)
    console.log(`  id:${results[i].user_id}`)
    console.log(`  name:${results[i].name}`)
    console.log(`  password:${results[i].password}`)
  }
  // results.array.forEach(element => {
  //   console.log(element)
  // });
})

connection.end()
