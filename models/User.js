const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    entries: [{
        date: {
            type: Date,
            default: Date.now()
        },
        text: {
            type: String,
            trim: true
        }
    }]
});

module.exports = mongoose.model('User', userSchema);