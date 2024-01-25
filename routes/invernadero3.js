const express =require("express");
const { getUltimoInvernadero3, getinvernadero3s, getInvernadero3Semana, getinvernadero3, createinvernadero3, updateinvernadero3, deleteinvernadero3 } = require("../controllers/invernadero3");
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   invernadero3:
 *      type: object
 *      properties:
 *          name:
 *              type: string
 *              description: Nombre de invernadero3
 *          email:
 *              type: string
 *              description: Email de invernadero3
 *          role:
 *              type: string
 *              description: Rol de invernadero3 [admin/invernadero3]
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
 * /api/invernadero3:
 *  post: 
 *    summary: crear invernadero3
 *    tags: [invernadero3]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/invernadero3'
 *    responses:
 *      200:
 *        description: nuevo invernadero3 creado
 */
/**
 * @swagger
 * /api/invernadero3/{id}:
 *  get: 
 *    summary: Listar invernadero3
 *    tags: [invernadero3]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Listar invernadero3
 *    responses:
 *      200:
 *        description: Listar invernadero3
 *        content:
 *          application/json:
 *            schema: 
 *              type: object
 *              $ref: '#/components/schemas/invernadero3'
 *      404:
 *        description: invernadero3 not found
 * 
 */

/**
 * @swagger
 * /api/invernadero3:
 *  get: 
 *    summary: Listar invernadero3s
 *    tags: [invernadero3]
 *    responses:
 *      200:
 *        description: Listar todos los invernadero3s
 *        content: 
 *          application/json: 
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/invernadero3'
 */
/**
 * @swagger
 * /api/invernadero3:
 *  put: 
 *    summary: Actualizar invernadero3
 *    tags: [invernadero3]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/invernadero3'
 *          required:
 *            - name
 *            - email
 *            - role
 *    responses:
 *      200:
 *        description: Actualizar invernadero3
 */

/**
 * @swagger
 * /api/invernadero3:
 *  delete: 
 *    summary: Eliminar invernadero3
 *    tags: [invernadero3]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/invernadero3'
 *          required:
 *            - name
 *            - email
 *            - role
 *    responses:
 *      200:
 *        description: Eliminar invernadero3
 */

/**Lista los invernadero3s */

// Ruta para obtener el último registro sin necesidad de un ID
router.get('/ultimo', getUltimoInvernadero3);
router.get('/semana', getInvernadero3Semana);

// Rutas que esperan un ID
router.get("/:id", getinvernadero3);
router.put("/:id", updateinvernadero3);
router.delete("/:id", deleteinvernadero3);

// Otras rutas
router.get("/", getinvernadero3s);
router.post("/", createinvernadero3);


module.exports = router;