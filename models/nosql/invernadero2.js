const mongoose = require ("mongoose");

const invernadero2Schema = new mongoose.Schema({
  temperaturai2: {
    type: Number,
  },
  humedadi2: {
    type: Number,
  },
  humedad_suelo1i2: {
    type: Number,
  },
  humedad_suelo2i2: {
    type: Number,
  },
  co2i2: {
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
module.exports = mongoose.model('invernadero2', invernadero2Schema)