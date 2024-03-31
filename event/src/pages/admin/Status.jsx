import React, { useEffect, useState } from 'react'
import { GetBooking, UpdateStatus } from '../../service';
import { formatDate } from '../../utils';

const Status = () => {
  const [data ,  setData] =  useState([]);
  const [update , setUpdate] =  useState();
  const handleData  =  async ()=>{
    const res  =  await GetBooking();
    const pending  = res.bookings.filter((data)=> data.status === "pending");
    setData(pending);
    
  }
  useEffect(()=>{
    handleData();
  },[update])
 
  const handleUpdate  = async(bookingId ,  status)=>{
    const data = {
      status :  status
    }
    const res =  await UpdateStatus(bookingId ,  data);
    console.log(res)
    setUpdate(res);
  }


  return (
    <div className='m-24'>
    <div className='bg-[#000000] h-[calc(100vh-200px)] rounded-md p-6 overflow-y-auto'>
        <p className='text-4xl text-secondary-50 font-bold text-center'>Status</p>
        <div className='flex flex-col gap-5 justify-center '>
        {data.map((booking)=>{
            return <div className='flex justify-between items-center mt-4 border-b border-[#88929B] pb-2'>
                <div className=''>
                <p className='text-xl font-bold text-secondary-50'>{booking.event}</p>
                <div className='flex gap-2'>
                <p className='text-sm text-[#88929B]'>{booking.userData.name}</p>
                <p className='text-sm text-[#88929B]'>{booking.userData.email}</p>
                <p className='text-sm text-[#88929B]'>{booking.userData.address}</p>
                </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                <p className='text-lg font-medium text-[#88929B]'>{formatDate(booking.bookingDate)}</p>
                <p className='text-sm text-[#88929B]'>{booking?.branch}</p>
                </div>
               
                <div className='flex gap-5'>
                    <button className='p-1 w-[100px] text-center text-secondary-50 font-bold text-md bg-[#00A885] rounded-md' onClick={()=>{handleUpdate(booking?._id ,  "confirmed")}}>Accept</button>
                    <button className='p-1 w-[100px] text-center text-secondary-50 font-bold text-md bg-[red] rounded-md' onClick={()=>{handleUpdate(booking?._id ,  "rejected")}}>Reject</button>
                </div>
                </div>
        })}
        </div>
    </div>

   </div>
  )
}

export default Status