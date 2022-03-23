const express = require( 'express' );
const next = require( 'next' );

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next( { dev } );
// const handle = app.getRequestHandler();
// const api = require('./routes/birds');
//  const controller= require('./controllers');
// const upload = require('./helpers/uploads.controller')

/**
 * app (next js ) will prepare our server with express, and then,
 * wrap express application inside next
 *
 */
app.prepare()
	.then( () => {
		const server = express();
       const router = express.Router()
		server.get('/api/products/:id',(req, res)=>{
           	// app.render( req, res, '/add' );
               const {id}= req.params

               res.send(id)
        })

    //    router.use('/api',api)
       server.get( '/p', ( req, res ) => {
			// const postId = parseInt( req.params.slug.split( '-' ).pop() );

			// const queryParams = { id: postId };
		//	app.render( req, res, '/add' );
		} );

        server.get('/p/:id', (req, res)=>{
           // controller.productController(req, res)
           
        })
		/**
		 * Wrapping express app inside next will allow us to create routes by using
		 * express js function inside of the next js build
		 *
		 * '*' means all routes which are not explicit , use this route for them.
		 */
		// router.get( '*', ( req, res ) => {
		// 	return handle( req, res );
		// } );

		server.listen( port, ( err ) => {
			if ( err ) {
				throw err;
			}
			console.warn( `Ready on http://localhost:${port}` );
		} );
	} );