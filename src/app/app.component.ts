import { Component } from '@angular/core';
import { ArticleService } from '../services/article/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  article: any = {};
  error: string;
  groupedCityData: any = [];

  constructor(public articleService: ArticleService){

  }

  ngOnInit() {
    this.showArticle();
  }

  chunkArray(myArray, size){
    const arrayLength = myArray.length;
    let tempArray = [];
    
    for (let index = 0; index < arrayLength; index += size) {
      let myChunk = myArray.slice(index, index+size);
      tempArray.push(myChunk);
    }
    return tempArray;
  }

  showArticle() {
    this.articleService.getArticle()
    .subscribe((data) => {
      this.article = data;
      const allKeys = Object.keys(this.article);

      let allCityKeys = allKeys.filter((key)=>{
        return key.indexOf("compare-tabs_1_city") > -1;
      });
      
      this.groupedCityData = this.chunkArray(allCityKeys, 3);
    },
    error => this.error = error);
  }

  getProgressWidth(value){
    let width = Number(value);

    return  (width/20)*100;
  }
}
