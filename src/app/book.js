'use strict';
  export default class Book{
    constructor(title, author, year, imageURL){
      var titleTrim = title.trim();
      var authorTrim = author.trim();
      var imageURLTrim = imageURL.trim();
      this.title = titleTrim.replace(/[\s]{2,}/g," "); //уберет лишние пробелы между словами
      this.author = authorTrim.replace(/[\s]{2,}/g," "); //уберет лишние пробелы между словами
      this.year = Number(year);
      this.imageURL = imageURLTrim.replace(/[\s]/g, ""); //уберет пробелы в строке
      this.id = takeId(); //необходим для key
    }
    setTitle(title){
      var titleTrim = title.trim();
      this.title = titleTrim.replace(/[\s]{2,}/g, " ");
    }
    getTitle(){
      return this.title;
    }
    setAuthor(author){
      var authorTrim = author.trim();
      this.author = authorTrim.replace(/[\s]{2,}/g, " ");
    }
    getAuthor(){
      return this.author;
    }
    setYear(year){
      this.year = Number(year);
    }
    getYear(){
      return this.year;
    }
    setImageURL(imageURL){
      var imageURLTrim = imageURL.trim();
      this.imageURL = imageURL.replace(/[\s]/g, "");
    }
    getImageURL(){
      return this.imageURL;
    }
    getId(){
      return this.id;
    }
    getIndexOfBook(booksArr){ //вычислит индекс в массиве экземпляров, чтобы удалить из массива правильный элемент
      return booksArr.indexOf(this);
    }
    removeBook(booksArr){
      booksArr.splice(this.getIndexOfBook(booksArr), 1);
    }
    editBook(title, author, year, imageURL){
      var re = /[\s]{2,}/g;
      var checkedTitle = title.replace(re, " ");
      var checkedAuthor = author.replace(re, " ");
      var checkedImageURL = imageURL.replace(/[\s]/g, "");
        this.setTitle(checkedTitle);
        this.setAuthor(checkedAuthor);
        this.setYear(year);
        this.setImageURL(checkedImageURL);
    }
    static addBook(arr){ //передаст функцию в компонент формы с нужным массивом, чтобы можно было записать в него новый экземпляр
      return function(title, author, year, imageURL){
        arr.push(new Book(title, author, year, imageURL));
      }
    }
    static generateId(){ //генерирование уникального id для key
      var id = 0;
      return function(){
        return (id++);
      }
    }
}
var takeId = Book.generateId();
