import React from 'react';
class BookshelfForm extends React.Component{
  constructor(props){
    super(props);
    this.titleData = this.props.bookProperty.getTitle();
    this.authorData = this.props.bookProperty.getAuthor();
    this.yearData = this.props.bookProperty.getYear();
    this.imageURLData = this.props.bookProperty.getImageURL();
    this.state = {titleValue: this.titleData, authorValue: this.authorData, yearValue: this.yearData, imageURLValue: this.imageURLData};
    this.handleTitleChanged = this.handleTitleChanged.bind(this);
    this.handleAuthorChanged = this.handleAuthorChanged.bind(this);
    this.handleYearChanged = this.handleYearChanged.bind(this);
    this.handleImageURLChanged = this.handleImageURLChanged.bind(this);
  }
  handleTitleChanged(){
    this.setState({titleValue: event.target.value});
  }
  handleAuthorChanged(){
    this.setState({authorValue: event.target.value});
  }
  handleYearChanged(){
    this.setState({yearValue: event.target.value});
  }
  handleImageURLChanged(){
    this.setState({imageURLValue: event.target.value});
  }
  render(){
  //  const bookData = this.props.bookProperty;
    const formName = this.props.formLegend;
    return (
      <fieldset>
        <legend>{formName}</legend>
        <label htmlFor="input-title">Название книги</label>
        <input type="text" id="input-title" value={this.state.titleValue} onChange={this.handleTitleChanged}/>
        <label htmlFor="input-author">Автор книги</label>
        <input type="text" id="input-author" value={this.state.authorValue} onChange={this.handleAuthorChanged}/>
        <label htmlFor="input-year">Год выпуска</label>
        <input type="number" max="2017" id="input-year" value={this.state.yearValue} onChange={this.handleYearChanged}/>
        <label htmlFor="input-image">Изображение книги</label>
        <input type="url" id="input-image" value={this.state.imageURLValue} onChange={this.handleImageURLChanged}/>
        <button>Отменить</button>
        <button>Сохранить</button>
      </fieldset>
    );
  }
}
export default BookshelfForm;
