const mongoose = require("mongoose");
const {invernadero3Model} = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require("express-validator");
/** 
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getinvernadero3s = async (req, res) =>{
  try{
  const data = await invernadero3Model.find({})
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
const getinvernadero3 = async (req, res) => {
  try {
    const { id } = req.params; // Obtén el id de los parámetros de la URL

    // Verifica si el id es una cadena hexadecimal de 24 caracteres (ObjectId de MongoDB)
    if (!/^[0-9a-fA-F]{24}$/.test(id)) {
      return res.status(400).json({ error: 'Formato de ID no válido' });
    }

    const data = await invernadero3Model.findById(id);

    if (!data) {
      return res.status(404).json({ error: 'Registro no encontrado.' });
    }

    res.json({ data });
  } catch (e) {
    console.error('Error en getinvernadero3:', e);
    handleHttpError(res, 'ERROR EN GET Registro Invernadero');
  }
};

const getInvernadero3Semana = async (req, res) => {
  try {
    // Calcular la fecha de una semana antes del momento actual
    const unaSemanaAntes = new Date();
    unaSemanaAntes.setDate(unaSemanaAntes.getDate() - 2);

    // Consultar los registros que estén dentro del rango de fechas
    const data = await invernadero3Model.find({
      timestamp: { $gte: unaSemanaAntes, $lte: new Date() }
    });

    res.send({ data });
  } catch (e) {
    handleHttpError(res, 'ERROR EN GET USUARIOS');
  }
};

const getUltimoInvernadero3 = async (req, res) => {
  try {
    const ultimoRegistro = await invernadero3Model
      .findOne()
      .sort({ timestamp: -1 }); // Ordena de manera descendente por el campo timestamp

    if (!ultimoRegistro) {
      return res.status(404).json({ error: 'No se encontraron registros.' });
    }

    res.json({ data: ultimoRegistro });
  } catch (e) {
    console.error('Error en getUltimoInvernadero3:', e);
    handleHttpError(res, 'ERROR EN GET Último Registro Invernadero');
  }
};
/** 
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createinvernadero3 = async(req,res) =>{
  try {
    const nuevoinvernadero3 = new invernadero3Model(req.body);
    const resultado = await nuevoinvernadero3.save();
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
const updateinvernadero3 = async (req, res) => {
  try {
    const {id, ...body} = matchedData(req);
    const data = await invernadero3Model.findOneAndUpdate(id, body 
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
const deleteinvernadero3 = async (req,res) =>{  
    try{

  req = matchedData(req);
  const {id} = req;
  const data = await invernadero3Model.deleteOne({_id:id});
  res.send({data});
 }catch(e){
  handleHttpError(res,"ERROR");
}
};


module.exports={getUltimoInvernadero3, getinvernadero3s, getInvernadero3Semana, getinvernadero3, createinvernadero3, updateinvernadero3, deleteinvernadero3};