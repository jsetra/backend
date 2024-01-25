const mongoose = require ("mongoose");

const invernadero1Schema = new mongoose.Schema({
  temperaturai1: {
    type: Number,
  },
  humedadi1: {
    type: Number,
  },
  humedad_suelo1: {
    type: Number,
  },
  humedad_suelo2: {
    type: Number,
  },
  co2i1: {
    type: Number,
  },
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
module.exports = mongoose.model('invernadero1', invernadero1Schema)