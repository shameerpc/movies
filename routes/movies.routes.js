const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

/**
 * @swagger
 * definitions:
 *   movies:
 *     properties:
 *       title:
 *         type: string
 *       release_date:
 *         type: date
 *       director:
 *         type: string
 *       rating:
 *         type: number
 *       
 *        
 */
//create
router.post('/', moviesController.create);
/**
 * @swagger
 * /api/v1/movies:
 *   post:
 *     tags:
 *       - movies
 *     description: Creates a new movies
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Auth
 *         description: user object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/movies'
 *     responses:
 *       200:
 *         description: Successfully created
 */
// router.post('/', signinController.updateData);
router.delete('/:id', moviesController.deletemovies);
  /**
 * @swagger
 * /api/v1/movies/{id}: 
 *   delete:
 *     tags:
 *       - movies
 *     summary: Deletes a movies
 *     description: ''
 *     operationId: deletemovies
 *     produces:
 *       - application/xml
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: movies id to delete
 *         required: true
 *         type: string
 *     responses:
 *       '400':
 *         description: Invalid ID supplied
 *       '404':
 *         description: movies not found   
 * 
 */  
router.put('/:id', moviesController.updatemovies);
  /**
 * @swagger
 * /api/v1/movies/{id}: 
 *   put:
 *     tags:
 *       - movies
 *     description: Creates a new movies
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: movies id to Update
 *         required: true
 *         type: string
 *       - in: body
 *         name: body
 *         description: Updated movies object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/movies'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.get('/', moviesController.getmovies);
/**
 * @swagger
 * /api/v1/movies:
 *   get:
 *     tags:
 *       - movies
 *     description: Returns all movies
 *     produces:  
 *       - application/json
 *     parameters: []
 *     responses:
 *       200:
 *         description: An array of movies       
 *         schema:
 *           $ref: '#/definitions/movies'
 *       400:
 *         description: Invalid status value 
 */
router.get('/:id', moviesController.getmoviesbyid);
/**
* @swagger
* /api/v1/movies/{id}: 
*   get:
*     tags:
*       - movies
*     description: get a single movies
*     produces:
*        - application/json
*     parameters:
*       - name: id
*         in: path
*         description: movies id to view
*         required: true
*         type: string
*     responses:
*       200:
*         description: successful operation
*         schema:
*           $ref: '#/definitions/movies' 
*       400:
*          description: Invalid ID supplied
*       404:
*         description: movies not found
*/ 

module.exports=router;