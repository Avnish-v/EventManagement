import express from "express";
import { createBooking, getAllBookingsWithStatus, getAllEvents, getBookingsByUserId, getEventById, removeBooking, updateBookingStatus } from "../Controller/UserController.js";

const UserRoute  =  express();

UserRoute.get("/events",  getAllEvents);
UserRoute.get("/eventid",getEventById)
UserRoute.put("/Update/status/:bookingId" , updateBookingStatus) ,
UserRoute.delete("/cancel/booking/:bookingId" ,  removeBooking) , 
UserRoute.get("/booking/all" ,  getAllBookingsWithStatus),
UserRoute.get("/status/:userId" ,  getBookingsByUserId)
UserRoute.post("/booking" ,createBooking)


export default UserRoute;