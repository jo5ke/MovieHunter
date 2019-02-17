'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Model = use('Model')

/**
 * @swagger
 * components:
 *   schemas:
 *     NewReview:
 *       type: objectq
 *       required:
 *         - text
 *       properties:
 *         text:
 *           type: string
 *         
 *     UpdateReview:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *     Movies:
 *       allOf:
 *         - $ref: '#/components/schemas/NewReview'
 *         - type: object
 *           properties:
 *             _id:
 *               type: string
 */

class Review extends Model {
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
  user () {
    return this.hasOne('App/Models/User')
  }

  movie () {
    return this.hasOne('App/Models/Movie')
  }
}

module.exports = Review
