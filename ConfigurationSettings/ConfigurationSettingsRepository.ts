import Parameter from "./model/Parameter";
import FireStoreDb from "../common/class/FireStoreDb";
import {DocumentData} from "@google-cloud/firestore";
import {firestore} from "firebase-admin";
import ConfigurationSettingsUtilities from "./ConfigurationSettingsUtilities";
import QuerySnapshot = firestore.QuerySnapshot;


export default class ConfigurationSettingsRepository {

    static async getAllParameters(): Promise<Parameter[] | null> {
        try {
            var parameterList: Parameter[] = [];
            let querySnapshot: QuerySnapshot<DocumentData> = await FireStoreDb.getInstance().getCollection("parameter").get()
            querySnapshot.forEach(document => {
                parameterList.push(ConfigurationSettingsUtilities.getParameterModelFromFirebaseDocument(document))
            })
            return parameterList;
        } catch (e) {
            return null;
        }

    }

    static async addParameter(parameter: {parameter_key : string, value : string, description : string, create_date : string}): Promise<boolean> {
        try {
            await FireStoreDb.getInstance().getCollection("parameter").add(parameter)
            return true;
        } catch (e) {
            return false;
        }
    }

    static async deleteParameter(id : string) : Promise<boolean>{

        try {
            await FireStoreDb.getInstance().getCollection("parameter").doc(id).delete()
            return true;
        } catch (e) {
            return false;
        }
    }

    static async updateParameter(parameter : Parameter): Promise<boolean> {

        let parameterWithoutId = ConfigurationSettingsUtilities.getParameterWithoutIdFromParameterModel(parameter)

        try{
            await  FireStoreDb.getInstance().getCollection("parameter").doc(parameter.id).update(parameterWithoutId)
            return true;
        }catch (e) {
            return false;
        }

    }


}