const {check} = require ("express-validator")
const {validateResult} = require ("../utils/handleValidator")

const validatorCreateuser =[
    check ("name").exists().notEmpty(),
(req, res, next) =>{
  return validateResult (req, res, next)
}
];


const validatorGetuser = [
  check ("id")
  .exists()
  .notEmpty(),
  (req, res, next) =>{
     return validateResult (req, res, next) 
  }

];
module.exports ={validatorCreateuser, validatorGetuser}