'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Model = use('Model')

/**
 * @swagger
 * components:
 *   schemas:
 *     NewMovie:
 *       type: objectq
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *         genre:
 *           type: string
 *         ratings:
 *           type: string
 *         image:
 *           type: string
 *     UpdateMovies:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *     Movies:
 *       allOf:
 *         - $ref: '#/components/schemas/NewMovies'
 *         - type: object
 *           properties:
 *             _id:
 *               type: string
 */

class Movie extends Model {
  static boot () {
    super.boot()

  
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   *
   * @return {Object}
   */
  actors () {
    return this.hasMany('App/Models/Actor')
  }

  reviews () {
    return this.hasMany('App/Models/Review')
  }
}

module.exports = Movie
