import * as admin from 'firebase-admin'
import {Request, Response, NextFunction} from "express";

export class AuthorizationChecker {

    public firbaseAuthCheck(req : Request, res : Response, next : NextFunction): void {

        if (req.header('Authorization')) {
            admin.auth().verifyIdToken(<string>req.header('Authorization'))
                .then(user => {
                    res.locals.user = user
                    next()
                })
                .catch(err => {res.status(401).json(err)})
        } else {
            res.status(401).json({ error: 'Authorization header is not found'})
        }
    }
}