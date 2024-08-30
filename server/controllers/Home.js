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

        const totalAmount = await getTotalDonationAmount();

        // Step 4: Send the retrieved locations in the response
        res.status(200).json({ runningIncidents, locations, contacts, totalAmount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}

module.exports = {
    home
}