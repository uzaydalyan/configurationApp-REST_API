import * as bodyParser from 'body-parser'
import {NextFunction, Request, Response} from "express";
var cors = require('cors')
const router = require('./routes/router')
const express = require('express');

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', router);

initFirebase()


app.listen(process.env.PORT || 4000, function(){
    console.log('now listening for requests');
});

function initFirebase() {
    var admin = require("firebase-admin");
    admin.initializeApp({
        credential: admin.credential.cert({
            "type": "service_account",
            "project_id": process.env.PROJECT_ID,
            "private_key_id": process.env.PRIVATE_KEY_ID,
            "private_key": process.env.PRIVATE_KEY
                ? process.env.PRIVATE_KEY.replace(/\\n/g, "\n")
                : undefined,
            "client_email": process.env.CLIENT_EMAIL,
            "client_id": process.env.CLIENT_ID,
            "auth_uri": process.env.AUTH_URI",
            "token_uri": process.env.TOKEN_URI,
            "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_CERT_URL,
            "client_x509_cert_url": process.env.CLIENT_CERT_URL,
            "universe_domain": "googleapis.com"
        })
    });
}

export {};
