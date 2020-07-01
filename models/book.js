const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// these values will need to come back from Google Books API
const bookSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: Array, required: true },
    description: String,
    image: String,
    link: String,
    date: { type: Date, default: Date.now }, 
}); 

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;