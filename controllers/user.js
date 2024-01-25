const mongoose = require("mongoose");
const {userModel} = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require("express-validator");
/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getusers = async (req, res) =>{
  try{
  const data = await userModel.find({})
  res.send({data});
  }catch(e){
    handleHttpError(res,'ERROR EN GET USUARIOS');
  }
};
/** 
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getuser = async (req, res) => {
  try {
   req = matchedData(req);
   const { id } = req;
   const data = await userModel.findById(id);
   
   if (!data) {
     return res.status(404).send({ error: "Usuario no encontrado" });
   }
   
   res.send({ data });
  } catch (e) {
   console.error("Error en getuser:", e); // Agregar esta línea para registrar el error en la consola
   handleHttpError(res, "ERROR EN GET USUARIO");
 }
};
/** 
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createuser = async(req,res) =>{
  try{
    const body = matchedData(req)
    const data = await userModel.create(body);
    res.send({data});
     }catch(e){
       handleHttpError(res,"ERROR CREANDO USUARIOS");
     }
};
/** 
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateuser = async (req, res) => {
  try {
    const {id, ...body} = matchedData(req);
    const data = await userModel.findOneAndUpdate(id, body 
    );
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};
/** 
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteuser = async (req,res) =>{  
    try{

  req = matchedData(req);
  const {id} = req;
  const data = await userModel.deleteOne({_id:id});
  res.send({data});
 }catch(e){
  handleHttpError(res,"ERROR");
}
};


module.exports={getusers, getuser, createuser, updateuser, deleteuser};