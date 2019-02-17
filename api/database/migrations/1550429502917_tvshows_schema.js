'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TvshowsSchema extends Schema {
  up () {
    this.create('tvshows', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('tvshows')
  }
}

module.exports = TvshowsSchema
