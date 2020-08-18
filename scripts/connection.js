

let mysql = require('mysql');

let connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database:  'shop_users'
});

connection.connect(function(err) {
    if (err) {
        throw err;
    }
    else {

    }
});