const fs = require('fs');

class database {
  static fetchAll(){
    const geolocations = JSON.parse(
      fs.readFileSync(
        `${__dirname}/DatabaseFactory/geolocations.json`, 
        'utf-8')
    );
    return geolocations;
  }

  static save(geolocation){
    fs.writeFileSync(
      `${__dirname}/DatabaseFactory/geolocations.json`,
      JSON.stringify(geolocation),
      'utf-8'
    );
  }
}

module.exports = database;