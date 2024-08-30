const Incident = require('../models/Incident');
const Community = require('../models/Community');
const Donation = require('../models/Donation');
const Location = require('../models/Location');
const EmergencyContact = require('../models/EmergencyContact');

const home = async(req, res) => {
    try {
        // Step 1: Find all running incidents
        const runningIncidents = await Incident.find({ Status: "Running" });
    
        // Step 2: Extract all IncidentIDs from runningIncidents
        const incidentIDs = runningIncidents.map(incident => incident.IncidentID);
    
        // Step 3: Use IncidentIDs to retrieve information from the Location collection
        const locations = await Location.find({ IncidentID: { $in: incidentIDs } });

        const locationIDs = locations.map(location => location.LocationID);

        const contacts = await EmergencyContact.find({ locationID: { $in: locationIDs } });

        // Step 4: Send the retrieved locations in the response
        res.status(200).json({ runningIncidents, locations, contacts });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}

module.exports = {
    home
}