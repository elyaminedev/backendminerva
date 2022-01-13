const mysql = require('mysql');
// query that inserts user registration data inside of a new row
const newuserquery = "insert into sql4464870.Student (firstName, lastName, email, hashvalue)"
                    +"values (?, ?, ?, ?);";

// testing query
const testquery = "insert into sql4464870.Student (firstName, lastName)"
                    +"values ('yahya', 'elyamine');";
const loginquery = "select id from sql4464870.Student where email = ? and hashvalue = ?;"

// db connection
const pool = mysql.createPool({
    connectionLimit: 10,
    user: 'sql4464870',
    password: 'tjeqMWiVhF',
    database: '',
    host: "sql4.freemysqlhosting.net",
    port: '3306'
});

// new obj
let students = {};

// create new account
students.newUser = (fname, lname, mail, pass) =>{
    
    // promise allowing asynchrony
    return new Promise((resolve, reject) => {
        pool.query(newuserquery, [fname, lname, mail, pass], (err, results) => {
            if(err)
                return reject (err);
        
            return resolve(results);
        });
    });
};

students.login = (email, pass) =>{
    
    // promise allowing asynchrony
    return new Promise((resolve, reject) => {
        pool.query(loginquery, [email, pass], (err, results) => {
            if(err)
                return reject (err);
        
            return resolve(results);
        });
    });
};

// exporting students obj
module.exports = students;