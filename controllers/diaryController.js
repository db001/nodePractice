const mongoose = require('mongoose');
const Diary = mongoose.model('Diary');
mongoose.Promise = global.Promise;

exports.diary = async (req, res) => {
    const entries = await Diary.find();
    res.render('diary', { title: 'My entries', entries });
};

exports.addEntry = (req, res) => {
    res.render('addEntry', { title: 'New Entry' });
};