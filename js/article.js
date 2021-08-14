"use strict";

class Article {
  constructor(ID, titel, content, imageURL, likes, datum) {
    this.ID = ID;
    this.titel = titel;
    this.content = content;
    this.imageURL = imageURL;
    this.likes = likes;
    this.datum = datum;
    console.log(this.ID);
  }
  like(ID) {
    let bodyString = {
      UUID: ID
    }
    console.log(bodyString);
    fetch('https://thecrew.cc/news/create.php', {
      method: 'POST',
      body: JSON.stringify(bodyString)
    }).then(response => response.json()).then(data => console.log(data));
  }
}
export default Article;