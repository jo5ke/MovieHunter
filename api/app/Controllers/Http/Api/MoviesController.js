'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/auth/src/Schemes/Session')} AuthSession */

const BaseController = require('./BaseController')
/** @type {typeof import('../../../Models/Movie')} */
const Movie = use('App/Models/Movie')
// const Validator = use('Validator')
const UnAuthorizeException = use('App/Exceptions/UnAuthorizeException')
// const Config = use('Config')
const Request = use('Request'); // Adonis request method

const http = require("http");

const requ = require('request');
const EventEmitter = require("events").EventEmitter;

var rp = require('request-promise');

const nfetch = require("node-fetch");

const Database = use('Database')


/**
 *
 * @class MoviesController
 */
class MoviesController extends BaseController {
  /**
   * Index
   *
   * @param {object} ctx
   * @param {AuthSession} ctx.auth
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index ({ request, response, decodeQuery }) {
    const movies = await Movie.all();
    return response.apiCollection(movies)
  }

  /**
   * Store
   *
   * @param {object} ctx
   * @param {AuthSession} ctx.auth
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  // async store ({request, response}) {
  //   await this.validate(request.all(), User.rules())
  //   const user = new User(request.only('name', 'email'))
  //   const password = await Hash.make(request.input('password'))
  //   const verificationToken = crypto.createHash('sha256').update(uuid.v4()).digest('hex')
  //   user.set({
  //     password: password,
  //     verificationToken: verificationToken,
  //     verified: false
  //   })
  //   await user.save()
  //   await Mail.send('emails.verification', { user: user.get() }, (message) => {
  //     message.to(user.email, user.name)
  //     message.from(Config.get('mail.sender'))
  //     message.subject('Please Verify Your Email Address')
  //   })
  //   return response.apiCreated(user)
  // }

  /**
   * Show
   *
   * @param {object} ctx
   * @param {AuthSession} ctx.auth
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show ({ request, response, instance, decodeQuery }) {
    const movie = instance
    // await user.related(decodeQuery().with).load()
    return response.apiItem(movie)
  }

  /**
   * Update
   *
   * @param {object} ctx
   * @param {AuthSession} ctx.auth
   * @param {Request} ctx.request
   */
  async update ({ request, response, params, instance, auth }) {
    const movie = instance
    // console.log(request.only('imdbID'));

    movie.merge(request.all())
    await movie.save()


    // const affectedRows = await Database
    //   .table('movies')
    //   .where('_id', request.only('imdbID'))
    //   .update(request.all())

    return response.apiUpdated(movie)
  }

  /**
   * Destroy
   *
   * @param {object} ctx
   * @param {AuthSession} ctx.auth
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ request, response, instance, auth }) {
    const user = instance
    if (String(auth.user._id) !== String(user._id)) {
      throw UnAuthorizeException.invoke()
    }
    await user.delete()
    return response.apiDeleted()
  }

  /**
   * Upload
   *
   * @param {object} ctx
   * @param {AuthSession} ctx.auth
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async upload ({ request, response, instance, auth }) {
    const user = instance
    if (String(auth.user._id) !== String(user._id)) {
      throw UnAuthorizeException.invoke()
    }
    const image = request.file('image', {
      maxSize: '2mb',
      allowedExtensions: ['jpg', 'png', 'jpeg']
    })
    const fileName = `${use('uuid').v1().replace(/-/g, '')}_${image.clientName}`
    await image.move(use('Helpers').publicPath('uploads'), { name: fileName })
    const filePath = `uploads/${fileName}`
    await user.images().create({ fileName, filePath })
    // await user.related('images').load()
    return response.apiUpdated(user)
  }

  /**
   * Get images of user
   *
   * @param {object} ctx
   * @param {AuthSession} ctx.auth
   * @param {Request} ctx.request
   */
  async images ({ request, response, instance, decodeQuery }) {
    const movie = instance
    const images = await movie.images().query(decodeQuery()).fetch()
    return response.apiCollection(images)
  }

  /**
   * Seed imdb movies
   *
   * @param {object} ctx
   * @param {AuthSession} ctx.auth
   * @param {Request} ctx.request
   */
  async seed ({ request, response, instance, decodeQuery }) {

      var body = new EventEmitter();

      let bo;

      requ("https://www.omdbapi.com/?s=John&type=movie&apikey=af5b114d&r=json", function(error, response, data) {
          body.data = data;
          body.emit('update');
      });

      body.on('update', function () {
          // console.log(body.data); // HOORAY! THIS WORKS!
          bo = JSON.parse(body.data);

          bo.Search.forEach(function(el) {
            console.log(el);
            let movie = new Movie();
            movie.Title = el.Title;
            movie.Year = el.Year;
            movie.imdbID = el.imdbID;
            movie.Poster = el.Poster;
            movie.save();
          });

      });

      return response.send('Db seeded!');



  }

   /**
   * Seed imdb movies
   *
   * @param {object} ctx
   * @param {AuthSession} ctx.auth
   * @param {Request} ctx.request
   */
  async updateMovie ({ request, response, instance, decodeQuery }) {


  }
  
}

module.exports = MoviesController
