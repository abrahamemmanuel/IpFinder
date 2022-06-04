const express = require('express');
const router = express.Router();
const {getFoods} = require('../app/Http/Controllers/FoodController');

router.route('/').get(getFoods);

module.exports = router;