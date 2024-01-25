const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
   name :{
     type :String,
   },
   age:{
    type: Number,
   },
   email:{
    type: String,
   },
   password:{
      type: String,
      select:false
   },
   role:{
      type: ["user","admin"],
      default: "user",
   },
  },
   {
    timestamps:true, // Todo createAt, updateAt
    versionkey:false,
   }
);

module.exports = mongoose.model('user', userSchema);