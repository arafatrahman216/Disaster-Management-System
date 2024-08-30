const Incident = require('../models/Incident');
const Location = require('../models/Location');

const getAllIncidents = async(req, res) => {
    try {
        const incidents = await Incident.find({});

        const incidentsWithLocation = await Promise.all(
            incidents.map(async (incident) => {
            const location = await Location.findById(incident.locationID);
            return {
                ...incident._doc, // Spread the incident details
                location, // Add the location details
            };
            })
        );

        res.status(200).json({incidents: incidentsWithLocation});
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

            res.status(201).json({newIncident });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}





module.exports = {
    getAllIncidents , createIncident, updateIncident
}