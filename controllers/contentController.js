const Content = require('../models/Content');

const filterContent = async (req, res) => {
    try {
        const {role} = req.user;
        let content;
        if(role === 'premium'){
            content = await Content.find({});
        }
        else {
            content = await Content.find({typr:'free'});
        }
        res.json(content);
    } catch (error) {
        res.status(500).json({message: 'Server error'});
    }
};
module.exports = { filterContent};