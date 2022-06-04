const express = require('express');
const router = express.Router();
const {findOrAddIp} = require('../app/Controllers/IpFinderController');

router.route('/find-add').post(findOrAddIp);

module.exports = router;