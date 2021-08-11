"use strict";

import Article from './article.js';

const news = {
  articles: [],
  init() {
    this.fetchArticles().then(data => {
      data.news.forEach(article => {
        let newArticle = new Article(article.UUID, article.title, article.content, article.imageURI, article.likes, article.publicationDate);
        console.log(newArticle);
      });
    });
  },
  async fetchArticles() {
    const response = await fetch('https://thecrew.cc/news/read.php');
    const data = await response.json();
    return await data;
  }
};

news.init();