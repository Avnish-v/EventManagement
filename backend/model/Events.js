import mongoose from "mongoose";

const EventsSchema = new mongoose.Schema(
  {
    eventName: { type: String, required: true, unique: true },
    gallery: {type : [String] ,default:[]},
    basicPrice :{ type: Number, required: true },
    ultimatePrice :{ type: Number, required: true },
    premiumPrice :{ type: Number, required: true },
    basic: [String],
    premium: [String],
    ultimate: [String],
    coverImage : {type:String },
    guest : {type:Number},
    description : {type:String},
  },
  { timestamps: true }
);

export const Events = mongoose.model("Events", EventsSchema);
