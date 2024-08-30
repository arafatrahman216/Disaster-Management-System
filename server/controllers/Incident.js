const Incident = require('../models/Incident');
const Location = require('../models/Location');

const getAllIncidents = async(req, res) => {
    try {
        // Fetch all incidents
        const incidents = await Incident.find({});
        
        // Fetch all locations
        const locations = await Location.find({});
        
        // Create a map of location ID to location document for quick lookup
        const locationMap = locations.reduce((map, location) => {
            map[location.LocationID] = location;
            return map;
        }, {});
        
        // Combine incidents with their corresponding locations
        const incidentsWithLocation = incidents.map(incident => {
            return {
                ...incident.toObject(),
                Location: locationMap[incident.LocationID] || null
            };
        });
        
        res.status(200).json({ incidents: incidentsWithLocation });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}

const updateIncident = async(req, res) => {
    try {
        const {IncidentID} = req.params;
        const {Volunteers , AffectedIndividual, ApproximateaffectedCount ,LocationID, IncidentType,  Description, CommunityID, ReportedBy, DateReported, Urgency, Status} = req.body;
        const updatedIncident = await Incident.findOneAndUpdate({IncidentID}, {Volunteers , AffectedIndividual, ApproximateaffectedCount ,LocationID, IncidentType,  Description, CommunityID, ReportedBy, DateReported, Urgency, Status}, {new: true});
        res.status(200).json({updatedIncident});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createIncident= async(req, res) => {
    try {
        const {LocationID , 
            IncidentType , 
            Description, 
            CommunityID, 
            ReportedBy, 
            DateReported, 
            Urgency, Status
        } = req.body;

        const count = await Incident.countDocuments();
        const IncidentID = count + 1;
        try {
            const newIncident = await Incident.create({ IncidentID ,LocationID , IncidentType , 
                Description, 
                CommunityID, 
                ReportedBy, 
                DateReported, 
                Urgency, Status});
                console.log(newIncident);
                
            res.status(201).json({newIncident });

        } catch (error) {
            console.log(error);
            
            res.status(500).json({ error: error.message });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}





module.exports = {
    getAllIncidents , createIncident, updateIncident
}