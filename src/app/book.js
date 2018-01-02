'use strict';
  export default class Book{
    constructor(title, author, year, imageURL){
      this.title = title;
      this.author = author;
      this.year = year;
      this.imageURL = imageURL;
    }
    static booksArr = [];
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
      this.year = year;
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
    getRemoveBookEvent(){
      function removeBook(){

      }
      return removeBook;
    }
    getEditBookEvent(){
      function editBook(){
        //create form with this.data,

      }
      return editBook;
    }
    static function addBook(){

    }
  }
