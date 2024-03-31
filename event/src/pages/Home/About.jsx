import React from "react";
import { Icons } from "../../assets";

const About = () => {
  return (
    <div className="py-5">
      <div className="flex justify-center gap-2 pb-10">
        <p className="text-primary-50 text-6xl font-semibold">ABOUT</p>
        <p className="text-secondary-50 text-6xl font-semibold">US</p>
      </div>
      <div className="flex gap-2 items-center mx-20">
        <div className="w-[50%]">
          <img src={Icons.About} className="rounded-[12px] w-[80%]" />
        </div>
        <div className="flex flex-col gap-4 items-center w-[50%]">
          <h1 className=" text-3xl 2xl:text-4xl text-center font-semibold text-secondary-50">
            We Will Give A Very Special Celebration for You
          </h1>
          <p className="text-center w-[200[x]] text-xl font-medium text-secondary-50 ">
            Fusion Events, your one stop solution for making any event memorable
            or a success. From Mandapas, Wedding Stages, Dhol, Doli and
            Bhangra,Wedding arrangements to product launches, Entertainment to
            MICE, Lights & Sound to Videography, event management dubai you name
            it and we'll have it done for you.With a Team having an expertise of
            over 11 years, your event being a success is guaranteed
          </p>
          <button className="p-5 outline rounded-md h-11 text-xl font-medium mt-2 flex items-center justify-center bg-gray text-secondary-50">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
