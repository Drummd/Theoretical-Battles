//Universe Model
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const fighterSchema = require('./Fighter');

const universeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,

    },
    fighters: [fighterSchema]
})

const Universe = model('Universe', universeSchema);

module.exports = Universe;