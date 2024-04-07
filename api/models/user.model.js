import mongoose from "mongoose";

const UserSchema = new  mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique : true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password: {
        type:String,
        require:true,
    },
    profilePicture:{
        type:String,
        default:'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png',
    },
    }, {timestamps: true}
);

const User = mongoose.model('User',UserSchema);

export default  User;