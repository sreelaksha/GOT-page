import ApiService from "./ApiService";

const BookService = {
  getAllBooks(page) {
    return ApiService.get("books/?pageSize=12&page=" + page).then(
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
