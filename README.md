
# Configuration APP - REST API

REST API of the configuration app. It is built using Node.js, Express.js, Firestore as the database, and TypeScript for enhanced type safety and code maintainability.




## Environment Variables

To run this project you will need to add the following environment variables to your .env file.

`PRIVATE_KEY_ID`

`PRIVATE_KEY`

`CLIENT_EMAIL`

`CLIENT_ID`

`CLIENT_CERT_URL`

All of these variables are from Firebase service account config file.




  

## Run in your local machine

In order to run this api in your local machine, you need to first compile typescript code with:

`#npm run build`

Then run the compiled code with:

`#npm run start`


## REST API Documentation

This document provides an overview of the endpoints and data structures used in our REST API for managing configuration settings.

### Endpoints

This API is consisted of two modules which are "Configurations" and "ConfigurationSettings".

"Configurations" module is responsible for serving configuration of the app with all its parameters.

"ConfigurationSettings" is responsible for editing the configurations of the app by editing, creating or deleting its parameters.

#### 1. Get All Parameters

- **URL:** `/configurationSettings/getAllParameters`
- **Method:** `GET`
- **Description:** Get a list of all configuration parameters.

#### 2. Add a Parameter

- **URL:** `/configurationSettings/addParameter`
- **Method:** `POST`
- **Description:** Add a new configuration parameter.

#### 3. Delete a Parameter

- **URL:** `/configurationSettings/deleteParameter`
- **Method:** `POST`
- **Description:** Delete a configuration parameter by ID.

#### 4. Update a Parameter

- **URL:** `/configurationSettings/updateParameter`
- **Method:** `POST`
- **Description:** Update a configuration parameter by ID.

#### 5. Get Configuration of the Application

- **URL:** `/configurations/getConfigurations`
- **Method:** `GET`
- **Description:** Get configuration of the application.

### Data Structure - Configuration Parameter

An example configuration parameter is represented by the following JSON structure:

```json
{
    "id": "dJ9101fs",
    "parameter_key": "min_version",
    "value": "1.0",
    "description": "Minimum version required for the application",
    "create_date": "05/09/2023 09:30"
}
```

A configuration parameter is represented by the following JSON structure:

```json
{
    “freeUsageLimit”: "5",
    “supportEmail": "support@codeway.co",
    "privacyPage": "https://codeway.com/privacy_en.html",
    "minimumVersion": "1.0",
    "latestVersion": “2.1",
    "compressionQuality": "0.7",
    "btnText": "Try now!"
}
```
