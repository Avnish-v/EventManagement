import React, { useEffect, useRef, useState } from "react";
import { GetEvent, addImg, removeImg } from "../../service";
import { getPublicUrl } from "../../utils";
import { AddIcon } from "../../assets/svg";
import { Icons } from "../../assets";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState();
  const [Id, setId] = useState();
  const inputRef = useRef();
  const getEvents = async () => {
    const res = await GetEvent();
    setData(res.data);
  };
  useEffect(() => {
    getEvents();
  }, [update]);
  const handleAdd = (Id) => {
    inputRef.current.click();
    setId(Id)
  };
  const handleChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const form = new FormData();
    form.append("gallery", file);
    form.append("eventId", Id);
    const res = await addImg(form);
    console.log(res);
    setUpdate(res);
  };

  const handleClick = async(event , img)=>{
    const res  =  await removeImg(event ,img)
    setUpdate(res)
  }

  return (
    <div className="m-24">
      <div className="grid grid-flow-row gap-6">
        {data.map((element) => {
          return (
            <React.Fragment>
              <div className="bg-[#000000] shadow-xl rounded-lg p-5 ">
                <p className="text-secondary-50 text-xl font-bold ">
                  {element?.eventName}
                </p>
              </div>
              <div
                className="grid  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 place-content-start"
                style={{ flexWrap: "wrap" }}
              >
                {element.gallery.map((img) => {
                  return (
                    <div className="relative w-[202px] h-[204px] rounded-md border-2 border-[gray] shadow-2xl">
                      <img
                        src={getPublicUrl(img)}
                        className="w-[200px] h-[200px] rounded-md"
                      />
                      <div className="absolute top-0 right-0">
                        <img src={Icons.cross} width={30} className="cursor-pointer" height={30} onClick={()=>{handleClick(element._id ,img)}}/>
                      </div>
                    </div>
                  );
                })}
                <div
                  className="h-[202px] w-[202px] rounded-md border-2 border-[#00A885] border-dashed flex items-center justify-center cursor-pointer"
                  onClick={()=>{handleAdd(element._id)}}
                >
                  <AddIcon />
                </div>

                <input
                  className="hidden"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  ref={inputRef}
                ></input>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
