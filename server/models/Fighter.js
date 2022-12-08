//Fighter Schema to the Universe Model
const { Schema } = require('mongoose');

const fighterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    strength: {
        type: Number,
        required: true
    },
    defense: {
        type: Number,
        required: true
    },
    agility: {
        type: Number,
        required: true
    },
    will: {
        type: Number,
        required: true
    },
    chance: {
        type: Number,
        required: true
    }
})

module.exports = fighterSchema;