const express = require('express');
const router = express.Router();

//rutas
router.use( '/api/post',            require( './post.router' ) );
router.use( '/api/category',        require( './category.router' ) );

module.exports = router;