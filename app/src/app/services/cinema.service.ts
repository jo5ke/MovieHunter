import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'


@Injectable()
export class CinemaService {

  constructor(private http: Http) { }

   getInitialMovies(): Observable<any> {
        return this.http.get('https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?i=tt0137523&apikey=af5b114d')
        .map((res: Response) => res.json())
        .catch((err) => {
          return Observable.throw(err);
        });
    }

    searchMovies(data, type): Observable<any> {
        // return this.http.get('https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?s=' + data + '&type=' + type + '&apikey=af5b114d')
        return this.http.get('http://localhost:3333/api/movies/')
        .map((res: Response) => res.json())
        .catch((err) => {
          return Observable.throw(err);
        });
    }

    searchSingleMovie(data): Observable<any> {
        return this.http.get('https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?i=' + data + '&apikey=af5b114d')
        .map((res: Response) => res.json())
        .catch((err) => {
          return Observable.throw(err);
        });

        // return this.http.get('http://localhost:3333/api/movies/' + data)
        // .map((res: Response) => res.json())
        // .catch((err) => {
        //   return Observable.throw(err);
        // });
    }

    updateMovie(_id,data): Observable<any> {

      return this.http.put('http://localhost:3333/api/movies/' + _id, data)
        .catch((err) => {
          return Observable.throw(err);
        });
    }


}

