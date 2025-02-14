const mongoose = require('mongoose');


const userBookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
    },
    image: {
        type: String,
    },
    author: {
        type: String,
        required: true,
        minlength: 3,
    },
    image_url: {
        type: String,
        default: "https://res.cloudinary.com/dibsgcq9a/image/upload/v1716750907/book-world/sfx9lfhbj3pkxy0esxkk.jpg",
    },
    year_published: {
        type: Number,
        default: new Date().getFullYear(),
    },


})

const Book = mongoose.model("Book", userBookSchema);
module.exports = Book;