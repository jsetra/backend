const mongoose = require ("mongoose");

const invernadero3Schema = new mongoose.Schema({
  temperaturai3: {
    type: Number,
  },
  humedadi3: {
    type: Number,
  },
  co2i3: {
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
module.exports = mongoose.model('invernadero3', invernadero3Schema)