//В скрипте определяется форма, принимаются и обрабатываются данные полей
'use strict';
import React from 'react';
class BookshelfForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {titleValue: this.props.bookTitle||'', //при добавлении новой книги данных не будет, поэтому необходимо подставить пустую строку
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
  handleTitleInputChange(event){ //конролирует изменения в полях формы и обновляют компоненты
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
    this.props.formHandler(); //изменяет formOn в bookshelfPage на off, что закроет форму
  }
  handleOnSubmit(event){  //установит новые данные в нужный экземпляр, зароет форму
    event.preventDefault();
    this.props.dataHandler(this.state.titleValue.trim(), this.state.authorValue.trim(), this.state.yearValue, this.state.imageURLValue);
    this.props.formHandler();
    this.props.bookCounter();
  }
  componentWillReceiveProps(nextProps){  //необходим для обновления данных формы, если нажата кнопка добавить при редактировании
    this.setState({
      titleValue: nextProps.bookTitle||"",
      authorValue: nextProps.bookAuthor||"",
      yearValue: nextProps.bookYear||"",
      imageURLValue: nextProps.bookImageURL||"",
    });
  }
  render(){
    const formTitle = this.props.formTitle;
    return (
      <div className="book-form-container">
        <h1 className="book-form-head">{formTitle}</h1>
        <hr/>
        <form onSubmit={this.handleOnSubmit} className="book-form">
          <div className="input-group">
            <label htmlFor="input-title" className="book-form-label">Название книги:</label>
            <input type="text" id="input-title" required={true} className="book-form-input" value={this.state.titleValue} onChange={this.handleTitleInputChange} placeholder="Введите название книги"/>
          </div>
          <div className="input-group">
            <label htmlFor="input-author" className="book-form-label">Автор книги:</label>
            <input type="text" id="input-author" required={true} className="book-form-input" value={this.state.authorValue} onChange={this.handleAuthorInputChange} placeholder="Введите автора книги"/>
          </div>
          <div className="input-group">
            <label htmlFor="input-year" className="book-form-label">Год выпуска:</label>
            <input type="number" required={true} className="book-form-input" max="2017" id="input-year" value={this.state.yearValue} onChange={this.handleYearInputChange} placeholder="Введите год выпуска"/>
          </div>
          <div className="input-group">
            <label htmlFor="input-image" className="book-form-label">Изображение книги:</label>
            <input type="url" required={true} className="book-form-input" id="input-image" value={this.state.imageURLValue} onChange={this.handleImageURLInputChange} placeholder="Введите URL изображения"/>
          </div>
          <div className="button-group">
            <button type="submit" className="btn btn-submit">Сохранить</button>
            <button type="button" className="btn btn-cancel" onClick={this.handleCancelOnClick}>Отменить</button>
          </div>
        </form>
      </div>
    );
  }
}
export default BookshelfForm;
