const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const diarySchema = new Schema({
    posted: {
        type: Date,
        default: Date.now()
    },
    description: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Diary', diarySchema, 'diary');