const { Schema, model } = require('mongoose');

const timeSchema = new Schema({
    time: {
        type: Number,
    }
});

const Time = model('Time', timeSchema);

module.exports = Time;

