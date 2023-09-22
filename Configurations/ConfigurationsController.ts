import IConfigurationsController from "./IConfigurationsController";
import e, {NextFunction} from "express";
import FireStoreDb from "../common/class/FireStoreDb";
import {DocumentData} from "@google-cloud/firestore";
import Parameter from "../ConfigurationSettings/model/Parameter";
import {firestore} from "firebase-admin";
import QuerySnapshot = firestore.QuerySnapshot;
import Configuration from "./model/Configuration";
import ConfigurationsRepository from "./ConfigurationsRepository";


export default class ConfigurationsController implements IConfigurationsController {

    getConfigurations(req: e.Request, res: e.Response, next: NextFunction): void {
        ConfigurationsRepository.getConfigurations().then(configurations => {
            if(configurations != null){
                res.status(200).send({
                    "configurationList": configurations,
                    "result": "OK"
                })
            } else {
                res.status(500).send({
                    "configurationList": null,
                    "result": "Failed"
                })
            }
        })
    }
}