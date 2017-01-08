import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key = {book.title} className = "list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className =  "list-gropu col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //whatever is returned form here will end up
  //showing up in the props of BookList
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
