import ApiService from './ApiService'

const BookService = {
    getBook(id) {
        return ApiService.get(`books/${id}`).then((response) => {
            return response.data
        })
    },
}
export default BookService

