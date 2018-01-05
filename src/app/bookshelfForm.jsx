'use strict';
import React from 'react';
class BookshelfForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {titleValue: this.props.bookTitle||'',
    authorValue: this.props.bookAuthor||'',
    yearValue: this.props.bookYear||'',
    imageURLValue: this.props.bookImageURL||''};
    this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
    this.handleAuthorInputChange = this.handleAuthorInputChange.bind(this);
    this.handleYearInputChange = this.handleYearInputChange.bind(this);
    this.handleImageURLInputChange = this.handleImageURLInputChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleCancelOnClick = this.handleCancelOnClick.bind(this);
  }
  handleTitleInputChange(event){
    this.setState({titleValue: event.target.value});
  }
  handleAuthorInputChange(event){
    this.setState({authorValue: event.target.value});
  }
  handleYearInputChange(event){
    this.setState({yearValue: event.target.value});
  }
  handleImageURLInputChange(event){
    this.setState({imageURLValue: event.target.value});
  }
  handleCancelOnClick(){
    this.props.formHandler();
  }
  handleOnSubmit(event){
    event.preventDefault();
    this.props.dataHandler(this.state.titleValue, this.state.authorValue, this.state.yearValue, this.state.imageURLValue);
    this.props.formHandler();
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      titleValue: nextProps.bookTitle,
      authorValue: nextProps.bookAuthor,
      yearValue: nextProps.bookYear,
      imageURLValue: nextProps.bookImageURL,
    });
  }
  render(){
    const formTitle = this.props.formTitle;
    return (
      <div className="book-form-container">
        <h1 className="book-form-head">{formTitle}</h1>
        <form onSubmit={this.handleOnSubmit} className="book-form">
          <div className="input-group">
            <label htmlFor="input-title" className="book-form-label">Название книги:</label>
            <input type="text" id="input-title" className="book-form-input" value={this.state.titleValue} onChange={this.handleTitleInputChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="input-author" className="book-form-label">Автор книги:</label>
            <input type="text" id="input-author" className="book-form-input" value={this.state.authorValue} onChange={this.handleAuthorInputChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="input-year" className="book-form-label">Год выпуска:</label>
            <input type="number" className="book-form-input" max="2017" id="input-year" value={this.state.yearValue} onChange={this.handleYearInputChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="input-image" className="book-form-label">Изображение книги:</label>
            <input type="url" className="book-form-input" id="input-image" value={this.state.imageURLValue} onChange={this.handleImageURLInputChange}/>
          </div>
          <div className="button-group">
            <button type="button" className="btn btn-cancel" onClick={this.handleCancelOnClick}>Отменить</button>
            <button type="submit" className="btn btn-submit">Сохранить</button>
          </div>
        </form>
      </div>
    );
  }
}
export default BookshelfForm;
