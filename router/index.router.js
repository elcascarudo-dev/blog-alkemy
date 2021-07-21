/*****************************************************************************
 * 
 * Importación de paquetes
 * 
 */
const express = require('express');
const router = express.Router();

/*****************************************************************************
 * 
 * Rutas
 * 
 */
router.use( '/api/auth',            require( './auth.router' ) );
router.use( '/api/post',            require( './post.router' ) );
router.use( '/api/category',        require( './category.router' ) );

module.exports = router;