var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
    name : String,
    mOffice : Number,
    mPersonal : Number,
    address : String
});

module.exports = mongoose.model('Contact', contactSchema);