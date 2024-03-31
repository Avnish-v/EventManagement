import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [eventName, setEventName] = useState('');
  const [Base, setBasePrice] = useState('');
  const [prePrice, setPrePrice] = useState('');
  const [ultimate, setUltimate] = useState('');
  const [basicServices, setBasicServices] = useState([]);
  const [premiumServices, setPremiumServices] = useState([]);
  const [ultimateServices, setUltimateServices] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('eventName', eventName);
      formData.append('basicPrice', Base);
      formData.append('ultimatePrice', ultimate);
      formData.append('premiumPrice', prePrice);
      formData.append("basic", basicServices);
      formData.append("premium", premiumServices);
      formData.append("ultimate", ultimateServices);
      formData.append('coverImage', coverImage);
      formData.append('galleryImages', galleryImages);
      const response = await axios.post('http://localhost:8080/admin/event', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
      setEventName('');
      setBasePrice('');
      setPrePrice('');
      setUltimate('');
      setBasicServices([]);
      setPremiumServices([]);
      setUltimateServices([]);
      setCoverImage(null);
      setGalleryImages([]);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleBase = (value) => {
    setBasicServices(value.split(/,\s*(?=(?:[^"]|"[^"]*")*$)/).join("."));
  };

  const handlePremium = (value) => {
    setPremiumServices(value.split(',').map(service => service));

  };

  const handleUltimate = (value) => {
    setUltimateServices(value.split(/,\s*(?=(?:[^"]|"[^"]*")*$)/).join("."));
  };

  return (
    <div className='m-24 flex justify-center'>
    <div className='bg-[#000000] p-6 rounded-lg'>
      <p className='text-center text-xl font-bold text-secondary-50 mb-4'>Add Event</p>
      <form encType="multipart/form-data" className="grid grid-cols-1 gap-4">
        <div className='flex flex-col'>
          <label htmlFor='eventName' className='text-lg font-bold text-secondary-50'>
            Event Name
          </label>
          <input
            type='text'
            name='eventName'
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className='mt-1 p-2 border rounded-md text-[#000000]'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-lg font-bold text-secondary-50'>Base</label>
          <div className='grid grid-cols-2 gap-2 text-secondary-50'>
            <div className='flex flex-col'>
              <label className='text-lg font-bold'>Price</label>
              <input type='text' name='basePrice' value={Base} onChange={(e) => setBasePrice(e.target.value)} className='mt-1 p-2 border rounded-md text-[#000000]' />
            </div>
            <div className='flex flex-col'>
              <label className='text-lg font-bold'>Service</label>
              <input type='text' onChange={(e) => handleBase(e.target.value)} className='mt-1 p-2 border rounded-md text-[#000000]' />
            </div>
          </div>
        </div>
  
  
        <div className='flex flex-col'>
          <label className='text-lg font-bold text-secondary-50'>Premium</label>
          <div className='grid grid-cols-2 gap-2 text-secondary-50'>
            <div className='flex flex-col'>
              <label className='text-lg font-bold'>Price</label>
              <input type='text' name='premiumPrice' value={prePrice} onChange={(e) => setPrePrice(e.target.value)} className='mt-1 p-2 border rounded-md text-[#000000]' />
            </div>
            <div className='flex flex-col'>
              <label className='text-lg font-bold'>Service</label>
              <input type='text' onChange={(e) => handlePremium(e.target.value)} className='mt-1 p-2 border rounded-md text-[#000000]' />
            </div>
          </div>
        </div>
  
        <div className='flex flex-col'>
          <label className='text-lg font-bold text-secondary-50 '>Ultimate</label>
          <div className='grid grid-cols-2 gap-2 text-secondary-50'>
            <div className='flex flex-col'>
              <label className='text-lg font-bold '>Price</label>
              <input type='text' name='ultimatePrice' value={ultimate} onChange={(e) => setUltimate(e.target.value)} className='mt-1 p-2 border rounded-md text-[#000000]' />
            </div>
            <div className='flex flex-col'>
              <label className='text-lg font-bold'>Service</label>
              <input type='text' onChange={(e) => handleUltimate(e.target.value)} className='mt-1 p-2 border rounded-md text-[#000000]' />
            </div>
          </div>
        </div>
  
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <label htmlFor='coverImage' className='text-lg font-bold text-secondary-50'>
              Cover Image
            </label>
            <input
              type='file'
              name='coverImage'
              onChange={(e) => setCoverImage(e.target.files[0])}
              className='mt-1 p-2 border rounded-md w-full text-[white]'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='galleryImages' className='text-lg font-bold text-secondary-50'>
              Gallery Images
            </label>
            <input
              type='file'
              name='galleryImages'
              onChange={(e) => setGalleryImages(e.target.files[0])}
              className='mt-1 p-2 border rounded-md w-full text-[white]'
            />
          </div>
        </div>
  
        <div className='mt-4 flex justify-center'>
          <button
            type='button'
            onClick={handleSubmit}
            className='w-[60%] h-10 bg-[#00A885] text-secondary-50 font-medium rounded-md'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  

  );
};

export default Admin;
