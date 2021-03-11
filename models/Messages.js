const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    name: String,
    email: String,
    message: String,
    
});

module.exports = mongoose.model('Messages', MessageSchema);