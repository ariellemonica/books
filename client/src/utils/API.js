import axios from "axios";

export default {
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Deletes the book with the given id from the user's books
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book for the user
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    },
    // google search
    googleSearch: function(searchTerm) {
        return axios.get("/api/books" + searchTerm);
    }
}