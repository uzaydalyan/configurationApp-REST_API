import Configuration from "./model/Configuration";
import FireStoreDb from "../common/class/FireStoreDb";
import {DocumentData} from "@google-cloud/firestore";
import {firestore} from "firebase-admin";
import QuerySnapshot = firestore.QuerySnapshot;
import Parameter from "../ConfigurationSettings/model/Parameter";


export default class ConfigurationsRepository {

    static async getConfigurations(): Promise<Configuration[] | null> {
        var configurations: Configuration[] = [];
        try {
            let querySnapshot: QuerySnapshot<DocumentData> = await FireStoreDb.getInstance().getCollection("parameter").get()
            querySnapshot.forEach(document => {
                configurations.push({
                    parameter_key: document.get("parameter_key"),
                    value: document.get("value")
                })
            })
        } catch (e) {
            return null;
        }

        return configurations;
    }
}