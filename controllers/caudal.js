const mongoose = require("mongoose");
const {caudalModel} = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require("express-validator");
/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getcaudals = async (req, res) =>{
    try{
        const data = await caudalModel.find({})
        res.send({data});
    }catch(e){
        handleHttpError(res,'ERROR EN GET INVERNADEROS');
    }
};
/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getcaudal = async (req, res) => {
    try {
        const { id } = req.params; // Obtén el id de los parámetros de la URL

        // Verifica si el id es una cadena hexadecimal de 24 caracteres (ObjectId de MongoDB)
        if (!/^[0-9a-fA-F]{24}$/.test(id)) {
            return res.status(400).json({ error: 'Formato de ID no válido' });
        }

        const data = await caudalModel.findById(id);

        if (!data) {
            return res.status(404).json({ error: 'Registro no encontrado.' });
        }

        res.json({ data });
    } catch (e) {
        console.error('Error en getinvernadero1:', e);
        handleHttpError(res, 'ERROR EN GET Registro Invernadero');
    }
};

const getcaudalSemana = async (req, res) => {
    try {
        // Calcular la fecha de una semana antes del momento actual
        const unaSemanaAntes = new Date();
        unaSemanaAntes.setDate(unaSemanaAntes.getDate() - 2);

        // Consultar los registros que estén dentro del rango de fechas
        const data = await caudalModel.find({
            timestamp: { $gte: unaSemanaAntes, $lte: new Date() }
        });

        res.send({ data });
    } catch (e) {
        handleHttpError(res, 'ERROR EN GET SEMANA');
    }
};


const getUltimocaudal = async (req, res) => {
    try {
        const ultimoRegistro = await caudalModel
            .findOne()
            .sort({ timestamp: -1 }); // Ordena de manera descendente por el campo timestamp

        if (!ultimoRegistro) {
            return res.status(404).json({ error: 'No se encontraron registros.' });
        }

        res.json({ data: ultimoRegistro });
    } catch (e) {
        console.error('Error en getUltimoInvernadero1:', e);
        handleHttpError(res, 'ERROR EN GET Último Registro Invernadero');
    }
};


/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createcaudal = async(req,res) =>{
    try {
        const nuevocaudal = new caudalModel(req.body);
        const resultado = await nuevocaudal.save();
        res.status(201).json({ data: resultado });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error al guardar los datos en la base de datos' });
    }
}
/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updatecaudal = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req);
        const data = await caudalModel.findOneAndUpdate(id, body
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
const deletecaudal = async (req,res) =>{
    try{

        req = matchedData(req);
        const {id} = req;
        const data = await caudalModel.deleteOne({_id:id});
        res.send({data});
    }catch(e){
        handleHttpError(res,"ERROR");
    }
};


module.exports={getcaudals, getcaudal, getcaudalSemana, getUltimocaudal, createcaudal, updatecaudal, deletecaudal};