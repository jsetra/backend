const express =require("express");
const {getUltimocaudal, getcaudals, getcaudalSemana, getcaudal, createcaudal, updatecaudal, deletecaudal} = require("../controllers/caudal");
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   caudal:
 *      type: object
 *      properties:
 *          name:
 *              type: string
 *              description: Nombre de caudal
 *          email:
 *              type: string
 *              description: Email de caudal
 *          role:
 *              type: string
 *              description: Rol de caudal [admin/caudal]
 *      required:
 *        - name
 *        - email
 *        - role
 *      example:
 *        name: Juan Mora
 *        email: juanmora@mora.com
 *
 */

/**
 * @swagger
 * /api/caudal:
 *  post:
 *    summary: crear caudal
 *    tags: [caudal]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/caudal'
 *    responses:
 *      200:
 *        description: nuevo caudal creado
 */
/**
 * @swagger
 * /api/caudal/{id}:
 *  get:
 *    summary: Listar caudal
 *    tags: [caudal]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Listar caudal
 *    responses:
 *      200:
 *        description: Listar caudal
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/caudal'
 *      404:
 *        description: caudal not found
 *
 */

/**
 * @swagger
 * /api/caudal:
 *  get:
 *    summary: Listar caudals
 *    tags: [caudal]
 *    responses:
 *      200:
 *        description: Listar todos los caudals
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/caudal'
 */
/**
 * @swagger
 * /api/caudal:
 *  put:
 *    summary: Actualizar caudal
 *    tags: [caudal]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/caudal'
 *          required:
 *            - name
 *            - email
 *            - role
 *    responses:
 *      200:
 *        description: Actualizar caudal
 */

/**
 * @swagger
 * /api/caudal:
 *  delete:
 *    summary: Eliminar caudal
 *    tags: [caudal]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/caudal'
 *          required:
 *            - name
 *            - email
 *            - role
 *    responses:
 *      200:
 *        description: Eliminar caudal
 */

/**Lista los caudals */

// Ruta para obtener el último registro sin necesidad de un ID
router.get('/ultimo', getUltimocaudal);
router.get('/semana', getcaudalSemana);

// Rutas que esperan un ID
router.get("/:id", getcaudal);
router.put("/:id", updatecaudal);
router.delete("/:id", deletecaudal);

// Otras rutas
router.get("/", getcaudals);
router.post("/", createcaudal);



module.exports = router;