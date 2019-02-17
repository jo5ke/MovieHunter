'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReviewsSchema extends Schema {
  up () {
    this.create('reviews', (table) => {
      table.increments()
      table.timestamps()
      table.text('text', 500).notNullable()
      table.bigInteger('score').notNullable()
    })
  }

  down () {
    this.drop('reviews')
  }
}

module.exports = ReviewsSchema
