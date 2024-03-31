import React, { useEffect, useState } from "react";
import { GetEvent, UpdatePrice, removeEventById } from "../../service";
import { getPublicUrl } from "../../utils";
const ShowEvents = () => {
  const [data, setData] = useState([]);
  const [update ,setUpdate] =  useState();
  const [basePrice  ,  setbasePrice] =  useState();
  const [ultimatePrice ,  setultimateprice] =  useState();
  const [prePrice ,  setPrePrice] =  useState();
  const [modal ,setModal] =  useState(false);
  const [getId, setId] =  useState();
  const fetchEvent = async () => {
    const res = await GetEvent();
    setData(res.data);
  };
  const removeEvent = async (e)=>{
 prompt("Are You Sure you wanted To Delete the Event ?  ");
 if(prompt){
  const res  =  await removeEventById(e);
  setUpdate(res);
 }

  }

  useEffect(() => {
    fetchEvent();
  }, [update]);

  const handleUpdate =async()=>{
    try {
        const form = {
          "basicPrice":basePrice, 
          "ultimatePrice" : ultimatePrice,
          "premiumPrice" :  prePrice ,
        }
      const res  =  await UpdatePrice(getId , form)
      setUpdate(res);

      setModal(false)
    } catch (error) {
      
    }
  }
  const handleOpen = (Id)=>{
    setId(Id)
    setModal(true)
  }
  return (
    <>
   { modal &&  <div className="absolute top-0 left-0 w-full h-full bg-[#00000098] z-[999]  flex justify-center items-center">
          <div className="bg-[#2B3946] w-[350px] p-5 rounded-md  shadow-lg">
            <p className="text-xl font-bold text-secondary-50 mb-4 text-center">
              Are you sure you want to Update Event Price?
            </p>
              <div className="grid grid-col gap-3">
                <label className='text-lg font-bold text-secondary-50'> base Price</label>
                <input  className='mt-1 p-2 border rounded-md text-[#000000]' type="text" name="basePrice" onChange={(e)=>{setbasePrice(e.target.value)}}/>
                  <label className='text-lg font-bold text-secondary-50' >ultimate price</label>
                  <input  className='mt-1 p-2 border rounded-md text-[#000000]' type="text" name="ultimate" onChange={(e)=>{setultimateprice(e.target.value)}}/>
                  <label className='text-lg font-bold text-secondary-50'>premium price</label>
                  <input  className='mt-1 p-2 border rounded-md text-[#000000]' type="text" name="premium" onChange={(e)=>{setPrePrice(e.target.value)}} />
              </div>
            <div className="flex gap-6 justify-center mt-4">
              <button
                className="bg-[red] text-secondary-50 px-4 py-2 rounded mr-2"
                onClick={() => setModal(false)}
              >
                cancel
              </button>
              <button
                className="bg-[#00A885] text-secondary-50 px-4 py-2 rounded"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
}
   
    <div className="grid place-items-center">
      <div className="grid place-items-center grid-cols-4 gap-5 m-24">
        {data.map((element) => {
          return (
            <div className=" bg-[#000000] shadow-2xl rounded-lg p-6 ">
              <div className="p-2 rounded-sm border-2 border-secondary-50  ">
                <img
                  src={getPublicUrl(element?.coverImage)}
                  className="w-[230px] h-[200px]"
                />
              </div>
              <p className="text-center text-xl font-bold text-secondary-50 mt-2 text-wrap">
                {element?.eventName}
              </p>
              <div className="flex justify-between mt-2">
                <p className="text-lg text-secondary-50 font-medium">Base</p>
                <p className="text-lg text-[#88929B] font-medium">
                  {element?.basicPrice} ₹
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg text-secondary-50 font-medium">
                  ultimate
                </p>
                <p className="text-lg text-[#88929B] font-medium">
                  {element?.ultimatePrice} ₹
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg text-secondary-50 font-medium">premium</p>
                <p className="text-lg text-[#88929B] font-medium">
                  {element?.premiumPrice} ₹
                </p>
              </div>

              <div className="flex gap-4  mt-2">
                <button className="p-2 px-3  w-full rounded-md text-center bg-[red] text-secondary-50 font-bold" onClick={()=>{removeEvent(element?._id)}}>
                  Delete
                </button>
                <button className="h-10 w-full rounded-md text-center bg-[#00A885] text-secondary-50 font-bold" onClick={()=>{handleOpen(element?._id)}}>
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default ShowEvents;
