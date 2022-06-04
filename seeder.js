const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

dotenv.config({ path: './config/config.env' });
const Food = require('./app/Models/Food');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const foods = JSON.parse(
  fs.readFileSync(`${__dirname}/database/seeders/foods.json`, 'utf-8')
);

//remove the first element of the from food array
const removeFirstElement = () => {
  const firstElement = foods.shift();
  return firstElement;
};
//write to foods.json
const writeToFile = async() => {
  await fs.writeFileSync(
    `${__dirname}/database/seeders/foods.json`,
    JSON.stringify(foods, null, 2)
  );
};

//import data
//run node seeder -i in command line to import data
const importData = async() => {
    await Food.create(foods);
    console.log('Data Imported...'.green.inverse);
    process.exit();
};

//delete data
//run node seeder -d in command line to delete data
const deleteData = async() => {
    await Food.deleteMany();
    console.log('Data Destroyed...'.red.inverse);
    process.exit();
};

//if you are not sure if all fake data has been imported or deleted, you can use this function to delete all data or import data
//to do so, simply "run node seeder -c" in command line to check if data is already imported or not
const checkForData = async() => {
  const foods = await Food.find();
  if (foods.length > 0) {
    rl.question('This will delete all current data, are you sure? (y/n)', answer => {
      if (answer.toLowerCase() === 'y') {
        deleteData();
      } else {
        console.log('Data not Deleted...'.yellow.inverse);
        process.exit();
      }
    });
  } else if (foods.length === 0) {
    rl.question('This will seed database with fake data, are you sure? (y/n)', answer => {
      if (answer.toLowerCase() === 'y') {
        importData();
      } else {
        console.log('Data not imported...'.yellow.inverse);
        process.exit();
      }
    });
  } 
};

//check if in import or delete mode
if (process.argv[2] === '-i') {
  importData();
}

//check if in import or delete mode
if (process.argv[2] === '-d') {
  deleteData();
}

//check if in import or delete mode
if (process.argv[2] === '-c') {
  checkForData();
}