import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    plan : {type:String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
    event: { type:String ,  required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'rejected'], default: 'pending' }, 
    bookingDate: { type: Date, required: true },
    total: { type: String },
    alternative :{type:Number ,maxlenth:10 },
    branch : {type:String},
    food : {type:String}
}, { timestamps: true });

export  const BookingModel = mongoose.model('Booking', BookingSchema);

