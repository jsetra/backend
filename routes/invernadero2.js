const express =require("express");
const { getUltimoInvernadero2, getinvernadero2s, getInvernadero2Semana, getinvernadero2, createinvernadero2, updateinvernadero2, deleteinvernadero2 } = require("../controllers/invernadero2");
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   invernadero2:
 *      type: object
 *      properties:
 *          name:
 *              type: string
 *              description: Nombre de invernadero2
 *          email:
 *              type: string
 *              description: Email de invernadero2
 *          role:
 *              type: string
 *              description: Rol de invernadero2 [admin/invernadero2]
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
 * /api/invernadero2:
 *  post: 
 *    summary: crear invernadero2
 *    tags: [invernadero2]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/invernadero2'
 *    responses:
 *      200:
 *        description: nuevo invernadero2 creado
 */
/**
 * @swagger
 * /api/invernadero2/{id}:
 *  get: 
 *    summary: Listar invernadero2
 *    tags: [invernadero2]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Listar invernadero2
 *    responses:
 *      200:
 *        description: Listar invernadero2
 *        content:
 *          application/json:
 *            schema: 
 *              type: object
 *              $ref: '#/components/schemas/invernadero2'
 *      404:
 *        description: invernadero2 not found
 * 
 */

/**
 * @swagger
 * /api/invernadero2:
 *  get: 
 *    summary: Listar invernadero2s
 *    tags: [invernadero2]
 *    responses:
 *      200:
 *        description: Listar todos los invernadero2s
 *        content: 
 *          application/json: 
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/invernadero2'
 */
/**
 * @swagger
 * /api/invernadero2:
 *  put: 
 *    summary: Actualizar invernadero2
 *    tags: [invernadero2]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/invernadero2'
 *          required:
 *            - name
 *            - email
 *            - role
 *    responses:
 *      200:
 *        description: Actualizar invernadero2
 */

/**
 * @swagger
 * /api/invernadero2:
 *  delete: 
 *    summary: Eliminar invernadero2
 *    tags: [invernadero2]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/invernadero2'
 *          required:
 *            - name
 *            - email
 *            - role
 *    responses:
 *      200:
 *        description: Eliminar invernadero2
 */

/**Lista los invernadero2s */

// Ruta para obtener el último registro sin necesidad de un ID
router.get('/ultimo', getUltimoInvernadero2);
router.get('/semana', getInvernadero2Semana);

// Rutas que esperan un ID
router.get("/:id", getinvernadero2);
router.put("/:id", updateinvernadero2);
router.delete("/:id", deleteinvernadero2);

// Otras rutas
router.get("/", getinvernadero2s);
router.post("/", createinvernadero2);



module.exports = router;