const { Schema, model } = require('mongoose');

const scheduleSchema = new Schema({
    date: {
        type: String,
    },
    day: {
        type: String,
    },
    time: {
        type: String,
    },
    username : {
        type: String,
    }
});

const Schedule = model('Schedule', scheduleSchema);

module.exports = Schedule ;