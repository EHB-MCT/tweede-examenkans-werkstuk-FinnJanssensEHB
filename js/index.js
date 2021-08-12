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
      let HTMLstring = `
      <article>
        <header>
          <h2>${article._titel}</h2>
          <h5>${this.timeConverter(article._datum)}</h5>
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
  },
  timeConverter(UNIX_timestamp) {
    //functie gevonden op stackoverflow https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
    return time;
  }
};

news.init();