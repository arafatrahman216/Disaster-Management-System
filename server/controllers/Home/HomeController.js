const {
    getCollection
} = require('../../db/connect');

const getCollections = async (req, res) => {
    try {
        const users = await getCollection('User'); 
        const comms = await getCollection('Community');
        var usercom = [];
        for (var i = 0; i < users.length; i++) {
            var temp = {
                username: users[i].Name,
                email: users[i].Email,
                Community: []
            }
            comms.forEach(comm => {
                if (comm.User.includes(users[i].UserID)) {
                    temp.Community.push(comm.Name);
                }
            });
            usercom.push(temp);
        }
        console.log(usercom);
        res.json({ message: 'hehe', user : usercom });
    } catch (error) {
        console.error("Error sending response:", error);
        res.status(400).json({ message: 'Internal Server Error', error: error.message });
    }
}


module.exports = { getCollections };