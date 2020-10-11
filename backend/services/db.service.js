const mysql = require('mysql');
// const config  =  require('../config')

module.exports = {
    runSQL,
}

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myblog'
})

db.connect(err => {
    if (err) throw new Error('mysql failed connection');
    console.log('connected to SQL server');
})

function runSQL(query) {
    return new Promise((resolve, reject) => {
        db.query(query, function (err, results) {
            if (err) reject(err)
            else resolve(results)
        })
    })
}

    // await db.connect(err => {
    //     if (err) throw err;
    //     console.log('MySql connected');
    //     const dbName = 'myblog';
    //     db.query(`USE ${dbName}`, err => {
    //         // console.log({sql});
    //         if (err) throw err;
    //     })
    // });