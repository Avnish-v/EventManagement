import React from "react";
import { Icons } from "../../assets";
import "./gallery.css"
import { Eyes, Like, Share } from "../../assets/svg";

const Gallery = () => {
  const gallery = [
    Icons.gallery1,
    Icons.gallery2,
    Icons.gallery3,
    Icons.gallery4,
    Icons.gallery5,
    Icons.gallery6,
    Icons.gallery7,
    Icons.gallery8,
    Icons.gallery9,
  ];
  return (
    <div className="py-5">
      <div className="flex justify-center gap-2 pb-10">
        <p className="text-primary-50  text-6xl font-semibold">OUR</p>
        <p className="text-secondary-50 text-6xl font-semibold">GALLERY</p>
      </div>

      <div className="grid place-items-center">
        <div className="grid grid-cols-5 gap-6 w-[80%]">
        {gallery.map((item, index) => (
            <div key={index} className="img-container cursor-pointer p-2 bg-[#333] hover:grayscale-[100%] rounded-md shadow-2xl">
              <p className="hidegal hidden text-lg text-center pb-2 font-bold text-secondary-50">
                PHOTO AND EVENT
              </p>
              <img
                src={item}
                alt={`gallery-${index}`}
                className="w-[264px] h-[240px] img "
              />
              <div className="justify-center gap-3 mt-1 items-center hide hidden ">
                <Like/>
                <Share/>
                <Eyes/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
