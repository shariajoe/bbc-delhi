import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { englishSource, hindiSource } from '../../app/app.config';

@Injectable()
export class ArticleService {
  articleUrl: string;

  constructor(private http: HttpClient) {
    this.articleUrl = englishSource;
  }

  fetchJSON() {
    return this.http.get(this.articleUrl).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  //Fetch all data needed for article display
  getArticle() {
    return new Promise((resolve, reject) => {
      this.fetchJSON().subscribe(data => {
        const allKeys = Object.keys(data);

        const allCityNameKeys = allKeys.filter(key => {
          return (
            key.indexOf('compare-tabs_1_city') > -1 && key.indexOf('name') > -1
          );
        });

        const groupedCityData = [];
        allCityNameKeys.forEach(key => {
          const cityNumber = key.split('_')[3];
          const cityData = [
            key,
            `compare-tabs_1_city_${cityNumber}_aqi`,
            `compare-tabs_1_city_${cityNumber}_cigg`
          ];
          groupedCityData.push(cityData);
        });
        resolve({ article: data, groupedCityData: groupedCityData });
      }, error =>reject({ article: {}, groupedCityData: [] }));
    });
  }

  //Filter cities by query
  findArticle(query) {
    return new Promise((resolve, reject) => {
      this.fetchJSON().subscribe(data => {
        const allKeys = Object.keys(data);

        const allCityNameKeys = allKeys.filter(key => {
          return (
            key.indexOf('compare-tabs_1_city') > -1 && key.indexOf('name') > -1
          );
        });

        let foundKeys = [];
        if (query) {
          for (const key of allCityNameKeys) {
            if (data[key].toLowerCase().indexOf(query.toLowerCase()) > -1) {
              foundKeys.push(key);
            }
          }
        } else {
          foundKeys = allCityNameKeys;
        }

        const groupedCityData = [];
        foundKeys.forEach(key => {
          const cityNumber = key.split('_')[3];
          const cityData = [
            key,
            `compare-tabs_1_city_${cityNumber}_aqi`,
            `compare-tabs_1_city_${cityNumber}_cigg`
          ];
          groupedCityData.push(cityData);
        });
        resolve(groupedCityData);
      }, error => reject([]));
    });
  }

  //Set language file
  setLang(lang) {
    return new Promise(resolve => {
      if (lang === 'en') {
        this.articleUrl = englishSource;
      } else {
        this.articleUrl = hindiSource;
      }
      resolve(true);
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
