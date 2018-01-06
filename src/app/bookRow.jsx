'use strict';
import React from 'react';
function BookRowImage(props){
  return (<td className="row-container-img"><img src={props.bookItem.getImageURL()} alt={`Изображение книги ${props.bookItem.getTitle()}`} className="row-book-img" onError={props.imageErrorHandler}/></td>);
}
function BookRowInfo(props){
  const bookItem = props.bookItem;
  const bookTitle = bookItem.getTitle()||"Название неизвестно";
  const bookAuthor = bookItem.getAuthor()||"Автор неизвестен";
  const bookYear = bookItem.getYear()&&`${bookItem.getYear()} г.`;
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
function BookRowEditRemoveButton(props){
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
  handleImageError(event){
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
