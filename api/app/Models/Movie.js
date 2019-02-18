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
 *       type: object
 *       properties:
 *         Title:
 *           type: string
 *         Year:
 *           type: string
 *         Plot:
 *           type: string
 *         Rated:
 *           type: string
 *         Released:
 *           type: string
 *         Genre:
 *           type: string
 *         Director:
 *           type: string
 *         Writer:
 *           type: string
 *         Poster:
 *           type: string
 *         Ratings:
 *           type: json
 *         imdbID:
 *           type: string
 *     UpdateMovies:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *     Movie:
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
