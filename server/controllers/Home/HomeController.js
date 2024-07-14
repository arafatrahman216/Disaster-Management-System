// const {
//     getCollection
// } = require('../../db/connect');
// const User = require('../../models/User');

const { GetUserCommunity } = require('../../services/User/UserService');

const getCollections = async (req, res) => {
    try {
        const usercom = await GetUserCommunity();
        res.json({ message: 'hehe', user : usercom });
    } catch (error) {
        console.error("Error sending response:", error);
        res.status(400).json({ message: 'Internal Server Error', error: error.message });
    }
}

module.exports = { getCollections };