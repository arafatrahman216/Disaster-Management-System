const home = async(req, res) => {
    try {
        res.status(200).json({message: 'Hello World!'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    home
}