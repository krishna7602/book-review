const mongoose=require('mongoose');



const commentSchema=new mongoose.Schema({
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
    comment: {
        type: String,
        required: true,
        minlength: 3,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});


const Comment=mongoose.model("Comment",commentSchema);
module.exports=Comment;