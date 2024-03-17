import  express from "express";
import {  Signin,Signup } from "../Controller/AuthController.js"
const AuthRoute  =  express();
AuthRoute.post("/signup" , Signup );
AuthRoute.post("/signin" , Signin);
// AuthRoute.post("/forget" , ForgerPswd);
export default AuthRoute;