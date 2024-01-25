const express =require("express");
const { gettasks, gettask, createtask, updatetask, deletetask } = require("../controllers/task");
const router = express.Router();
/**Lista los usuarios */

router.get("/",gettasks);

/**Obtener un detalle de usuario */

router.get("/:id", gettask);

/**Crea un registro de usuario */
router.post("/", createtask);


/**Actualizar un registro de usuario */
router.put("/:id", updatetask);

/**Eliminar un rusuario */

router.delete("/:id", deletetask);



module.exports = router;
