'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('lucid-mongo/src/LucidMongo/Model')} */
const Model = use('Model')

/**
 * @swagger
 * components:
 *   schemas:
 *     NewActor:
 *       type: objectq
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *         
 *     UpdateActor:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *     Movies:
 *       allOf:
 *         - $ref: '#/components/schemas/NewActor'
 *         - type: object
 *           properties:
 *             _id:
 *               type: string
 */

class Actor extends Model {
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
  movies () {
    return this.hasMany('App/Models/Movies')
  }

  
}

module.exports = Actor
