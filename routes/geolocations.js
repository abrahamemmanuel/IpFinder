const express = require('express');
const router = express.Router();
const {findOrAddDomain, getAllActiveGeolocation, getActiveGeolocationById, updateGeolocationById, deleteGeolocationById} = require('../app/Controllers/GeoLocationController');

router.route('/find-add').post(findOrAddDomain);
router.route('/active-ips').get(getAllActiveGeolocation);
router.route('/active-ips/:id').get(getActiveGeolocationById);
router.route('/active-ips/:id').put(updateGeolocationById);
router.route('/active-ips/:id').delete(deleteGeolocationById);

module.exports = router;