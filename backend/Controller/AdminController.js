import { Events } from "../model/Events.js";
import fs from 'fs';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

 
export const AddEvent = async (req, res) => {
  try {
    const {
      eventName,
      basicPrice,
      ultimatePrice,
      premiumPrice,
      basic,
      premium,
      ultimate,
    } = req.body;
    if (!req.files || !req.files.coverImage) {
      return res.status(400).json({ error: "Cover image is required." });
    }
    const coverImagePath = req.files.coverImage[0].path; // Get the path to the uploaded cover image
    const galleryPaths = req.files.galleryImages[0].path;
    const gallery = [];
    gallery.push(galleryPaths);
    const event = new Events({
      eventName,
      basicPrice,
      ultimatePrice,
      premiumPrice,
      basic,
      premium,
      ultimate,
      gallery: gallery,
      coverImage: coverImagePath,
    });

    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const addImageToGallery = async (req, res) => {
  try {
    const { eventId } = req.body;
    const gallery  =  req.files.gallery[0].path;
console.log(eventId ,  gallery);
    const event = await Events.findById(eventId);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    event.gallery.push(gallery);
    await event.save();
    res
      .status(200)
      .json({ message: "Image added to the gallery successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const removeImageFromGallery = async (req, res) => {
  try {
    const { eventId, imageId} = req.body;;
    console.log(eventId ,  imageId)
    const event = await Events.findById(eventId);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    const imageIndex = event.gallery.findIndex((image) => image == imageId);
    if (imageIndex === -1) {
      return res.status(404).json({ error: "Image not found in the gallery" });
    }
    // Remove image from filesystem
    const imagePath = event.gallery[imageIndex]; // Assuming path is stored directly in the gallery array
    fs.unlinkSync(path.join(__dirname, '..', imagePath));

    event.gallery.splice(imageIndex, 1);
    await event.save();
    res
      .status(200)
      .json({ message: "Image removed from the gallery successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateEventPrices = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const { basicPrice, premiumPrice, ultimatePrice } = req.body;
    
    // Find the event by its ID
    const existingEvent = await Events.findById(eventId);
    if (!existingEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    // Update the prices if provided in the request body
    if (basicPrice !== undefined) {
      existingEvent.basicPrice = basicPrice;
    }
    if (premiumPrice !== undefined) {
      existingEvent.premiumPrice = premiumPrice;
    }
    if (ultimatePrice !== undefined) {
      existingEvent.ultimatePrice = ultimatePrice;
    }

    // Save the updated event
    const updatedEvent = await existingEvent.save();

    res.status(200).json({ message: "Event prices updated successfully", event: updatedEvent });
  } catch (error) {
    console.error('Error updating event prices:', error);
    res.status(500).json({ error: error.message });
  }
};
export const removeEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const event = await Events.findOneAndDelete({ _id:eventId});
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json({ message: "Event removed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
