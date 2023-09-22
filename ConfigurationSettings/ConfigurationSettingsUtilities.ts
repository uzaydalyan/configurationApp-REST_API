import {DocumentData} from "@google-cloud/firestore";
import {firestore} from "firebase-admin";
import Parameter from "./model/Parameter";


export default class ConfigurationSettingsUtilities{


    public static getParameterModelFromFirebaseDocument(document:  firestore.QueryDocumentSnapshot<DocumentData>){
        return{
            id: document.id,
            description: document.get("description"),
            create_date: document.get("create_date"),
            parameter_key: document.get("parameter_key"),
            value: document.get("value")
        }
    }

    public static getParameterWithoutIdFromRequest(parameter : {parameter_key : string, value : string, description : string, create_date : string}){
        return {
            "parameter_key": parameter.parameter_key,
            "value": parameter.value,
            "description": parameter.description,
            "create_date": parameter.create_date
        }
    }

    public static getParameterWithoutIdFromParameterModel(parameter : Parameter){
        return {
            "parameter_key": parameter.parameter_key,
            "value": parameter.value,
            "description": parameter.description,
            "create_date": parameter.create_date
        }
    }
}