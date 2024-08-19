import mongoose, { Schema, models } from "mongoose";



const commentSchema = new Schema({
    title:{
        type: String,
        required : true,
        minlength: 1, 
        maxlength: 1000 
    }, 
    
    author:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required : true,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'UserPost',
        required : true,
    },
    
},
{timestamps: true},
)

const Comment = models.Comment || mongoose.model('Comment',commentSchema);

export default Comment;