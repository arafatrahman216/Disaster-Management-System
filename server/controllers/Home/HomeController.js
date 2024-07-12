const {
    getCollection
} = require('../../db/connect');

const getCollections = async (req, res) => {
    const collection = await getCollection('User');
    console.log(collection);
    res.json({ message: 'hehe' , collection: collection});
}

module.exports = { getCollections };