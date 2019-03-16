import { Component } from '@angular/core';
import { ArticleService } from '../services/article/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  article: any;
  error: string;

  constructor(public articleService: ArticleService){

  }

  ngOnInit() {
    this.showArticle();
  }

  showArticle() {
    this.articleService.getArticle()
    .subscribe((data) => this.article = data,
    error => this.error = error);
  }
}
