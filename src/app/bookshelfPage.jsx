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
    this.state = {bookAmout: this.props.books.length, formOn: false, currentInstance: null, formTitle: ""};
  }
  handleRemoveBook(bookInstance){
    bookInstance.removeBook(this.props.books);
    this.setState({bookAmout: this.props.books.length});
  }
  handleEditBook(bookInstance){
    this.setState({formOn: true, currentInstance: bookInstance, formTitle: "Редактирование книги"});
  }
  turnBookshelfFormOff(){
    this.setState({formOn: false});
  }
  handleAddBookButtonOnClick(){
    this.setState({formOn: true, currentInstance: null, formTitle: "Добавление новой книги"});
  }
  handleData(title, author, year, imageURL){
    this.state.currentInstance.setTitle(title);
    this.state.currentInstance.setAuthor(author);
    this.state.currentInstance.setYear(year);
    this.state.currentInstance.setImageURL(imageURL);
  }
  render(){
    const tableRow = this.props.books.map((bookItem)=>
  <BookRow
    key={bookItem.getId()}
    bookItem={bookItem}
    editBookHandler={this.handleEditBook.bind(this, bookItem)}
    removeBookHandler={this.handleRemoveBook.bind(this, bookItem)}
  />
    );
    if(this.state.formOn){
      if(this.state.currentInstance){
        return ([
          <div key="PageFixedHeader" className="header">
            <button onClick={this.handleAddBookButtonOnClick.bind(this)}>Добавить</button>
          </div>,
          <BookshelfForm key="BookForm"
          bookTitle={this.state.currentInstance.getTitle()}
          bookAuthor={this.state.currentInstance.getAuthor()}
          bookYear = {this.state.currentInstance.getYear()}
          bookImageURL = {this.state.currentInstance.getImageURL()}
          dataHandler={this.state.currentInstance.editBook.bind(this.state.currentInstance)}
          formHandler={this.turnBookshelfFormOff.bind(this)}
          formTitle={this.state.formTitle}/>]);
      }
      return (<BookshelfForm
        dataHandler={Book.addBook(this.props.books)}
        formHandler={this.turnBookshelfFormOff.bind(this)}
        formTitle={this.state.formTitle}/>);
      }else {
        return ([<div key="PageFixedHeader" className="header"><button onClick={this.handleAddBookButtonOnClick.bind(this)}>Добавить</button></div>,
          <table key="BookTable"><tbody>{tableRow}</tbody></table>]);
      }
  }
}
ReactDOM.render(
  <BookshelfTable books = {booksArr} />,
  document.getElementById('root')
);
