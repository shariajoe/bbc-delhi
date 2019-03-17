import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticleService } from '../services/article/article.service';
import { HttpClientModule } from '@angular/common/http';
import { englishSource, hindiSource } from './app.config';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbPopoverModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        ArticleService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
