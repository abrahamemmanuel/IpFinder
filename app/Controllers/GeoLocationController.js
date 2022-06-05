const GeoLocation = require('../models/GeoLocation');
const DB = require('../../database');
/**
 * @async
 * @param {object} req
 * @param {object} res
 * @returns {json} json object
 */
class GeoLocationController {
	static async findOrAddDomain(req, res) {
		try {
			const geolocation = await GeoLocation.findDomainByIpAddress(req.body.ip_address);
			if(geolocation !== null) {
				return res.status(200).json({
					status: 'success',
					message: 'Ip Geolocation fetched successfully',
					data: geolocation
				});	
			}
			await GeoLocation.AddDomain(req.body.ip_address);
			return res.status(201).json({
				status: 'success',
				message: 'Ip Geolocation added successfully',
				data: null
			});

		} catch (error) {
			console.log(error);
		}
	}

	static async getAllActiveGeolocation(req, res) {
		try {
			const geolocations = await GeoLocation.getAllDomains();
			const activeGeolocations = geolocations.filter(geolocation => geolocation.isActive === true);
			return res.status(200).json({
				status: 'success',
				message: 'All active geolocations fetched successfully',
				count: activeGeolocations.length,
				data: activeGeolocations
			});
		} catch (error) {
			console.log(error);
		}
	}

	static async getActiveGeolocationById(req, res) {
		try {
			const geolocations = await GeoLocation.getAllDomains();
			const geolocation = geolocations.find(geolocation => geolocation.id === parseInt(req.params.id) && geolocation.isActive === true);
			return res.status(200).json({
				status: 'success',
				message: 'Active Geolocation fetched successfully',
				data: geolocation
			});
		} catch (error) {
			console.log(error);
		}
	}

	static async updateGeolocationById(req, res) {
		try {
			const geolocations = await GeoLocation.getAllDomains();
			let geolocation = geolocations.find(geolocation => geolocation.id === parseInt(req.params.id));
			if(geolocation === undefined || geolocation === null) {
				return res.status(404).json({
					status: 'error',
					message: 'Geolocation not found',
					data: null
				});
			}

			const index = geolocations.indexOf(geolocation);
			geolocation = {...req.body};
			geolocation.id = geolocation.id;
			geolocation.isActive = geolocation.isActive;
			geolocations[index] = geolocation;
			DB.save(geolocations);

			return res.status(200).json({
				status: 'success',
				message: 'Geolocation updated successfully',
			});
		} catch (error) {
			console.log(error);
		}
	}

	static async deleteGeolocationById(req, res) {
		try {
			const geolocations = await GeoLocation.getAllDomains();
			let geolocation = geolocations.find(geolocation => geolocation.id === parseInt(req.params.id));
			if(geolocation === undefined || geolocation === null) {
				return res.status(404).json({
					status: 'error',
					message: 'Geolocation not found',
					data: null
				});
			}

			const index = geolocations.indexOf(geolocation);
			geolocation.isActive = false;
			geolocations[index] = geolocation;
			DB.save(geolocations);

			return res.status(200).json({
				status: 'success',
				message: 'Geolocation deleted successfully',
			});
		} catch (error) {
			console.log(error);
		}
	}
}
module.exports = GeoLocationController;