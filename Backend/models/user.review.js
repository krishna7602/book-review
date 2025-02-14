const mongoose=require('mongoose');



const reviewSchema=new mongoose.Schema({
    bookId: {
        type: Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    review: {
        type: String,
        required: true,
        minlength: 3,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})


const Review=mongoose.model("Review",reviewSchema);
module.exports=Review;