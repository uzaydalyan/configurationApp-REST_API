import { NextFunction, Request, Response } from "express";
import IConfigurationSettingsController from "./IConfigurationSettingsController";
import FireStoreDb from "../common/class/FireStoreDb";
import Parameter from "./model/Parameter";
import ConfigurationSettingsRepository from "./ConfigurationSettingsRepository";
import ConfigurationSettingsUtilities from "./ConfigurationSettingsUtilities";

export default class ConfigurationSettingsController implements IConfigurationSettingsController {

    public createParameter(req: Request, res: Response, next: NextFunction): void {
        let parameter = ConfigurationSettingsUtilities.getParameterWithoutIdFromRequest(req.body);

        ConfigurationSettingsRepository.addParameter(parameter).then(result => {
            if(result){
                res.status(200).send({
                    "result": "OK",
                    "parameter": req.body
                })
            } else{
                res.status(500).send({
                    "result": "Failed",
                    "parameter": null
                })
                next()
            }

        })
    }

    getAllParameters(req: Request, res: Response, next: NextFunction): void {

        ConfigurationSettingsRepository.getAllParameters().then(parameterList => {
            if(parameterList != null){
                res.status(200).send({
                    "parameterList": parameterList,
                    "result": "OK"
                })
            } else {
                res.status(500).send({
                    "parameterList": null,
                    "result": "Failed"
                })
                next()
            }
        })
    }
    updateParameter(req: Request, res: Response, next: NextFunction): void {

        let parameter : Parameter = {
            id: req.body.id,
            parameter_key: req.body.parameter.parameter_key,
            value: req.body.parameter.value,
            description: req.body.parameter.description,
            create_date: req.body.parameter.create_date
        }

        ConfigurationSettingsRepository.updateParameter(parameter).then(result => {
            if(result){
                res.status(200).send({
                    "result": "OK",
                })
            } else{
                res.status(500).send({
                    "result": "Failed",
                })
                next()
            }
        })
    }
    deleteParameter(req: Request, res: Response, next: NextFunction): void {

        ConfigurationSettingsRepository.deleteParameter(req.body.id).then(result => {
            if(result){
                res.status(200).send({
                    "result": "OK",
                })
            } else{
                res.status(500).send({
                    "result": "Failed",
                })
                next()
            }
        })
    }

}