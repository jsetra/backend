const express =require("express");
const {getUltimoInvernadero1, getinvernadero1s, getInvernadero1Semana, getinvernadero1, createinvernadero1, updateinvernadero1, deleteinvernadero1} = require("../controllers/invernadero1");
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   invernadero1:
 *      type: object
 *      properties:
 *          name:
 *              type: string
 *              description: Nombre de invernadero1
 *          email:
 *              type: string
 *              description: Email de invernadero1
 *          role:
 *              type: string
 *              description: Rol de invernadero1 [admin/invernadero1]
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
 * /api/invernadero1:
 *  post: 
 *    summary: crear invernadero1
 *    tags: [invernadero1]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/invernadero1'
 *    responses:
 *      200:
 *        description: nuevo invernadero1 creado
 */
/**
 * @swagger
 * /api/invernadero1/{id}:
 *  get: 
 *    summary: Listar invernadero1
 *    tags: [invernadero1]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Listar invernadero1
 *    responses:
 *      200:
 *        description: Listar invernadero1
 *        content:
 *          application/json:
 *            schema: 
 *              type: object
 *              $ref: '#/components/schemas/invernadero1'
 *      404:
 *        description: invernadero1 not found
 * 
 */

/**
 * @swagger
 * /api/invernadero1:
 *  get: 
 *    summary: Listar invernadero1s
 *    tags: [invernadero1]
 *    responses:
 *      200:
 *        description: Listar todos los invernadero1s
 *        content: 
 *          application/json: 
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/invernadero1'
 */
/**
 * @swagger
 * /api/invernadero1:
 *  put: 
 *    summary: Actualizar invernadero1
 *    tags: [invernadero1]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/invernadero1'
 *          required:
 *            - name
 *            - email
 *            - role
 *    responses:
 *      200:
 *        description: Actualizar invernadero1
 */

/**
 * @swagger
 * /api/invernadero1:
 *  delete: 
 *    summary: Eliminar invernadero1
 *    tags: [invernadero1]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/invernadero1'
 *          required:
 *            - name
 *            - email
 *            - role
 *    responses:
 *      200:
 *        description: Eliminar invernadero1
 */

/**Lista los invernadero1s */

// Ruta para obtener el último registro sin necesidad de un ID
router.get('/ultimo', getUltimoInvernadero1);
router.get('/semana', getInvernadero1Semana);

// Rutas que esperan un ID
router.get("/:id", getinvernadero1);
router.put("/:id", updateinvernadero1);
router.delete("/:id", deleteinvernadero1);

// Otras rutas
router.get("/", getinvernadero1s);
router.post("/", createinvernadero1);



module.exports = router;