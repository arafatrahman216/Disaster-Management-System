const Incident = require('../models/Incident');
const Community = require('../models/Community');
const Donation = require('../models/Donation');

const home = async(req, res) => {
    try {
        const runningIncidents = await Incident.find({ Status: "Running" });
        res.status(200).json({ runningIncidents });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching running incidents', error: error.message });
    }

    
    
}

module.exports = {
    home
}