// Levanta las variables de entorno del archivo .env
require( 'dotenv' ).config();

//Importación de terceros
const logger = require('log4js').getLogger();
const express = require( 'express' );
const cors = require('cors');

// Nivel de Debug
logger.level = process.env.DEBUG_LEVEL;

// Importaciones
const { sequelize } = require( './config/dbConection.conf' );
require( './model/relations' );

//Crear servicor Express
const app = express();
// Cors origin
app.use( cors() );
// Lectura y parseo del Body
app.use( express.json() );


//rutas
app.use( '/', require( './router/index.router' ) );


const conection = async () => {
  try {
    await sequelize.sync( { force: false } );
    logger.info( 'Conectados a la BBDD' );
  } catch ( err ) {
    logger.error( `Error al conectarce a la BBDD ${ err }` );
  }
}

// Expongo el api-rest
app.listen( process.env.PORT, () => {
  logger.debug( `Corriendo en el puerto ${ process.env.PORT }` );
  conection();
});