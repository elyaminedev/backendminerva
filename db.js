const mysql = require('mysql');
const newuserquery = "insert into sql4464870.Student (firstName, lastName, email, hashvalue)"
                    +"values (?, ?, ?, ?);";
const testquery = "insert into sql4464870.Student (firstName, lastName)"
                    +"values ('yahya', 'elyamine');";

const pool = mysql.createPool({
    connectionLimit: 10,
    user: 'sql4464870',
    password: 'tjeqMWiVhF',
    database: '',
    host: "sql4.freemysqlhosting.net",
    port: '3306'
});

let students = {};

// create new account
students.newUser = (fname, lname, mail, pass) =>{
    
    return new Promise((resolve, reject) => {
        pool.query(newuserquery, [fname, lname, mail, pass], (err, results) => {
            if(err)
                return reject (err)
        
            return resolve(results);
        });
    });
};
// login

module.exports = students;