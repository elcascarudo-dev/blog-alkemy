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
const Post = require( '../model/post.model' ); 

 
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
  
  const body = req.body;
  const img  = req.body.img;

  logger.debug( `Entrada resivida: `, body );

  // Formatos validos de imagenes
  const valitFormat = [ '.png', '.jpg', '.jpeg', '.gif' ];

  // Valido si llego una imagen
  if( img ){

    let valido = false;
    
    // Valido si la imagen que se ingreso tiene formato valido
    for (const tipo of valitFormat ) {
      if( img.includes( tipo ) ) valido = true;
    }

    // Si no es valido se lo informo al usuario
    if ( !valido ) {
      logger.debug( `Formato de imagen invalido`, body );
      return res.status( 400 ).json({
        ok: false,
        msg: `Los formatos permitidos son ${ valitFormat.join( ', ' ) }`
      });
    }
  }

  try {
    // Creo el post
    const postDB = await Post.create(  body  );
    logger.debug( `Se guardo la entrada`, body );

    // Lo devuelvo al usuario
    res.json({
      ok: true,
      post: postDB
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
    // Muestro todos los post que hay en 
    const posts = await Post.findAll();

    res.json({
      ok: true,
      posts
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
    
    const postDB = await Post.findByPk( id );
    
    
    if ( !postDB ) {
      logger.debug( `No se encontro entrada con el id ${ id }` );
      return res.status( 400 ).json({
        ok: false,
        msg: `No hay entrada con el id: ${ id }`
      });
    }


    res.json({
      ok: true,
      post: postDB
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
  const body = req.body;
  const img  = req.body.img;

  // Formatos validos de imagenes
  const valitFormat = [ '.png', '.jpg', '.jpeg', '.gif' ];
  
  // Valido si llego una imagen
  if( img ){

    let valido = false;
    
    // Valido si la imagen que se ingreso tiene formato valido
    for (const tipo of valitFormat ) {
      if( img.includes( tipo ) ) valido = true;
    }

    // Si no es valido se lo informo al usuario
    if ( !valido ) {
      logger.debug( `Formato de imagen invalido`, body );
      return res.status( 400 ).json({
        ok: false,
        msg: `Los formatos permitidos son ${ valitFormat.join( ', ' ) }`
      });
    }
  }

  try {
    
    const postDB = await Post.findByPk( id );
    
    
    if ( !postDB ) {
      logger.debug( `No se encontro categoria con el id ${ id }` );
      return res.status( 400 ).json({
        ok: false,
        msg: `No hay categoria con el id: ${ id }`
      });
    }

    const postUpdate = await Post.update(  body , { where: { id } } );

    res.json({
      ok: true,
      msg: `Se actualizo la entrada correctamente`
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
    
    const postDB = await Post.findByPk( id );
    
    
    if ( !postDB ) {
      logger.debug( `No se encontro entrada con el id ${ id }` );
      return res.status( 400 ).json({
        ok: false,
        msg: `No hay entrada con el id: ${ id }`
      });
    }

    const postDelete = await Post.destroy( { where: { id } } );

    res.json({
      ok: true,
      msg: `Se elimino la entrada correctamente`, 
      post: postDB
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
 