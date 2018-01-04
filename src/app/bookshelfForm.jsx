import React from 'react';
class BookshelfForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {titleValue: this.props.bookTitle||'', authorValue: this.props.bookAuthor||'', yearValue: this.props.bookYear||'', imageURLValue: this.props.bookImageURL||''};
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
  render(){
    const formLegend = this.props.formLegend;
    return (
      <form onSubmit={this.handleOnSubmit}>
        <fieldset>
          <legend>{formLegend}</legend>
          <label htmlFor="input-title">Название книги</label>
          <input type="text" id="input-title" value={this.state.titleValue} onChange={this.handleTitleInputChange}/>
          <label htmlFor="input-author">Автор книги</label>
          <input type="text" id="input-author" value={this.state.authorValue} onChange={this.handleAuthorInputChange}/>
          <label htmlFor="input-year">Год выпуска</label>
          <input type="number" max="2017" id="input-year" value={this.state.yearValue} onChange={this.handleYearInputChange}/>
          <label htmlFor="input-image">Изображение книги</label>
          <input type="url" id="input-image" value={this.state.imageURLValue} onChange={this.handleImageURLInputChange}/>
        </fieldset>
        <button type="button" onClick={this.handleCancelOnClick}>Отменить</button>
        <button type="submit">Сохранить</button>
      </form>
    );
  }
}
export default BookshelfForm;
