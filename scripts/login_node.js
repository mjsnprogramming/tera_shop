

const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const body_parser = require('body-parser');
const path = require('path');
const connect = require('./connection');


let app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    save_unitialized: true
}));

app.use(body_parser.urlencoded({
    extended: true
}));

app.use(body_parser.json());

app.get = function (s, f) {

};
app.get('/', function(request, response){
   response.sendFile(path.join(__dirname + '/login.html'));
});

app.post = function (s, f) {

};
app.post('/auth', function(request, response) {
    let username = request.body.username;
    let password = request.body.password;

    if (username && password) {
        login_node.query('select * from shop_users where login = ? and password = ?', [username, password]),
            function (error, results, fields) {
                if (results.length > 0) {
                    request.session.logggedin = true;
                    request.session.username = username;
                    response.redirect('/home');
                } else {
                    response.send('Incorrect username or password!');
                }
                response.end();
            }
    }

});
app.listen(3000);

