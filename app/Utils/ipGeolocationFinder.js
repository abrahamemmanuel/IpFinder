const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const IPGeolocationAPI = require('ip-geolocation-api-javascript-sdk');
const GeolocationParams = require('ip-geolocation-api-javascript-sdk/GeolocationParams.js');
const ipgeolocationApi = new IPGeolocationAPI(process.env.IP_GEOLOCATION_API_KEY, false); 

function handleResponse(json) {
  console.log(json);
}

const ipFinder = (ipAddress) => {
	const geolocationParams = new GeolocationParams();
	geolocationParams.setIPAddress(req.body.ip_address); 
	geolocationParams.setFields('geoname_id,latitude,longitude');
	return ipgeolocationApi.getGeolocation(handleResponse, geolocationParams);
}

module.exports =  ipFinder;
    