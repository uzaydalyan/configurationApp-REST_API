import ConfigurationsController from "./ConfigurationsController";

const express = require ('express');
const router = express.Router();
const configurationController = new ConfigurationsController();


router.get('/getConfigurations', configurationController.getConfigurations);

module.exports = router;