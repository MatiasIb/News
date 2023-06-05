import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news-api.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: any[] = [];

  constructor(private newsApiService: NewsApiService) {}

  ngOnInit() {
    this.getFiveTopHeadlines();
  }

  getFiveTopHeadlines() {
    this.newsApiService.getTopHeadlines().subscribe((response: any) => {
      for (let i = 0; i < 9; i++) {
        this.news.push(response.articles[i]);
      }
    });
  }

  getNewsByCategory(category: string) {
    this.newsApiService.getNewsByCategory(category).subscribe((response: any) => {
      this.news = response.articles;
    });
  }
}
