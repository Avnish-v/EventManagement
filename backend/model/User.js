import mongoose from "mongoose";
const UserSchema = new  mongoose.Schema({
    name : {type : String , required : true } ,
    password : {type : String ,required :  true },
    email : {type :  String  , required:true , unique : true},
    phone : {type:Number , maxlenth:10 },
    address : {type : String  ,required : true},
    isAdmin : {type:Boolean ,  default :false},
},{timestamps : true});

export const UserModel  = mongoose.model("User" ,  UserSchema);