import ConfigurationSettingsController from "./ConfigurationSettingsController";

const express = require ('express');
const router = express.Router();
const configurationController = new ConfigurationSettingsController();


router.get('/getAllParameters', configurationController.getAllParameters);

router.post('/addParameter', configurationController.createParameter);

router.post('/deleteParameter', configurationController.deleteParameter);

router.post('/updateParameter', configurationController.updateParameter);

module.exports = router;