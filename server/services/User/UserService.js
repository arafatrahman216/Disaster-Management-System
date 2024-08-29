const {
    getCollection
} = require('../../db/connect');


const GetUserCommunity = async (userId) => {
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
                if (comm.User.includes(users[i].UserID)) temp.Community.push(comm.Name);
            });
            usercom.push(temp);
        }
        console.log(usercom);
        return usercom;
}



module.exports = { GetUserCommunity };