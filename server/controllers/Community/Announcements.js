const getAnnouncements = async (req, res) => {
    res.json({ message: 'Community Announcements', id: req.params.id });
}

const getCommunity = async (req, res) => {
    res.json({ Community: 'Community Announcements', Chat: 'Community Chat', id: req.params.id });
}


module.exports = { getAnnouncements, getCommunity };