import React from 'react';
import ReactDOM from 'react-dom';
import {Book} from './book.js';
var initBooksArr = [{title: "Большая книга CSS3", author: "Дэвид Макфарланд", year: "2016", imageURL: ""},
{title: "Объектно-ориентированный анализ и проектирование с примерами приложений", author: "Грэди Бутч и др.", year: "2010", imageURL: ""},
{title: "Вы не знаете JS: ES6 и не только", author: "Кайл Симпсон", year: "2017", imageURL: ""},
{title: "Регулярные выражения", author: "Джеффри Фридл", year: "2008", imageURL: ""}];
var booksArr = [];
for(let i = 0; i < initBooksArr.length; i++){
  booksArr.push(new Book(initBooksArr[i].title, initBooksArr[i].author, initBooksArr[i].year, initBooksArr[i].imageURL));
}
class TableRow extends React.Component{
  constructor(props){
    super(props);
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
          <button>Редактировать</button>
          <button>Удалить</button>
        </td>
      </tr>)
    );
    return (<table>{tableRow}</table>);
  }
}
ReactDOM.render(
  <TableRow books = {booksArr} />,
  document.getElementById('container')
);
