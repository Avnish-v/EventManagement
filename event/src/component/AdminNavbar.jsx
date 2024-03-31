import React, { useEffect, useState } from "react";
import { Icons } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { UserIcon } from "../assets/svg";

const AdminNavbar = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [active, setActive] = useState(false);
  const name = localStorage.getItem("name");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };
  return (
    <>
      {showConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000098] z-[999]  flex justify-center items-center">
          <div className="bg-[#2B3946] w-[350px] p-5 rounded-md  shadow-lg">
            <p className="text-xl font-bold text-secondary-50 mb-4 text-center">
              Are you sure you want to logout?
            </p>
            <p className="text-xl font-bold text-secondary-50 mb-4 text-center">
              {name}
            </p>
            <div className="flex gap-6 justify-center">
              <button
                className="bg-[#00A885] text-secondary-50 px-4 py-2 rounded mr-2"
                onClick={() => setShowConfirmation(false)}
              >
                Cancel
              </button>
              <button
                className="bg-[#00A885] text-secondary-50 px-4 py-2 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center  ">
        <div className="flex justify-between px-20 h-[60px] w-[100%] blurcss  border-b border-gray-300 bg-red-700 items-center fixed z-[999]">
          <div>
            <img src={Icons.Logo} alt="logo" className="w-12 h-12" />
          </div>
          <div className="flex gap-5">
            <Link to={"/admin"}>
            <p className="text-xl  cursor-pointer font-semibold text-secondary-50 hover:text-primary-50">
              AddEvent
            </p></Link>
           
        <Link to={"/showevent"}>
        <p className="text-xl  cursor-pointer font-semibold text-secondary-50 hover:text-primary-50">
              Events
            </p>
        </Link>  
         
            <Link to="/gallery"> <p className="text-xl   cursor-pointer font-semibold text-secondary-50 hover:text-primary-50">
              gallery
            </p>
            </Link>
           
           <Link to="/status"> <p className="text-xl  cursor-pointer font-semibold text-secondary-50 hover:text-primary-50">
              Status
            </p></Link>
            <Link to="/booked"> <p className="text-xl  cursor-pointer font-semibold text-secondary-50 hover:text-primary-50">
              Booking
            </p></Link>
            <p
              className="text-xl flex gap-2 items-center  cursor-pointer font-semibold text-secondary-50 hover:text-primary-50"
              onMouseOver={() => {
                setActive(true);
              }}
              onMouseLeave={() => {
                setActive(false);
              }}
              onClick={() => {
                setShowConfirmation(true);
              }}
            >
              {name} <UserIcon color={active ? "#00A885" : "white"} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
