'use strict';
import React from 'react';
function BookRowImage(props){
  return (<td><img src={props.bookItem.getImageURL()} alt={`Изображение книги ${props.bookItem.getTitle()}`} className="book-img" onError={props.imageErrorHandler}/></td>);
}
function BookRowInfo(props){
  const bookItem = props.bookItem;
    return (
      <td>
        <div className="title">{bookItem.getTitle()}</div>
        <div className="author">{bookItem.getAuthor()}</div>
        <div className="year">{bookItem.getYear()}</div>
      </td>
    );
}
function BookRowEditRemoveButton(props){
  return (
    <td>
      <button onClick={props.editBookHandler}>Редактировать</button>
      <button onClick={props.removeBookHandler}>Удалить</button>
    </td>
  );
}
class BookRow extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <tr>
        <BookRowImage
          bookItem={}
          imageErrorHandler={}
        />
        <BookRowInfo
          bookItem={}
        />
        <BookRowEditRemoveButton
          editBookHandler={}
          removeBookHandler={}
        />
      </tr>
    );
  }
}
export default BookRow;
