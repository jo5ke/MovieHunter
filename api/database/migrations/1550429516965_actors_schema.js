'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActorsSchema extends Schema {
  up () {
    this.create('actors', (table) => {
      table.increments()
      table.timestamps()
      table.string('name', 50).notNullable()
    })
  }

  down () {
    this.drop('actors')
  }
}

module.exports = ActorsSchema
