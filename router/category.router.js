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
        create,
        read,
        readId,
        update,
        eliminar
      } = require( '../controller/category.controller' );

const router = Router();

/*****************************************************************************
 * Ruta usuarios
 * 
 * /api/category
 */

router.post( '/',       create );
router.get( '/',        read );
router.get( '/:id',     readId );
router.delete( '/:id',  eliminar );
router.patch( '/:id',   update );


/*****************************************************************************
 * 
 * Exporto las rutas
 * 
 */
 module.exports = router;