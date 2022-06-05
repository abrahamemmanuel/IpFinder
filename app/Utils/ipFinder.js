const dotenv = require('dotenv');
const DB = require('../../database');
dotenv.config({ path: './config/config.env' });
const IPGeolocationAPI = require('ip-geolocation-api-javascript-sdk');
const GeolocationParams = require('ip-geolocation-api-javascript-sdk/GeolocationParams.js');
const ipgeolocationApi = new IPGeolocationAPI(process.env.IP_GEOLOCATION_API_KEY, true); 

function handleResponse(payload) {
	const geolocations = DB.fetchAll();
	const newRecord = {};
	newRecord.id = geolocations.length + 1;
	newRecord.ipAddress = payload.ip;
	newRecord.long = payload.longitude;
	newRecord.lat = payload.latitude;
	newRecord.geoname_id = payload.geoname_id;
	newRecord.isActive = true;
	geolocations.push(newRecord);
	DB.save(geolocations);
	return newRecord;
}

const ipFinder = (domain) => {
	const geolocationParams = new GeolocationParams();
	geolocationParams.setIPAddress(domain); 
	geolocationParams.setFields('geoname_id,latitude,longitude');
	ipgeolocationApi.getGeolocation(handleResponse, geolocationParams);
}

module.exports =  ipFinder;
    