



const getIncident= async(req, res) => {
    try {

        res.status(200).json({});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}

const createIncident= async(req, res) => {
    try {
        const { IncidentID , LocationID , 
            IncidentType , 
            Description, 
            CommunityID, 
            ReportedBy, 
            DateReported, 
            Urgency, Status
             } = req.body;
        const count = await User.countDocuments();
        res.status(200).json({});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}

module.exports = {
    getIncident, createIncident
}