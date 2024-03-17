import mongoose from "mongoose";

export const ConnectMongo =()=>{ mongoose.connect("mongodb://localhost:27017/Event", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});
}