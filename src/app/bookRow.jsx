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
  handleImageError(event){
    event.target.src = 'https://images-na.ssl-images-amazon.com/images/I/61ETc9D5UKL.png';
  }
  render(){
    return (
      <tr>
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
