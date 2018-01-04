import React from 'react';
import ReactDOM from 'react-dom';
import Book from './book.js';
import BookshelfForm from './bookshelfForm.jsx';
var initBooksArr = [{title: "Большая книга CSS3", author: "Дэвид Макфарланд", year: 2016, imageURL: ""},
{title: "Объектно-ориентированный анализ и проектирование с примерами приложений", author: "Грэди Бутч и др.", year: 2010, imageURL: ""},
{title: "Вы не знаете JS: ES6 и не только", author: "Кайл Симпсон", year: 2017, imageURL: ""},
{title: "Регулярные выражения", author: "Джеффри Фридл", year: 2008, imageURL: ""}];
var booksArr = [];
for(let i = 0; i < initBooksArr.length; i++){
  booksArr.push(new Book(initBooksArr[i].title, initBooksArr[i].author, initBooksArr[i].year, initBooksArr[i].imageURL));
}
class TableRow extends React.Component{
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
    console.log("handleDataFunc() " + title);
    this.state.currentInstance.setTitle(title);
    this.state.currentInstance.setAuthor(author);
    this.state.currentInstance.setYear(year);
    this.state.currentInstance.setImageURL(imageURL);
  }
  render(){
    const tableRow = this.props.books.map((bookItem)=>
      (<tr>
        <td><img src={bookItem.getImageURL()} alt={"Изображение " + bookItem.getTitle()}/></td>
        <td>
          <div className="title">{bookItem.getTitle()}</div>
          <div className="author">{bookItem.getAuthor()}</div>
          <div className="year">{bookItem.getYear()}</div>
        </td>
        <td>
          <button onClick={this.handleEditBook.bind(this, bookItem)}>Редактировать</button>
          <button onClick={this.handleRemoveBook.bind(this, bookItem)}>Удалить</button>
        </td>
      </tr>)
    );
    if(this.state.formOn){
      if(this.state.currentInstance){
        return ([<div><button onClick={this.handleAddBookButtonOnClick.bind(this)}>Добавить</button></div>,
          <table><tbody>{tableRow}</tbody></table>,
          <div><BookshelfForm bookTitle={this.state.currentInstance.getTitle()}
            bookAuthor={this.state.currentInstance.getAuthor()}
            bookYear = {this.state.currentInstance.getYear()}
            bookImageURL = {this.state.currentInstance.getImageURL()}
            dataHandler={this.state.currentInstance.editBook.bind(this.state.currentInstance)}
            formHandler={this.turnBookshelfFormOff.bind(this)}
            formLegend="Редактирование книги"/></div>]);
      }
      return ([<div><button onClick={this.handleAddBookButtonOnClick.bind(this)}>Добавить</button></div>,
        <table><tbody>{tableRow}</tbody></table>,
        <div><BookshelfForm
          dataHandler={Book.addBook(booksArr)}
          formHandler={this.turnBookshelfFormOff.bind(this)}
          formLegend="Новая книга"/></div>]);
      }else {
        return ([<div><button onClick={this.handleAddBookButtonOnClick.bind(this)}>Добавить</button></div>,
          <table><tbody>{tableRow}</tbody></table>]);
      }
  }
}
ReactDOM.render(
  <TableRow books = {booksArr} />,
  document.getElementById('container')
);
