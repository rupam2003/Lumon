import mongoose, { Schema, models } from "mongoose";


const userpostSchema = new Schema({
    
    title:{
        type: String,
        required : true,
    }, 
    
    image: {
        type: String,
        default: '',
    },
    
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:true,
    },
   
    likes:[{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }],
   
    
},
{timestamps: true},
);

const UserPost = models.UserPost || mongoose.model('UserPost',userpostSchema);

export default UserPost;