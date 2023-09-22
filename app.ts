import * as bodyParser from 'body-parser'
var cors = require('cors')
const router = require('./routes/router')
const express = require('express');

const app = express();

app.use(cors())
app.options('*', cors());
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
            "project_id": "configurationapp-c218c",
            "private_key_id": process.env.PRIVATE_KEY_ID,
            "private_key": process.env.PRIVATE_KEY
                ? process.env.PRIVATE_KEY.replace(/\\n/g, "\n")
                : undefined,
            "client_email": process.env.CLIENT_EMAIL,
            "client_id": process.env.CLIENT_ID,
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": process.env.CLIENT_CERT_URL,
            "universe_domain": "googleapis.com"
        })
    });
}

export {};