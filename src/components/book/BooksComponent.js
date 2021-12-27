import React from "react";
import BookService from "../../services/BookService";
import {
  Card,
  CardContainer,
  PaginationContainer,
} from "../../styles/StyleComponent";
import { getIdFromUrl } from "../../utils";
import Page from "../common/Page";
import Pagination from "../common/Pagination";
import { Box, Menu } from "grommet";

export default class BooksComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      filter: "",
    };
  }
  componentDidMount() {
    this.loadBooks(1);
  }

  handleCardClick = (book) => {
    const bookId = getIdFromUrl(book.url);
    this.props.history.push(`/book/${bookId}`);
  };

  handleFilter = (filterValue) => {
    this.setState(
      {
        filter: filterValue,
      },
      () => this.loadBooks(1)
    );
  };

  loadBooks = ({ page }) => {
    BookService.getAllBooks(page, this.state.filter).then((result) => {
      this.setState({
        books: result,
      });
    });
  };

  render() {
    return (
      <Page>
        <h1>Books</h1>
        <Box align="end" pad="small">
          <Menu
            color="light-1"
            dropProps={{
              align: { top: "bottom", left: "left" },
              elevation: "xlarge",
            }}
            label="Release Date"
            items={[
              {
                label: "1996 - 1999",
                onClick: () => {
                  this.handleFilter(
                    "&fromReleaseDate=1996-08-01&toReleaseDate=1999-02-02"
                  );
                },
              },
              {
                label: "2000 - 2009",
                onClick: () => {
                  this.handleFilter(
                    "&fromReleaseDate=2000-10-31&toReleaseDate=2008-06-18"
                  );
                },
              },
              {
                label: "2011 - 2015",
                onClick: () => {
                  this.handleFilter(
                    "&fromReleaseDate=2011-03-29&toReleaseDate=2015-10-06"
                  );
                },
              },
            ]}
          />
        </Box>
        <CardContainer>
          {this.state.books.map((book, index) => (
            <Card key={index} onClick={this.handleCardClick.bind(this, book)}>
              <h2> {book.name} </h2>
              <p>{book.numberOfPages}</p>
            </Card>
          ))}
        </CardContainer>
        <PaginationContainer>
          <Pagination handlePagination={this.loadHouses} noOfPages={12} />
        </PaginationContainer>
      </Page>
    );
  }
}
