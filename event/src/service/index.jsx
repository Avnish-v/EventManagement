import axios from "axios";
const baseUrl = "http://localhost:8080/";
export const handleSignin = async (data) => {
  try {
    const res = await axios.post(baseUrl + "auth/signin", data);
    return res;
  } catch (error) {
    console.error("Error in handleSignin:", error);
    throw error; // Re-throwing the error for the caller to handle
  }
};

export const handleSignUp = async (data) => {
  try {
    const res = await axios.post(baseUrl + "auth/signup", data);
    return res;
  } catch (error) {
    console.error("Error in handleSignUp:", error);
    throw error; // Re-throwing the error for the caller to handle
  }
};

export const GetEvent = async () => {
  try {
    const res = await axios.get(baseUrl + "user/events");
    return res;
  } catch (error) {
    console.error("Error in GetEvent:", error);
    throw error; // Re-throwing the error for the caller to handle
  }
};

export const addImg = async (form) => {
  try {
    const res = await axios.post(baseUrl + "admin/event/gallery", form);
    return res.data;
  } catch (error) {
    console.error("Error in addImg:", error);
    throw error; // Re-throwing the error for the caller to handle
  }
};

export const removeImg = async (eventId, imageId) => {
  try {
    const res = await axios.delete(`${baseUrl}admin/event/gallery`, {
      data: {
        eventId: eventId,
        imageId: imageId,
      },
    });
    return res;
  } catch (error) {
    console.error("Error removing image:", error);
    throw error;
  }
};

export const removeEventById = async (eventId) => {
  try {
    const res = await axios.delete(baseUrl + `admin/event/${eventId}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const UpdatePrice = async (eventId, from) => {
  try {
    const res = await axios.put(baseUrl + `admin/event/price/${eventId}`, from);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const GetEventId = async (eventId) => {
  try {
    const res = await axios.get(baseUrl + `user/eventid`, {
      params: {
        eventId: eventId,
      },
    });
    return res.data;
  } catch (error) {}
};

export const CreateBooking  = async (data)=>{
  try {
      const res  =  await axios.post(baseUrl +"user/booking", data);
      return res.data ; 

  } catch (error) {
    console.log("Booking Created " , error)
  }
}

export const GetBooking =  async  ()=>{
  try {
    const res  =  await axios.get(baseUrl+"user/booking/all")
    return res.data;
  } catch (error) {
    
  }
}

export const UpdateStatus  =  async  (bookingId ,status )=>{
  try {
      const res  =  await axios.put(baseUrl+`user/Update/status/${bookingId}`,status )
      return res.data
  } catch (error) {
    
  }
}

export const GetStatus =  async  (userId)=>{
  try {
    const res  =  await axios.get(baseUrl+`user/status/${userId}`);
    return res.data;
  } catch (error) {
    
  }
}

export const RemoveBook = async  (bookingId)=>{
  try {
    const res = await axios.delete(baseUrl + `user/cancel/booking/${bookingId}`)
    return res.data
  } catch (error) {
    
  }
}  