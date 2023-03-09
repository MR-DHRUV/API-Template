const mongoose = require('mongoose');

// Schema for storing API keys
const KeySchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    public_key: {
        type: String,
        required: true
    },
    private_key: {
        type: String,
        required: true
    },

})


const KeyStore = mongoose.model('keys', KeySchema);
module.exports = KeyStore