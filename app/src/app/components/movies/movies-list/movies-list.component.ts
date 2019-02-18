import { Component, OnInit } from '@angular/core';
import { CinemaService } from './../../../services/cinema.service';
import { Movie } from './../../../models/Movie';
import * as _ from 'lodash';

import { fade } from './../../../animations/animations';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  animations: [fade]
})
export class MoviesListComponent implements OnInit {
  initialMovie: Movie;
  movieSearch = 'John';
  listOfMovies: any = [];
  types = [
    {label: 'All', value: null},
    {label: 'Movies', value: 'movie'},
    {label: 'Shows', value: 'series'}
  ];
  listOfFavorites = [];
  mediaType: string;
  showSidebar: Boolean;
  showDialog: Boolean = false;
  val = 5;
  ratingData: any = {
    labels: ['Ratings'],
    datasets: [
        {
              label: 'Internet Movie Database',
              backgroundColor: '#E8B708',
              borderColor: '#E8B708',
              data: []
        }, {
          label: 'Rotten Tomatoes',
          backgroundColor: '#fa320a',
          borderColor: '#fa320a',
          data: []
        }, {
          label: 'Metacritic',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: []
        }]
    };
  sidebarOpen: boolean = false;
  constructor(
    private cinemaService: CinemaService
  ) {
  }

  ngOnInit() {
    this.mediaType = this.types[1].value;
    this.searchMovies();
  }

  searchMovies() {
    const movieSearcher = this.cinemaService.searchMovies(this.movieSearch, this.mediaType)
    .subscribe(res => {

        this.listOfMovies = res.data;
        console.log(res.data);
    });
  }

  showSingleMovie(imdb, id) {
    this.cinemaService.searchSingleMovie(imdb)
    .subscribe(res => {
      this.showDialog = true;
      this.initialMovie = res;
      const imd = +this.initialMovie.Ratings[0].Value.split('/')[0] * 10;
      const rt = +this.initialMovie.Ratings[1].Value.replace('%', '');
      const mc = +this.initialMovie.Ratings[2].Value.split('/')[0];
      this.ratingData.datasets[0].data[0] = imd;
      this.ratingData.datasets[1].data[0] = rt;
      this.ratingData.datasets[2].data[0] = mc;

    });

    console.log(id);
    this.cinemaService.updateMovie(id, this.initialMovie)
      .subscribe(res => {
        console.log(res);

    });


    // this.cinemaService.searchSingleMovie(imdb)
    // .subscribe(res => {
    //   this.showDialog = true;
    //   this.initialMovie = res.data;
    //   const imd = 70;
    //   const rt = 20;
    //   const mc = 0;
    //   this.ratingData.datasets[0].data[0] = imd;
    //   this.ratingData.datasets[1].data[0] = rt;
    //   this.ratingData.datasets[2].data[0] = mc;
    // });
  }

  addToFavorites(movie) {
    const idx = _.indexOf(this.listOfFavorites, movie.Title);
    if (idx < 0) {
      this.listOfFavorites.push(movie.Title);
    } else {
     this.listOfFavorites.splice(idx, 1);
    }

  }

  isFavorited(movie) {
      return (_.indexOf(this.listOfFavorites, movie.Title) >= 0);

  }

  showMovie() {
    this.showDialog = true;  
  }
  
  openSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
