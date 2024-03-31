import { Events } from "../model/Events.js";
import { BookingModel } from "../model/Booking.js";
import { UserModel } from "../model/User.js";
import mongoose from "mongoose";

export const getAllEvents = async (req, res) => {
  try {
    // Fetch all events from the database
    const events = await Events.find();
    // Respond with the events data
    res.status(200).json(events);
  } catch (error) {
    // If an error occurs, respond with an error message
    res.status(500).json({ error: error.message });
  }
};

export const getEventById = async (req, res) => {
  try {
    const eventId = req.query.eventId;
    console.log(eventId, "this ios tjhe id ");
    const event = await Events.find({ _id: eventId });
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    console.log(event);
    res.status(200).json(event);
  } catch (error) {
    // If an error occurs, respond with an error message
    res.status(500).json({ error: error.message });
  }
};

export const updateBookingStatus = async (req, res) => {
  const { bookingId } = req.params;
  const { status } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(bookingId)) {
      return res.status(400).json({ message: "Invalid booking ID." });
    }
    if (!["confirmed", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status provided." });
    }
    const updatedBooking = await BookingModel.findByIdAndUpdate(bookingId, {
      status,
    });

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found." });
    }

    return res.status(200).json({
      message: "Booking status updated successfully.",
      booking: updatedBooking,
    });
  } catch (error) {
    console.error("Error updating booking status:", error);
    return res.status(500).json({
      message: "An error occurred while updating booking status.",
      error: error.message,
    });
  }
};
export const getAllBookingsWithStatus = async (req, res) => {
  try {
    const bookings = await BookingModel.find();
    const userDataPromises = bookings.map(async (booking) => {
      const user = await UserModel.findById(booking.user);
      return {
        ...booking.toObject(),
        userData: {
          name: user.name,
          email: user.email,
          number: user.phone,
          address: user.address,
        },
      };
    });

    const bookingsWithUserData = await Promise.all(userDataPromises);

    if (!bookingsWithUserData || bookingsWithUserData.length === 0) {
      return res.status(404).json({ message: "No bookings found." });
    }

    return res.status(200).json({ bookings: bookingsWithUserData });
  } catch (error) {
    console.error("Error retrieving bookings:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while retrieving bookings.", error });
  }
};

export const removeBooking = async (req, res) => {
  const { bookingId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(bookingId)) {
      return res.status(400).json({ message: "Invalid booking ID." });
    }

    // const removedBooking = await BookingModel.findByIdAndRemove(bookingId);
    const removedBooking = await BookingModel.findByIdAndDelete(bookingId);

    if (!removedBooking) {
      return res.status(404).json({ message: "Booking not found." });
    }

    return res.status(200).json({
      message: "Booking removed successfully.",
      booking: removedBooking,
    });
  } catch (error) {
    console.error("Error removing booking:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while removing booking." });
  }
};

export const getBookingsByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID." });
    }
    const bookings = await BookingModel.find({ user: userId });

    if (!bookings) {
      return res
        .status(404)
        .json({ message: "No bookings found for the specified user." });
    }

    return res.status(200).json({ bookings });
  } catch (error) {
    console.error("Error retrieving bookings:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while retrieving bookings." });
  }
};

export const createBooking = async (req, res) => {
  const {
    plan,
    user,
    event,
    bookingDate,
    total,
    alternative,
    branch,
    guest,
    description,
  } = req.body;
  console.log(req.body);
  try {
    // Create a new booking instance
    const newBooking = new BookingModel({
      plan,
      user,
      event,
      bookingDate,
      total,
      alternative,
      branch,
      guest,
      description,
    });

    // Save the new booking to the database
    const savedBooking = await newBooking.save();

    return res
      .status(201)
      .json({
        message: "Booking created successfully.",
        booking: savedBooking,
      });
  } catch (error) {
    console.error("Error creating booking:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while creating booking." });
  }
};
