import * as bodyParser from 'body-parser'
import * as dotenv from 'dotenv';
var cors = require('cors')
const router = require('./routes/router')
const express = require('express');
dotenv.config();

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', router);

initFirebase()


app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});

function initFirebase() {
    var admin = require("firebase-admin");
    // @ts-ignore
    var serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

export {};