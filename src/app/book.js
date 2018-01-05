'use strict';
  export default class Book{
    constructor(title, author, year, imageURL){
      this.title = title;
      this.author = author;
      this.year = year;
      this.imageURL = imageURL;
      this.id = takeId();
    }
    setTitle(title){
      this.title = title;
    }
    getTitle(){
      return this.title;
    }
    setAuthor(author){
      this.author = author;
    }
    getAuthor(){
      return this.author;
    }
    setYear(year){
      if(!isNaN(parseFloat(year)) && isFinite(year)){
        this.year = Number(year);
      }

    }
    getYear(){
      return this.year;
    }
    setImageURL(imageURL){
      this.imageURL = imageURL;
    }
    getImageURL(){
      return this.imageURL;
    }
    getId(){
      return this.id;
    }
    getIndexOfBook(booksArr){
      return booksArr.indexOf(this);
    }
    removeBook(booksArr){
      booksArr.splice(this.getIndexOfBook(booksArr), 1);
    }
    editBook(title, author, year, imageURL){
        this.setTitle(title);
        this.setAuthor(author);
        this.setYear(year);
        this.setImageURL(imageURL);
    }
    static addBook(arr){

      return function(title, author, year, imageURL){
        arr.push(new Book(title, author, year, imageURL));
      }
    }
    static generateId(){
      var id = 0;
      return function(){
        return (id++);
      }
    }
}
var takeId = Book.generateId();
