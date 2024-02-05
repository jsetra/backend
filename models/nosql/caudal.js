const mongoose = require ("mongoose");

const caudalSchema = new mongoose.Schema({

        caudal: {
            type: Number,
        },
        timestamp: {
            type: Date,
            default: Date.now
        },
    },
    {
        versionKey: false,
    }
);

module.exports = mongoose.model('caudal', caudalSchema)