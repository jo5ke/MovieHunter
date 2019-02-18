'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker) => {
  return {
    name: faker.name(),
    email: faker.email(),
    password: faker.password()
  }
})

Factory.blueprint('App/Models/Movie', (faker) => {
  return {
    Title: faker.name(),
    Plot: faker.paragraph({ sentences: 2 }),
    Genre: faker.string({length : 5}),
    Director: faker.name(),
    Writer: faker.name(),
    Poster: faker.avatar(),
    Released: faker.name(),
    Year: faker.timestamp(),
  }
})
