'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MoviesSchema extends Schema {
  up () {
    this.create('movies', (table) => {
      table.increments()
      table.timestamps()
      // table.text('plot').notNullable()
      // table.string('name', 100).notNullable()
      // table.string('genre', 50).notNullable()
      // table.string('director', 50)
      // table.string('writer', 50)
      // table.json('ratings', 250)
      // table.string('image', 50)

      table.text('Plot').notNullable()
      table.string('Title',50);
      table.string('Year',50);
      table.string('Rated',50);
      table.string('Released',50);
      table.string('Genre',50);
      table.string('Director',50);
      table.string('Writer',50);
      table.string('Actors',50);
      table.string('imdbRating',50);
      table.string('imdbID',50).unique();
 
      table.string('director', 50)
      table.string('writer', 50)
      table.json('Ratings', 50)
      table.string('Poster', 50)
    })
  }

  down () {
    this.drop('movies')
  }
}

module.exports = MoviesSchema
