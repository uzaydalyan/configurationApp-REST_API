const ConfigurationSettingsRouter = require('../ConfigurationSettings/ConfigurationSettingsRouter');
const ConfigurationsRouter = require('../Configurations/ConfigurationsRouter')
import {AuthorizationChecker} from '../middleware/Auth';

const express = require ('express');
const router = express.Router();

const auth = new AuthorizationChecker();

router.use(auth.firbaseAuthCheck);
router.use('/configurationSettings', ConfigurationSettingsRouter);
router.use('/configurations', ConfigurationsRouter);

module.exports = router;