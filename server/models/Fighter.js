//Fighter Schema to the Universe Model
const { Schema, model, Types } = require('mongoose');
const bcrypt = require('bcrypt');
const { processFileUploads } = require('apollo-server-core');
const { GraphQLString } = require('graphql');


const fighterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    fighters: [{
        fighterId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        image: {
            type: String
        },
        universe: {
            type: String
        },
        character: {
            type: String
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

    }]


}, {
    _id:false
})
const Fighter = model('Fighter', fighterSchema);
module.exports = Fighter;