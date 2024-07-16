const getChats = async (req, res) => {
    res.json({ message: 'Community Chat', id: req.params.id });
}

module.exports = { getChats };