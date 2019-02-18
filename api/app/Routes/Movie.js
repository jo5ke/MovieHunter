'use strict'

/*
|--------------------------------------------------------------------------
| User Routers
|--------------------------------------------------------------------------
|
*/

const Route = use('Route')

Route.group('movie', () => {
  /**
   * @\swagger
   * /movies:
   *   get:
   *     tags:
   *       - Movie
   *     summary: Get movies
   *     parameters:
   *       - $ref: '#/components/parameters/ListQuery'
   *     responses:
   *       200:
   *         description: movies
   *         schema:
   *           type: array
   *           items:
   *               $ref: '#/components/schemas/Movie'
   */
  Route.get('/', 'Api/MoviesController.index')

  /**
   * \@swagger
   * /movies:
   *   post:
   *     tags:
   *       - Movie
   *     summary: Create movie
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/NewMovie'
   *     responses:
   *       200:
   *         description: movie
   *         schema:
   *           $ref: '#/components/schemas/Movie'
   */
  // Route.post('/', 'Api/UsersController.store')

  /**
   * @swagger
   * /movies/{id}:
   *   get:
   *     tags:
   *       - Movie
   *     summary: Returns movie
   *     parameters:
   *       - $ref: '#/components/parameters/Id'
   *       - $ref: '#/components/parameters/SingleQuery'
   *     responses:
   *       200:
   *         description: movie
   *         schema:
   *           $ref: '#/components/schemas/Movie'
   *       404:
   *         $ref: '#/components/responses/NotFound'
   */
  Route.get('/:id', 'Api/MoviesController.show')
    .instance('App/Models/Movie')

  /**
   * @swagger
   * /movies/{id}:
   *   put:
   *     tags:
   *       - Movie
   *     summary: Update movies
   *     parameters:
   *       - $ref: '#/components/parameters/Id'
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/NewMovie'
   *     responses:
   *       202:
   *         description: movie
   *         schema:
   *           $ref: '#/components/schemas/Movie'
   *       404:
   *         $ref: '#/components/responses/NotFound'
   *       401:
   *         $ref: '#/components/responses/Unauthorized'
   *       403:
   *         $ref: '#/components/responses/Forbidden'
   *       422:
   *         $ref: '#/components/responses/ValidateFailed'
   */
  Route.put('/:id', 'Api/MoviesController.update')
    .instance('App/Models/Movie')
    // .validator('UpdateMovie')

  /**
   * @swagger
   * /movies/{id}:
   *   delete:
   *     tags:
   *       - Movie
   *     summary: Delete movies
   *     parameters:
   *       - $ref: '#/components/parameters/Id'
   *     responses:
   *       202:
   *         description: delete success
   *       404:
   *         $ref: '#/components/responses/NotFound'
   *       401:
   *         $ref: '#/components/responses/Unauthorized'
   */
  Route.delete('/:id', 'Api/MoviesController.destroy')
    .instance('App/Models/Movie')

  /**
   * @swagger
   * /movies/{id}/upload:
   *   post:
   *     tags:
   *       - Movie
   *     summary: Upload images to movie
   *     parameters:
   *       - $ref: '#/components/parameters/Id'
   *     requestBody:
   *       required: true
   *       content:
   *         multipart/form-data:
   *           schema:
   *             type: object
   *             properties:
   *               image:
   *                 required: true
   *                 type: string
   *                 format: binary
   *               is_avatar:
   *                 required: false
   *                 type: boolean
   *     responses:
   *       200:
   *         description: upload success
   *       404:
   *         $ref: '#/components/responses/NotFound'
   *       401:
   *         $ref: '#/components/responses/Unauthorized'
   *       403:
   *         $ref: '#/components/responses/Forbidden'
   *       422:
   *         $ref: '#/components/responses/ValidateFailed'
   */
  Route.post('/:id/upload', 'Api/MoviesController.upload')
    .instance('App/Models/Movie')

 /**
   * @\swagger
   * /movies:
   *   get:
   *     tags:
   *       - Movie
   *     summary: Seed imdb movies
   *     parameters:
   *       - $ref: '#/components/parameters/ListQuery'
   *     responses:
   *       200:
   *         description: seed imdb movies
   *         schema:
   *           type: array
   *           items:
   *               $ref: '#/components/schemas/Movie'
   */
  Route.get('/seed/imdb/movies', 'Api/MoviesController.seed')

}).prefix('/api/movies')
