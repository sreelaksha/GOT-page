import ApiService from "./ApiService";

const BookService = {
  getAllBooks(page, filter) {
    let filterValue = filter !== "" ? filter : "";
    return ApiService.get("books/?pageSize=12&page=" + page + filterValue).then(
      (response) => {
        return response.data;
      }
    );
  },
  getBook(id) {
    return ApiService.get(`books/${id}`).then((response) => {
      return response.data;
    });
  },
};
export default BookService;
