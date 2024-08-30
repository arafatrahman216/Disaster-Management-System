const Incident = require('../models/Incident');
const Community = require('../models/Community');
const Donation = require('../models/Donation');
const Location = require('../models/Location');
const EmergencyContact = require('../models/EmergencyContact');

async function getTotalDonationAmount() {
    try {
        // Fetch all donations and sum up the amounts
        const totalAmount = await Donation.aggregate([
            {
                $group: {
                    _id: null,
                    totalAmount: { $sum: "$Amount" }
                }
            }
        ]);

        // If no donations, totalAmount will be 0
        return totalAmount.length > 0 ? totalAmount[0].totalAmount : 0;
    } catch (err) {
        console.error('Error calculating total donation amount:', err);
        throw err;
    }
}

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
        
        

        const totalAmount = await getTotalDonationAmount();

        // Step 4: Send the retrieved locations in the response
        res.status(200).json({ incidentList, locations, contacts, MapLocation,totalAmount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}  

const getAllLocations = async (req, res)=>{
    const AllLocations = await Location.find({});
    res.json({AllLocations});
}

module.exports = {
    home,
    getAllLocations
}