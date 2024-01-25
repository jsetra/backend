const { handleHttpError } = require("../utils/handleError")

const authMiddleware = (req, res, next) => {
  try{

  }catch(e){
     handleHttpError (res,"NOT_SESSION", 401);
  }

}

module.exports = authMiddleware