const ipFinder = require('../Utils/ipFinder');
const DB = require('../../database');

class GeoLocation {

	static async AddDomain(ipAddress){
		return ipFinder(ipAddress);
	}

	static async findDomainByIpAddress(ipAddress){
		let data = null;
		DB.fetchAll().forEach(geolocation => {
			if(geolocation.ipAddress === ipAddress){
				data = geolocation;
			}
		});
		return data;
	}

	static async getAllDomains(){
		return DB.fetchAll();
	}
}

module.exports = GeoLocation;