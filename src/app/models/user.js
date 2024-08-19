import mongoose, { Schema, models } from "mongoose";


const userSchema = new Schema({
    
    name:{
        type: String,
        required : true,
    }, 
    
    email:{
        type: String,
        required : true,
        unique : true
        
    },
    image: {
        type: String,
        default: '',
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'UserPost',
    }],
   
    followers:[
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    following:[
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ]
    
},
{timestamps: true},
);

const User = models.User || mongoose.model('User',userSchema);

export default User;