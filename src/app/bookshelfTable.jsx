'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Book from './book.js';
import BookshelfForm from './bookshelfForm.jsx';
import BookRow from './bookRow.jsx';
var initBooksArr = [{title: "Большая книга CSS3", author: "Дэвид Макфарланд", year: 2016, imageURL: "https://ozon-st.cdn.ngenix.net/multimedia/1008075770.jpg"},
{title: "Объектно-ориентированный анализ и проектирование с примерами приложений", author: "Грэди Бутч и др.", year: 2010, imageURL: "https://ozon-st.cdn.ngenix.net/multimedia/1000795018.jpg"},
{title: "Вы не знаете JS: ES6 и не только", author: "Кайл Симпсон", year: 2017, imageURL: "https://ozon-st.cdn.ngenix.net/multimedia/1015269939.jpg"},
{title: "Регулярные выражения", author: "Джеффри Фридл", year: 2008, imageURL: "https://ozon-st.cdn.ngenix.net/multimedia/1000895779.jpg"}];
var booksArr = [];
for(let i = 0; i < initBooksArr.length; i++){
  Book.addBook(booksArr)(initBooksArr[i].title, initBooksArr[i].author, initBooksArr[i].year, initBooksArr[i].imageURL);
}

class BookshelfTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {bookAmout: booksArr.length, formOn: false, currentInstance: null};
  }
  handleRemoveBook(bookInstance){
    bookInstance.removeBook(booksArr);
    this.setState({bookAmout: booksArr.length});
  }
  handleEditBook(bookInstance){
    this.setState({formOn: true, currentInstance: bookInstance});
  }
  turnBookshelfFormOff(){
    this.setState({formOn: false});
  }
  handleAddBookButtonOnClick(){
    this.setState({formOn: true, currentInstance: null});
  }
  handleData(title, author, year, imageURL){
    this.state.currentInstance.setTitle(title);
    this.state.currentInstance.setAuthor(author);
    this.state.currentInstance.setYear(year);
    this.state.currentInstance.setImageURL(imageURL);
  }
  handleImageError(event){
    event.target.src = 'https://images-na.ssl-images-amazon.com/images/I/61ETc9D5UKL.png';
  }
  render(){
    const tableRow = this.props.books.map((bookItem)=>
  <BookRow
    key={bookItem.getId()}
    bookItem={bookItem}
    imageErrorHandler={this.handleImageError.bind(this)}
    editBookHandler={this.handleEditBook.bind(this, bookItem)}
    removeBookHandler={this.handleRemoveBook.bind(this, bookItem)}
  />
    /*(<tr key={bookItem.getId()}>
      <td><img src={bookItem.getImageURL()} alt={`Изображение книги ${bookItem.getTitle()}`} className="book-img" onError={this.handleImageError.bind(this)}/></td>
      <td>
        <div className="title">{bookItem.getTitle()}</div>
        <div className="author">{bookItem.getAuthor()}</div>
        <div className="year">{bookItem.getYear()}</div>
      </td>
      <td>
        <button onClick={this.handleEditBook.bind(this, bookItem)}>Редактировать</button>
        <button onClick={this.handleRemoveBook.bind(this, bookItem)}>Удалить</button>
      </td>
    </tr>)*/
    );
    if(this.state.formOn){
      if(this.state.currentInstance){
        return (<BookshelfForm key="form" bookTitle={this.state.currentInstance.getTitle()}
            bookAuthor={this.state.currentInstance.getAuthor()}
            bookYear = {this.state.currentInstance.getYear()}
            bookImageURL = {this.state.currentInstance.getImageURL()}
            dataHandler={this.state.currentInstance.editBook.bind(this.state.currentInstance)}
            formHandler={this.turnBookshelfFormOff.bind(this)}
            formTitle="Редактирование книги"/>);
      }
      return (<BookshelfForm
          dataHandler={Book.addBook(booksArr)}
          formHandler={this.turnBookshelfFormOff.bind(this)}
          formTitle="Новая книга"/>);
      }else {
        return ([<div key="PageFixedHeader"><button onClick={this.handleAddBookButtonOnClick.bind(this)}>Добавить</button></div>,
          <table key="BookTable"><tbody>{tableRow}</tbody></table>]);
      }
  }
}
ReactDOM.render(
  <BookshelfTable books = {booksArr} />,
  document.getElementById('container')
);
