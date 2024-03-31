import React, { useEffect, useState } from 'react'
import "./gallery.css"
import { GetEvent } from '../../service'
import { useNavigate } from 'react-router-dom'

const Price = () => {
    const [data ,  setData] =  useState([])
    const navigate  =  useNavigate()
    const fetchEvent = async()=>{
        const res  = await GetEvent();
        setData(res.data);
    }
    useEffect(()=>{
        fetchEvent()
    },[])
    const handle= (id)=>{
        navigate("/view" ,  {state : id});
    }
  return (
    <div className='py-5 w-full '>
    <div className='flex justify-center gap-2 pb-10'>
      <p className='text-secondary-50 text-6xl font-semibold'>OUR</p><p className='text-primary-50 text-6xl font-semibold'>Price</p>
    </div>
   <div className='grid place-items-center'>

    <div className='grid lg:grid-cols-2 xl:grid-cols-3 place-items-center  py-5 gap-6 '>
        {data.map((elem)=>{
              const basicServices = elem.basic[0].split('.');
           return <div className=' py-10 flex flex-col items-center  bg-[#000000] gap-5 shadow-xl w-[400px] h-[420px]  hover:shadow-2xl rounded-[16px]' key={elem._id}>
                <div className=' w-full py-5'>
                    <p className='text-xl font-bold text-center text-secondary-50'>{elem?.eventName}</p>
                </div>
                <p className='text-4xl text-secondary-50 font-extrabold '>{elem?.basicPrice} ₹</p>
                    <ul className='text-secondary-50 font-medium text-md list-disc flex flex-col gap-2 pl-6'>      
                    {basicServices.map((service, index) => (
                        <>
              {basicServices.length -1 != index && index < 3 && <li className='' key={index}>{service}</li>}
                        </>
            ))}
                    </ul>
                    <div className='w-[80%]'>
                        <button className='bg-red text-secondary-50  font-bold w-full  bg-[#00A885] p-2 rounded-md ' onClick={()=>{handle(elem?._id)}}>Check Out</button>
                        </div>
                </div>

        })}
        </div>
            
   </div>
    
 

        </div>
  )
}

export default Price