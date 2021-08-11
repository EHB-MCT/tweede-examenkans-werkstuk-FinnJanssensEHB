"use strict";

class Article {
  constructor(ID, titel, content, imageURL, likes, datum) {
    this._ID = ID;
    this._titel = titel;
    this._content = content;
    this._imageURL = imageURL;
    this._likes = likes;
    this._datum = datum;
  }
}

export default Article;