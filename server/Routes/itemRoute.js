const express = require('express');
const router = express.Router();
const {createitem,getitems} = require('../Controllers/itemControllers.js')
// Create a new item
router.post('/',createitem ).get('/',getitems);

module.exports = router;
