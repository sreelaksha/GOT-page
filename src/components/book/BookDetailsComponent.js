import React from "react";
import BookService from "../../services/BookService";
import { withRouter } from "react-router-dom";
import AttributeValueComponent from "../common/AttributeValueComponent";
import { WideCard } from "../../styles/StyleComponent";
import Page from "../common/Page";

class BookDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: null,
      id: this.props.match.params.id,
    };
  }

  componentDidMount() {
    BookService.getBook(this.state.id).then((result) => {
      this.setState({
        books: result,
      });
      console.log(this.state.books);
    });
  }

  render() {
    return (
      <Page>
        <h1>Book Details</h1>
        {this.state.books && (
          <WideCard>
            <AttributeValueComponent
              label="Name"
              value={this.state.books.name}
            />
            <AttributeValueComponent
              label="ISBN"
              value={this.state.books.isbn}
            />
            <AttributeValueComponent
              label="Authors"
              value={this.state.books.authors}
            />
            <AttributeValueComponent
              label="Number Of Pages"
              value={this.state.books.numberOfPages}
            />
            <AttributeValueComponent
              label="Publisher"
              value={this.state.books.publisher}
            />
            <AttributeValueComponent
              label="Country"
              value={this.state.books.country}
            />
            <AttributeValueComponent
              label="Media Type"
              value={this.state.books.mediaType}
            />
            <AttributeValueComponent
              label="Released"
              value={this.state.books.released}
            />
            <AttributeValueComponent
              type="character"
              label="Characters"
              value={this.state.books.characters}
            />
            <AttributeValueComponent
              type="character"
              label="Pov Characters"
              value={this.state.books.povCharacters}
            />
          </WideCard>
        )}
      </Page>
    );
  }
}
export default withRouter(BookDetailsComponent);
