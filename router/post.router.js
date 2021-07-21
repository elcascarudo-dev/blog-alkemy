/*****************************************************************************
 * 
 * Importación de paquetes
 * 
 */
const { Router } = require( 'express' );

/*****************************************************************************
 * 
 * Middlewares
 * 
 */
const { validarJWT } = require( '../middleware/validar-jwt.middleware' );

/*****************************************************************************
 * 
 * Controladores
 * 
 */
const { 
        create,
        read,
        readId,
        update,
        eliminar
      } = require( '../controller/post.controller' );

const router = Router();

/*****************************************************************************
 * Ruta usuarios
 * 
 * /api/category
 */

router.get( '/',        read );
router.get( '/:id',     readId );
router.post( '/',       validarJWT, create );
router.delete( '/:id',  validarJWT, eliminar );
router.patch( '/:id',   validarJWT, update );


/*****************************************************************************
 * 
 * Exporto las rutas
 * 
 */
 module.exports = router;