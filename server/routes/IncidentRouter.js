const express = require('express');
const router = express.Router();

const {createIncident, getIncident} = require('../controllers/Incident.js');


router.post('/create', createIncident);


router.get('/get/:id', getIncident);



module.exports = router;