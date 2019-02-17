'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MoviesSchema extends Schema {
  up () {
    this.create('movies', (table) => {
      table.increments()
      table.timestamps()
      table.text('plot').notNullable()
      table.string('genre', 50).notNullable()
      table.string('director', 50)
      table.string('writer', 50)
      table.json('ratings', 50)
      table.string('image', 50)
    })
  }

  down () {
    this.drop('movies')
  }
}

module.exports = MoviesSchema
