/*****************************************************************************
 * 
 * Importación de paquetes
 * 
 */
 const { Router } = require( 'express' );
 
 /*****************************************************************************
  * 
  * Controladores
  * 
  */
const { 
        generateJWT
      } = require( '../controller/auth.controller' );

const router = Router();

/*****************************************************************************
 * Ruta usuarios
 * 
 * /api/auth
 */


router.get( '/',  generateJWT );


/*****************************************************************************
 * 
 * Exporto las rutas
 * 
 */
 module.exports = router;