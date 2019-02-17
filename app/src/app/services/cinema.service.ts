import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'


@Injectable()
export class CinemaService {

  constructor(private http: Http) { }

   getInitialMovies(): Observable<any> {
        return this.http.get('https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?i=tt0137523&apikey=f036137b')
        .map((res: Response) => res.json())
        .catch((err) => {
          return Observable.throw(err);
        });
    }

    searchMovies(data, type): Observable<any> {
        return this.http.get('https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?s=' + data + '&type=' + type + '&apikey=f036137b')
        .map((res: Response) => res.json())
        .catch((err) => {
          return Observable.throw(err);
        });
    }

    searchSingleMovie(data): Observable<any> {
        return this.http.get('https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?i=' + data + '&apikey=f036137b')
        .map((res: Response) => res.json())
        .catch((err) => {
          return Observable.throw(err);
        });
    }


}

