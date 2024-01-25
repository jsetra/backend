const express =require("express");
const { getusers, getuser, createuser, updateuser, deleteuser } = require("../controllers/user");
const router = express.Router();
const {validatorCreateuser, validatorGetuser} = require("../validators/user")

/**
 * @swagger
 * components:
 *  schemas:
 *   user:
 *      type: object
 *      properties:
 *          name:
 *              type: string
 *              description: Nombre de Usuario
 *          email:
 *              type: string
 *              description: Email de Usuario
 *          role:
 *              type: string
 *              description: Rol de usuario [admin/user]
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
 * /api/user:
 *  post: 
 *    summary: crear usuario
 *    tags: [user]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/user'
 *    responses:
 *      200:
 *        description: nuevo usuario creado
 */
/**
 * @swagger
 * /api/user/{id}:
 *  get: 
 *    summary: Listar usuario
 *    tags: [user]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Listar Usuario
 *    responses:
 *      200:
 *        description: Listar usuario
 *        content:
 *          application/json:
 *            schema: 
 *              type: object
 *              $ref: '#/components/schemas/user'
 *      404:
 *        description: user not found
 * 
 */

/**
 * @swagger
 * /api/user:
 *  get: 
 *    summary: Listar usuarios
 *    tags: [user]
 *    responses:
 *      200:
 *        description: Listar todos los usuarios
 *        content: 
 *          application/json: 
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/user'
 */
/**
 * @swagger
 * /api/user:
 *  put: 
 *    summary: Actualizar usuario
 *    tags: [user]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/user'
 *          required:
 *            - name
 *            - email
 *            - role
 *    responses:
 *      200:
 *        description: Actualizar usuario
 */

/**
 * @swagger
 * /api/user:
 *  delete: 
 *    summary: Eliminar usuario
 *    tags: [user]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/user'
 *          required:
 *            - name
 *            - email
 *            - role
 *    responses:
 *      200:
 *        description: Eliminar usuario
 */
router.get("/",getusers);

/**Obtener un detalle de usuario */

router.get("/:id", validatorGetuser, getuser);

/**Crea un registro de usuario */
router.post("/", validatorCreateuser, createuser); 


/**Actualizar un registro de usuario */
router.put("/:id", validatorGetuser, validatorCreateuser, updateuser);

/**Eliminar un rusuario */

router.delete("/:id", validatorGetuser, deleteuser);



module.exports = router;
