
const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const body_parser = require('body-parser');
const path = require('path');
const cookie_session = require('cookie-session');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const connect = require('./connection');

const app = express();
app.use(express.urlencoded(
    {
        extended: false
    }
));









