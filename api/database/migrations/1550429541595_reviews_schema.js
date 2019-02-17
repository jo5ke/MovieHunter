'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReviewsSchema extends Schema {
  up () {
    this.create('reviews', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('reviews')
  }
}

module.exports = ReviewsSchema
