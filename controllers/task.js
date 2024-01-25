const {taskModel} = require('../models')

/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const gettasks = async (req,res) =>{
  const data = await taskModel.find({})
  res.send({data});

};
/** 
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const gettask = (req,res) =>{};
/** 
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createtask = async(req,res) =>{
const {body} = req
console.log(body)
const data = await taskModel.create(body)
res.send({data})
};
/** 
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updatetask = (req,res) =>{};
/** 
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deletetask = (req,res) =>{};


module.exports={gettasks, gettask, createtask, updatetask, deletetask};