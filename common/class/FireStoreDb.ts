import admin from "firebase-admin";

export default class FireStoreDb{

    public static instance : FireStoreDb;
    public db : any;

    static getInstance() {
        if (!FireStoreDb.instance) {
            FireStoreDb.instance = new FireStoreDb();
        }
        return FireStoreDb.instance;
    }

    constructor(){
        this.db = admin.firestore();
    }

    public getCollection(collectionName : string) : any{
        return this.db.collection(collectionName);
    }
}