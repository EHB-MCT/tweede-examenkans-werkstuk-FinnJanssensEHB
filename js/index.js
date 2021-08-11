"use strict";

import Article from './article.js';

const news = {
  init() {
    this.fetchArticles().then(data => {
      console.log(data.news);
    });
  },
  async fetchArticles() {
    const response = await fetch('https://thecrew.cc/news/read.php');
    const data = await response.json();
    return await data;
  }
};

news.init();