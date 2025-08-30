const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        enum:['free','premium'],
        default:'free'
    },
},{
    timestamps: true,
});

const Content = mongoose.model('Content', contentSchema);
module.exports = Content;