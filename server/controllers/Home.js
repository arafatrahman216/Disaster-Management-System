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
        // console.log(runningIncidents);
        // console.log(incidentIDs);
        // console.log(locations);
        // console.log(contacts);
        
        var incidentList = [];
        var MapLocation = [];
        for (var i = 0; i < runningIncidents.length; i++){
            var incident = runningIncidents[i];
            var location = locations.find(location => location.LocationID === incident.LocationID);
            incidentList.push({
                IncidentID: incident.IncidentID,
                IncidentType: incident.IncidentType,
                Description: incident.Description,
                Location: location.Address,
                DateReported: JSON.stringify(incident.DateReported).split('T')[0],
                Urgency: incident.Urgency,
                Status: incident.Status,
                Longitude: location.Longitude,
                Latitude : location.Latitude,
            });
            MapLocation.push({
                position: [location.Latitude, location.Longitude],
                popupText: incident.IncidentType
            });

        }
        console.log(incidentList);
        
        

        // Step 4: Send the retrieved locations in the response
        res.status(200).json({ incidentList, locations, contacts, MapLocation });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}

module.exports = {
    home
}