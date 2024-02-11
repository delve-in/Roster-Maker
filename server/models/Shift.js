const { Schema, model } = require('mongoose');

const shiftSchema = new Schema({
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

const Shift = model('Shift', shiftSchema);

module.exports = Shift ;
