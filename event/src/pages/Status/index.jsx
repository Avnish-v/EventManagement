import React, { useEffect, useState } from 'react'
import {  GetStatus, RemoveBook } from '../../service';
import { formatDate } from '../../utils';
import { Icons } from '../../assets';

const BookingStatus = () => {
  const [data ,  setData] =  useState([]);
  const [update , setUpdate] =  useState();
  const handleData  =  async ()=>{
    const id  =  localStorage.getItem("id");
    const res  =  await GetStatus(id);
    setData(res.bookings);
  }
  useEffect(()=>{
    handleData();
  },[update])
 
  const handleUpdate  = async(bookingId)=>{
    const res =  await RemoveBook(bookingId);
    console.log(res)
    setUpdate(res);
  }

  return (
    <div className='m-24'>
    <div className='bg-[#000000] h-[calc(100vh-200px)] rounded-md p-6 overflow-y-auto'>
        <p className='text-4xl text-secondary-50 font-bold text-center'>Order Status</p>
        <div className='flex flex-col gap-5 justify-center '>
        {data.map((booking)=>{
    return <div className='flex justify-between items-center mt-4 border-b border-[#88929B] pb-2'>
        <div className=''>
        <p className='text-xl font-bold text-secondary-50'>{booking.event}</p>
   
        </div>
        <div className='flex flex-col justify-center items-center'>
        <p className='text-lg font-medium text-[#88929B]'>{formatDate(booking.bookingDate)}</p>
        <p className='text-sm text-[#88929B]'>{booking?.branch}</p>
        </div>
       
        <div className='flex gap-5 items-center'>
          
       {booking?.status === "pending" && <div className='flex gap-2'> <img src={Icons.pending} width={30}/> <p className='text-[yellow] text-lg font-bold text-start'>{booking?.status}</p>
       
       <button className='h-[10] bg-[red] font-bold text-secondary-50 rounded-md w-[100px]' onClick={()=>{handleUpdate(booking?._id)}}>Cancel</button>
       </div>}
       {booking?.status === "confirmed" && <div className='flex gap-2'> <img src={Icons.confirm} width={30} /> <p className='text-[green] text-lg font-bold text-start'>{booking?.status}</p></div>}
       {booking?.status === "rejected" && <div className='flex gap-2'> <img src={Icons.reject} width={30} /> <p className='text-[red] text-lg font-bold text-start'>{booking?.status}</p></div>}
        </div>
        </div>
 })}

 
        </div>
    </div>

   </div>
  )
}

export default BookingStatus


