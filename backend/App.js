import express from "express";
import dotenv from "dotenv";
import AuthRoute from "./routes/AuthRoute.js";
import { ConnectMongo } from "./db/Connect.js";
import cors from "cors"
import AdminRoute from "./routes/AdminRoutes.js";
import UserRoute from "./routes/UserRoutes.js";
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
ConnectMongo();
const App = express();

dotenv.config();
App.use(express.json());
App.use(cors());
const Port = process.env.PORT_NUMBER || 8080;
App.use('/auth', AuthRoute);
App.use('/admin',AdminRoute);
App.use('/user' ,UserRoute)
App.listen(Port, () => {
    console.log(`Server is listening on port ${Port}`);
});