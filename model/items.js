const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema
const ItemsSchema = new Schema({
    name :{
        type : String,
        required:true
    },
    data:{
        type:Date,
        default:Date.now
    }
});

module.exports = Item = mongoose.model('item',ItemsSchema);