const mysql = require('mysql');
module.exports = {
    runSQL
}

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blogest',
});

db.connect(err => {
    if (err) throw new Error('mysql failed connection');
    console.log('connected to SQL server');
});

function runSQL(query) {
    return new Promise((resolve, reject) => {
        db.query(query, function (err, results) {
            if (err) reject(err)
            else resolve(results)
        });
    });
}