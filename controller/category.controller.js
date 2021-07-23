/*****************************************************************************
 * 
 * Importación de paquetes
 * 
 */
 const logger = require('log4js').getLogger('catagory');
 const { response } = require( 'express' );

/*****************************************************************************
 * 
 * Modelos
 * 
 */
const Category = require( '../model/category.model' ); 

 
/*****************************************************************************
 * 
 * Helpers
 * 
 */

 
/*****************************************************************************
 * 
 * Controladores create
 * 
 */
 
const create = async ( req, res = response ) => {
  
  const category = req.body.category;
  logger.debug( `Categoria resivida: ${ category }` );

  try {
    
    // Busco si la categoria existe para que no salga el catch y de error
    const exist = await Category.findAll( {
      where: {
        category
      }
    });


    if ( exist.length !== 0 ) {
      return res.status( 400 ).json({
        ok: false,
        msg: `La categoria ${ category } ya existe`
      });
    }


    const categoryDB = await Category.create( { category } );

    logger.debug( `Se guardo la categoria ${ categoryDB.category  }` );
    res.json({
      ok: true,
      category: categoryDB
    });


  } catch ( err ) {
    logger.error( `create - ${ err }` );
    res.json({
      ok: true,
      msg: 'Error desconosido, comuniquese con el adminstrador'
    });
  }

}

 
/*****************************************************************************
 * 
 * Controladores read
 * 
 */
 
const read = async ( req, res = response ) => {

  try {
    
    const categories = await Category.findAll();

    res.json({
      ok: true,
      categories
    });

    
  } catch ( err ) {
    logger.error( `create - ${ err }` );
    res.json({
      ok: true,
      msg: 'Error desconosido, comuniquese con el adminstrador'
    });
  }

}

 
/*****************************************************************************
 * 
 * Controladores readID
 * 
 */
 
const readId = async ( req, res = response ) => {

  const id = req.params.id;

  try {
    
    const categoryDB = await Category.findByPk( id );
    
    
    if ( !categoryDB ) {
      logger.debug( `No se encontro categoria con el id ${ id }` );
      return res.status( 400 ).json({
        ok: false,
        msg: `No hay categoria con el id: ${ id }`
      });
    }


    res.json({
      ok: true,
      category: categoryDB.category
    });

    
  } catch ( err ) {
    logger.error( `create - ${ err }` );
    res.json({
      ok: true,
      msg: 'Error desconosido, comuniquese con el adminstrador'
    });
  }

}

 
/*****************************************************************************
 * 
 * Controladores Upload
 * 
 */
 
const update = async ( req, res = response ) => {
 
  const id = req.params.id;
  const category = req.body.category;

  try {
    
    const categoryDB = await Category.findByPk( id );
    
    
    if ( !categoryDB ) {
      logger.debug( `No se encontro categoria con el id ${ id }` );
      return res.status( 400 ).json({
        ok: false,
        msg: `No hay categoria con el id: ${ id }`
      });
    }

    const categoryUpdate = await Category.update( { category}, { where: { id } } );

    res.json({
      ok: true,
      msg: `Se actualizo la categorua correctamente`
    });

    
  } catch ( err ) {
    logger.error( `create - ${ err }` );
    res.json({
      ok: true,
      msg: 'Error desconosido, comuniquese con el adminstrador'
    });
  }

}


 
/*****************************************************************************
 * 
 * Controladores eliminar
 * 
 */
 
const eliminar = async ( req, res = response ) => {
 
  const id = req.params.id;

  try {
    
    const categoryDB = await Category.findByPk( id );
    
    
    if ( !categoryDB ) {
      logger.debug( `No se encontro categoria con el id ${ id }` );
      return res.status( 400 ).json({
        ok: false,
        msg: `No hay categoria con el id: ${ id }`
      });
    }

    const categoryDelete = await Category.destroy( { where: { id } } );

    res.json({
      ok: true,
      msg: `Se elimino la categoria '${ categoryDB.category }'`
    });

    
  } catch ( err ) {
    logger.error( `create - ${ err }` );
    res.json({
      ok: true,
      msg: 'Error desconosido, comuniquese con el adminstrador'
    });
  }



}


/*****************************************************************************
 * 
 * Exportación de controlladores
 * 
 */

module.exports = {
  create,
  read,
  readId,
  update,
  eliminar
}
 