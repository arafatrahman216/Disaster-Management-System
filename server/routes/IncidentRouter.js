const express = require('express');
const router = express.Router();

const {getAllIncidents , createIncident , updateIncident} = require('../controllers/Incident');

router.get('' , getAllIncidents);
router.post('/create' , createIncident);
router.get('/:id' , updateIncident);

module.exports = router;