const {
    getCollection
} = require('../../db/connect');

const User = require('../../models/User');

const getCollections = async (req, res) => {
    const collection = await User.find({})
    console.log(collection);
    res.json({ message: 'hehe' , collection: collection});
}

module.exports = { getCollections };