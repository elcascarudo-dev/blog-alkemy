/*****************************************************************************
 * 
 * Importación de librerias
 * 
 */
 const logger = require('log4js').getLogger('validaJWT');
 const jwt = require( 'jsonwebtoken' );
 
 /*****************************************************************************
  * 
  * Valido si el token es valido
  * 
  */
 const validarJWT = ( req, res, next ) => {
 
   // Leere el token
   const token = req.query.token;
   
   if ( !token ) {
 
     logger.error( 'No se envio el token en la peticion' );
     return res.status( 401 ).json({
       ok: false,
       msg: 'No se envio token en la petición'
     });
   }
 
   try {
     
     jwt.verify( token, process.env.JWT_SECRET );

     next();
 
   } catch (error) {
     logger.error( `invalid - ${ error }` );
     return res.status( 401 ).json({
       ok: false,
       msg: 'El Token no es válido'
     });
 
   }
 
 }
 
 
 
 module.exports = {
   validarJWT
 }