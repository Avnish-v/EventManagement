import { UserModel } from "../model/User.js";
import bcrypt  from "bcryptjs"
import  jwt from "jsonwebtoken";
const Secret_Key  =  process.env.PRIVATE_JWT_KEY || "8169930419";


export const Signup = async (req ,  res)=>{
  try {
   
const {name  , email , password , address} =  req.body;
const CheckEmail = await UserModel.findOne({email : email});
console.log("the user already exist" , CheckEmail);
if(!CheckEmail){

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const NewUser  =  new UserModel({name , email,password : hashedPassword, address})
  const savedUser =  await NewUser.save();
 const Token  =  jwt.sign({_id : NewUser._id} ,Secret_Key , { expiresIn: '1w' } )
 res.cookie('Autherization' ,Token ,{ maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });
  res.status(201).json({"Sucess": "Registered User" ,  "Token" : Token});

}else {
res.status(400).json({"Error" : "User Already Exist"});
}
  } catch (error) {
    res.status(500).json({"Error" : error.message});
  }
  
}

export const Signin  = async(req,res)=>{
  try {
  const {email ,  password} =  req.body;
  const user = await  UserModel.findOne({email});
  const comparePswd  = await bcrypt.compare(password ,  user.password);
  if(user && comparePswd){
    res.status(200).json({"login" : "SucessFul"});
  }else{
    res.status(400).json({"Error" : "error Something went Wrong"});
  }
  } catch (error) {
   res.status(500).json({error}); 
  }
}