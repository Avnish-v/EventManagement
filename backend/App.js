import express from "express";
import dotenv from "dotenv";
import AuthRoute from "./routes/AuthRoute.js";
import { ConnectMongo } from "./db/Connect.js";
ConnectMongo();
const App = express();
dotenv.config();
App.use(express.json());
const Port = process.env.PORT_NUMBER || 3000;
App.use('/auth', AuthRoute);
App.listen(Port, () => {
    console.log(`Server is listening on port ${Port}`);
});