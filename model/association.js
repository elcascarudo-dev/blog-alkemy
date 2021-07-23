const Category = require( './category.model' );
const Post     = require( './post.model' );

Category.hasMany( Post, { as: "categories", foreignKey: "catId" } );
Post.belongsTo( Category, { as: "cat" } );