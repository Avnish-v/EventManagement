import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GetEventId } from "../../service";
import { getPublicUrl } from "../../utils";

const View = () => {
    const navigate  = useNavigate()
  const [data, setData] = useState();
  const [basic, setbasic] = useState([]);
  const [ultimate, setUltimate] = useState([]);
  const [premium, setpremium] = useState([]);

  const { state } = useLocation();
  const EventDetail = async () => {
    const res = await GetEventId(state);
    setData(res[0]);
    setbasic(res[0]?.basic[0]?.split("."));
    setUltimate(res[0]?.ultimate[0]?.split("."));
    setpremium(res[0]?.premium[0]?.split("."));
  };

  useEffect(() => {
    EventDetail();
  }, []);
  
  const handleNavigate =(name ,price , eventName)=>{
    console.log(eventName)

    navigate("/Booking", {state : {name ,id : data._id ,price : price ,  eventName :data?.eventName }})
  }
  return (
    <div className="mt-[67px] overflow-x-hidden">
      <div className="h-[calc(100vh-67px)] w-screen">
        <img
          src={data?.coverImage && getPublicUrl(data?.coverImage)}
          className="w-full h-full"
        />
      </div>
      <div className="my-6 grid place-items-center ">
        <p className="text-secondary-50 text-3xl">
          {" "}
          Welcome To the Fusion Events Wanted To celebrate  {data?.eventName} Event 
        </p>
        <h1 className="text-secondary-50 text-xl mt-4">
          Here are  our gallery for the {data?.eventName} Event{" "}
        </h1>
        <div className="gap-5 grid grid-cols-3 mt-10">
          {data?.gallery?.map((element) => {
            return (
              <div className="w-[300px] h-[400px] rounded-md p-2 shadow-2xl ">
                <img
                  src={getPublicUrl(element)}
                  className="w-full h-full hover:contrast-125 rounded-md"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="flex gap-10 my-10 ">
          <div className="p-6 bg-[#000000] shadow-xl rounded-lg">
            <p className="text-2xl text-secondary-50 text-center font-bold">
              Basic Plan
            </p>
            <p className="text-2xl text-secondary-50 text-center font-bold">
                {data?.basicPrice} ₹
            </p>
            <ul className="list-disc px-2 mt-2 border-t-4 boder-[#00A885]">
              {basic?.map((plan, i) => {
                return (
                  <>
                   
                    {i != basic.length - 1 && (
                      <li className="text-secondary-50">{plan}</li>
                    )}
                  </>
                );
              })}
            </ul>
            <button className="h-10 bg-[#00A885] text-secondary-50 font-bold  w-full mt-4 rounded-md" onClick={()=>{handleNavigate("Basic" ,data?.ultimatePrice ,  data?.eventName)}}>
              Book
            </button>
          </div>
          <div className="p-6 bg-[#000000] shadow-xl rounded-lg">
            <p className="text-2xl text-secondary-50 text-center font-bold">
              Ultimate Plan
            </p>
            <p className="text-2xl text-secondary-50 text-center font-bold">
              {data?.ultimatePrice} ₹
            </p>
            <ul className="list-disc px-2 mt-2 border-t-4 boder-[#00A885] ">
              {ultimate?.map((plan, i) => {
                return (
                  <>
                    {" "}
                    {i != ultimate.length - 1 && (
                      <li className="text-secondary-50">{plan}</li>
                    )}
                  </>
                );
              })}
            </ul>

            <button className="h-10 bg-[#00A885] text-secondary-50 font-bold  w-full mt-4 rounded-md" onClick={()=>{handleNavigate("ultimate",data?.ultimatePrice)}}>
              Book
            </button>
          </div>
          <div className="p-6 bg-[#000000] shadow-xl rounded-lg">
            <p className="text-2xl text-secondary-50 text-center font-bold">
              Premium Plan
            </p>
            <p className="text-2xl text-secondary-50 text-center font-bold">
              {data?.premiumPrice} ₹
            </p>
            <ul className="list-disc px-2 mt-2 border-t-4 boder-[#00A885]">
              {premium?.map((plan, i) => {
                return (
                  <>
                    {" "}
                    {i != premium.length - 1 && (
                      <li className="text-secondary-50">{plan}</li>
                    )}
                  </>
                );
              })}
            </ul>
            <button className="h-10 bg-[#00A885] text-secondary-50 font-bold  w-full mt-4 rounded-md"  onClick={()=>{handleNavigate("premium",data?.ultimatePrice)}}>
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
