import { UserModel } from "../model/User.js";
import bcrypt  from "bcryptjs"
import  jwt from "jsonwebtoken";
const Secret_Key  =  process.env.PRIVATE_JWT_KEY || "8169930419";


export const Signup = async (req, res) => {
  try {
    const { name, email, password, address,phone } = req.body;
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ "Error": "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new UserModel({ name, email, password: hashedPassword, address ,phone});
    await newUser.save();

    const token = jwt.sign({ _id: newUser._id }, Secret_Key, { expiresIn: '1w' });
    return res.status(201).json({ "Success": "Registered user", Token: token ,user : newUser.name , admin :newUser.isAdmin,  id:newUser._id});
  } catch (error) {
    return res.status(500).json({ "Error": error.message });
  }
}

export const Signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
  if (!user) {
      return res.status(400).json({ "Error": "Invalid email or password" });
    }

    const comparePswd = await bcrypt.compare(password, user.password);
    if (comparePswd) {
      const token = jwt.sign({ _id: user._id }, Secret_Key);
      return res.status(200).json({ "Login": "Successful", Token: token, user : user.name , admin :  user.isAdmin ,  id:user._id});
    } else {
      return res.status(400).json({ "Error": "Invalid email or password" });
    }
  } catch (error) {
    return res.status(500).json({ "Error": error.message });
  }
}
