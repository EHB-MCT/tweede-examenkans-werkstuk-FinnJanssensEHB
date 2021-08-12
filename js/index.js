"use strict";

import Article from './article.js';

const news = {
  articles: [],
  init() {
    this.fetchArticles().then(data => {
      this.createArticleInstances(data).then(
        this.renderArticles()
      )
    })
  },
  async fetchArticles() {
    const response = await fetch('https://thecrew.cc/news/read.php');
    const data = await response.json();
    return await data;
  },
  async createArticleInstances(data) {
    await data.news.forEach(article => {
      let newArticle = new Article(article.UUID, article.title, article.content, article.imageURI, article.likes, article.publicationDate);
      this.articles.push(newArticle);
    });
    console.log(this.articles);
  },
  renderArticles() {
    const container = document.getElementById('container');
    console.log(container);
    this.articles.forEach(article => {
      console.log(article._titel);
      let HTMLstring = `
      <article>
        <header>
          <h2>${article._titel}</h2>
          <h5>${article._datum}</h5>
        </header>
        <div class="body">
          <img
            src = "${article._imageURL}"
            alt="">
          <div class="content">${article._content}${article._likes}</div>
        </div>
      </article>
    `;
      container.insertAdjacentHTML('beforeend', HTMLstring);
    });
  }
};

news.init();