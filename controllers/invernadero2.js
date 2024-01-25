const mongoose = require("mongoose");
const {invernadero2Model} = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require("express-validator");
/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getinvernadero2s = async (req, res) =>{
  try{
  const data = await invernadero2Model.find({})
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
const getinvernadero2 = async (req, res) => {
  try {
    const { id } = req.params; // Obtén el id de los parámetros de la URL

    // Verifica si el id es una cadena hexadecimal de 24 caracteres (ObjectId de MongoDB)
    if (!/^[0-9a-fA-F]{24}$/.test(id)) {
      return res.status(400).json({ error: 'Formato de ID no válido' });
    }

    const data = await invernadero2Model.findById(id);

    if (!data) {
      return res.status(404).json({ error: 'Registro no encontrado.' });
    }

    res.json({ data });
  } catch (e) {
    console.error('Error en getinvernadero2:', e);
    handleHttpError(res, 'ERROR EN GET Registro Invernadero');
  }
};


const getInvernadero2Semana = async (req, res) => {
  try {
    // Calcular la fecha de una semana antes del momento actual
    const unaSemanaAntes = new Date();
    unaSemanaAntes.setDate(unaSemanaAntes.getDate() - 2);

    // Consultar los registros que estén dentro del rango de fechas
    const data = await invernadero2Model.find({
      timestamp: { $gte: unaSemanaAntes, $lte: new Date() }
    });

    res.send({ data });
  } catch (e) {
    handleHttpError(res, 'ERROR EN GET USUARIOS');
  }
};

const getUltimoInvernadero2 = async (req, res) => {
  try {
    const ultimoRegistro = await invernadero2Model
      .findOne()
      .sort({ timestamp: -1 }); // Ordena de manera descendente por el campo timestamp

    if (!ultimoRegistro) {
      return res.status(404).json({ error: 'No se encontraron registros.' });
    }

    res.json({ data: ultimoRegistro });
  } catch (e) {
    console.error('Error en getUltimoInvernadero2:', e);
    handleHttpError(res, 'ERROR EN GET Último Registro Invernadero');
  }
};
/** 
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */

const createinvernadero2 = async(req,res) =>{
  try {
    const nuevoinvernadero2 = new invernadero2Model(req.body);
    const resultado = await nuevoinvernadero2.save();
    res.status(201).json({ data: resultado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al guardar los datos en la base de datos' });
  }
};
/** 
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateinvernadero2 = async (req, res) => {
  try {
    const {id, ...body} = matchedData(req);
    const data = await invernadero2Model.findOneAndUpdate(id, body 
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
const deleteinvernadero2 = async (req,res) =>{  
    try{

  req = matchedData(req);
  const {id} = req;
  const data = await invernadero2Model.deleteOne({_id:id});
  res.send({data});
 }catch(e){
  handleHttpError(res,"ERROR");
}
};


module.exports={getUltimoInvernadero2, getinvernadero2s, getInvernadero2Semana, getinvernadero2, createinvernadero2, updateinvernadero2, deleteinvernadero2};