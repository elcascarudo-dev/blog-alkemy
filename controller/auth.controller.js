/*****************************************************************************
 * 
 * Importación de paquetes
 * 
 */
 const logger = require('log4js').getLogger('auth');
 const { response } = require( 'express' );

/*****************************************************************************
 * 
 * Helpers
 * 
 */
const generarJWT = require( '../helpers/jwt.helper' );
 
/*****************************************************************************
 * 
 * Controladores create
 * 
 */
 
const generateJWT = async ( req, res = response ) => {
  
  try {
    
    const jwt = await generarJWT();
  
    res.json({
      ok: true,
      jwt
    });
    
  } catch ( err ) {
    logger.error( 'generateJWT - ', err );
    res.status( 500 ).json({
      ok: true,
      msg: 'Error desconocido, comuniquese con el adminstrador'
    });
  }

}


/*****************************************************************************
 * 
 * Exportación de controlladores
 * 
 */

module.exports = {
  generateJWT
}
 