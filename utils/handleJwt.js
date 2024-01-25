const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET;
/**
 * 
 * Se debe IMPONER el objeto del usuario
 * @param {*} user 
 */
const tokenSign = async (user) =>{
  const sign = jwt.sign(
   {
   _id: user._id,
   role: user.role,
   },
   JWT_SECRET,
   {
     expiresIn: "2h",
   }
);
  return sign
};
/**
 * Debes de pasar el token de session el JWT
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt, JWT_SECRET) =>{
  try{
      return jwt.verify()
  }catch(e){
    return null
  }

}
module.exports ={tokenSign, verifyToken}