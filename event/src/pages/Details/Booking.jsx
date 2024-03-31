import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateBooking, GetEventId } from "../../service";
import { Icons } from "../../assets";

const Booking = () => {
const Navigate  =  useNavigate()
  const [data, setData] = useState();
  const [person, setperson] = useState(0);
  const [foodType, setFoodType] = useState("");
  const [minDate, setMinDate] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [alternativeNumber, setAlternativeNumber] = useState("");
const [statePrice ,setState] =  useState(0)
const [desc ,setDesc] =  useState()
const [date,  setDate] =  useState()
  const { state } = useLocation();
  const fetchData = async () => {
    const res = await GetEventId(state?.id);
    setData(res[0]);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
    // Calculate two days from the current date
    const today = new Date();
    const twoDaysFromNow = new Date(today);
    twoDaysFromNow.setDate(twoDaysFromNow.getDate() + 3);
    const minDateValue = twoDaysFromNow.toISOString().slice(0, 16); // Format as "YYYY-MM-DDTHH:MM"
    setMinDate(minDateValue);
  }, []);

  const HandleBooking =  async (e)=>{
    e.preventDefault()
    const id  =  localStorage.getItem("id");
    console.log(state?.eventName) 
    const data = {
      plan:state?.name, event:state?.eventName  ,user:id ,description : desc ,  bookingDate:date, total:statePrice, alternative:alternativeNumber, branch:selectedBranch ,  guest:person
    }

    const res  =  await CreateBooking(data);
    console.log(res);
    if(res){

      Navigate("/order")
    }
    
  }
  const calculateTotalPrice = () => {
    let totalPrice = parseInt(state?.price || 0) + person * (foodType === "veg" ? 400 : 500);
    setState( totalPrice );
  };
  useEffect(()=>{
    calculateTotalPrice();
  },[person , foodType])
  return (
    <div className="m-24 bg-[#000000]  rounded-lg p-6">
      <p className="text-center text-3xl font-bold text-secondary-50">
        Booking {data?.eventName} Event Plan Type  {state?.name}
      </p>
      <p className="text-center mt-2 text-[red]">
        (Note-:Food Excluded for 500/- Non-veg and 400/- veg per-person)
      </p>
      <div className="flex gap-2 justify-center items-center">
        <p className="text-secondary-50 font-bold">Total Price</p>
          <p className="text-primary-50 text-sm font-bold">
           {statePrice}
            ₹
          </p>
      
      </div>
      <div className="flex justify-center mt-4 ">

     
      <form className="text-secondary-50 mt-4 flex flex-col items-center w-[40%] border-2 border-[white] rounded-lg p-6">
  <div className="flex flex-col gap-4 w-full">
    <label className="text-lg">Selected Date</label>
    <input
      type="datetime-local"
      min={minDate}
      onChange={(e)=>{setDate(e.target.value)}}
      className="p-2 border border-gray-300 text-[black] rounded-md w-full"
    />
  </div>
  <div className="flex flex-col gap-4 w-full">
    <label className="text-lg">Number Of Persons</label>
    <input
      className="p-2 border border-gray-300 text-[black] rounded-md w-full"
      type="number"
      onChange={(e) => {
        setperson(e.target.value);
      }}
    />
  </div>
  <div className="flex flex-col gap-2 w-full">
    <label className="text-lg">Food Type</label>
    <div className="flex gap-4 items-center">
      <input
        type="radio"
        name="type"

        value={"veg"}
        onChange={(e) => setFoodType(e.target.value)}
        className="appearance-none border border-gray-300 rounded-full w-4 h-4 checked:bg-[#00A885] checked:border-transparent focus:outline-none"
      />
      <label className="text-lg">Veg</label>
      <input
        type="radio"
        name="type"
        value="non-veg"
        onChange={(e) => setFoodType(e.target.value)}
        className="appearance-none border border-gray-300 rounded-full w-4 h-4 checked:bg-[#00A885] checked:border-transparent focus:outline-none"
      />
      <label className="text-lg">Non-veg</label>
      <input
        type="radio"
        name="type"
        value={"both"}
        onChange={(e) => setFoodType(e.target.value)}
        className="appearance-none border border-gray-300 rounded-full w-4 h-4 checked:bg-[#00A885] checked:border-transparent focus:outline-none"
      />
      <label className="text-lg">Both</label>
    </div>
  </div>
  <div className="flex flex-col gap-2 w-full">
        <label className="text-lg">Branch</label>
        <select
          value={selectedBranch}
          onChange={(e)=>{setSelectedBranch(e.target.value)}}
          className="p-2 border border-gray-300 rounded-md w-full text-[black]"
        >
          <option value="">Select Branch</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Thane">Thane</option>
          <option value="Mulund">Mulund</option>
          <option value="Navi Mumbai">Navi Mumbai</option>
          <option value="Andheri">Andheri</option>
        </select>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <label className="text-lg">Alternative Number</label>
        <input
          className="p-2 border border-gray-300 text-[black] rounded-md w-full"
          type="number"
          value={alternativeNumber}
          onChange={(e)=>{setAlternativeNumber(e.target.value)}}
        />
      </div>
      <div className="flex flex-col gap-4 w-full">
    <label className="text-lg">Description</label>
    <input
      className="p-2 border border-gray-300 text-[black] rounded-md w-full"
      type="text"
      aria-multiline
      onChange={(e) => {
        setDesc(e.target.value);
      }}
    />
  </div>
  <div className="flex flex-col gap-4 w-full">
    <label className="text-lg">Advance Payment</label>
    <div className="flex justify-center">

    <img src={Icons.QR} width={100} height={100} />
    </div>
  </div>

  <div className="flex justify-center">
    <button className="h-10  font-bold bg-[#00A885] rounded-md mt-6 w-[200px]" onClick={HandleBooking}>Book</button>
  </div>
</form>
</div>
    </div>
  );
};

export default Booking;
