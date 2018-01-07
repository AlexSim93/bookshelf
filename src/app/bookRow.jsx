//формирует строку для таблицы
'use strict';
import React from 'react';
function BookRowImage(props){ //формирует изображение
  return (<td className="row-container-img"><img src={props.bookItem.getImageURL()} alt={`Изображение книги ${props.bookItem.getTitle()}`} className="row-book-img" onError={props.imageErrorHandler}/></td>);
}
function BookRowInfo(props){ //записывает данные в ячейку
  const bookItem = props.bookItem;
  const bookTitle = bookItem.getTitle();
  const bookAuthor = bookItem.getAuthor();
  const bookYear = `${bookItem.getYear()} г.`;
    return (
      <td className="row-container-info">
        <ul className="row-list-info">
          <li className="row-title">{bookTitle}</li>
          <li className="row-author">{bookAuthor}</li>
          <li className="row-year">{bookYear}</li>
        </ul>
      </td>
    );
}
function BookRowEditRemoveButton(props){ //формирует ячейку с кнопками
  return (
    <td className="row-container-buttons">
      <button className="row-btn row-btn-edit" onClick={props.editBookHandler}>Редактировать</button>
      <button className="row-btn row-btn-remove" onClick={props.removeBookHandler}>Удалить</button>
    </td>
  );
}
class BookRow extends React.Component{
  constructor(props){
    super(props);
  }
  handleImageError(event){ //если картинка из формы не загрузилась, то берется изображение по умолчанию
    event.target.src = './images/default_img.png';
  }
  render(){
    return (
      <tr className="book-table-row">
        <BookRowImage
          bookItem={this.props.bookItem}
          imageErrorHandler={this.handleImageError.bind(this)}
        />
        <BookRowInfo
          bookItem={this.props.bookItem}
        />
        <BookRowEditRemoveButton
          editBookHandler={this.props.editBookHandler}
          removeBookHandler={this.props.removeBookHandler}
        />
      </tr>
    );
  }
}
export default BookRow;
