import { Component } from '@angular/core';
import { ArticleService } from '../services/article/article.service';
import { englishSource, hindiSource } from './app.config';
import { fromEvent } from 'rxjs';
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  article: any = {};
  groupedCityData: any = [];
  englishSource: string = englishSource;
  hindiSource: string = hindiSource;
  searchBoxValue: any;

  constructor(public articleService: ArticleService) {}

  ngOnInit() {
    this.showArticle();
  }

  ngAfterViewInit() {
    const searchBox = document.getElementById('search-box');

    const typeahead = fromEvent(searchBox, 'input').pipe(
      map(e => (e.target as HTMLInputElement).value),
      filter(query => query.length > 2 || query.length === 0),
      debounceTime(100),
      distinctUntilChanged(),
      switchMap(query => this.articleService.findArticle(query))
    );

    typeahead.subscribe(data => {
      this.groupedCityData = data;
    }, error =>{
      this.groupedCityData = error;
    });
  }
  
  //Fetch all required fields from JSON
  showArticle() {
    this.articleService.getArticle().then(data => {
      this.article = data['article'];
      this.groupedCityData = data['groupedCityData'];
    },error=>{
      this.article = error['article'];
      this.groupedCityData = error['groupedCityData'];
    });
  }
 
  //Set progress bar width 
  getProgressWidth(value) {
    const width = Number(value);
    return (width / 20) * 100;
  }

  //Set Language as selected
  setLang(lang) {
    this.articleService.setLang(lang).then(done => {
      if (done) {
        this.showArticle();
      }
    });
  }

  //Set cigarette array for icon display 
  getCigarettes(count) {
    const cigarCount = Number(count);
    return new Array(cigarCount);
  }
}
