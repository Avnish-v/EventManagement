import React from 'react'
import { Cake, Dinner, Mail, MakerLocation, Music, Photo } from '../../assets/svg';

const ServiceArray = [
  {
    icon : <MakerLocation/>,
    name : "Venue Selection" ,
    desc : "Resorts, Gardens, Lawns, Beaches, Banquet Halls"
  },
  {
    icon : <Mail/> ,
    name : "Invitation",
    desc : "We Provide Our Special Invitation Card To Our Guests"
  },
  {
    icon :<Music/>,
    name : "Entertainment",
    desc :"DJ, Magician, Photo Booths, Puppet Show , Tattoo's"
  },{
    icon : <Dinner/>,
    name :"Food And Drinks",
    desc :"Buffets, Non-Veg, Veg, Jain Food, Cocktail, Mocktail, Wine, Beer",
  }
  ,{
    icon : <Photo/>,
    name :"Photos And Video",
    desc : "Photographer, Drone Pilots"
  },{
    icon : <Cake/>,
    name :"Custom Food",
    desc :"Chicken, Lobster. Fish, Turkey, Duck, Fast Food, Burger, Pizza, French Fries, Fried Chicken, Taco, Noodles, Muffin, Hot Dog, Nuggets, Sausage, Burrito, Ice Cream."
  }
]

const Service = () => {
  return (
    <div className='py-5'>
      <div className='flex justify-center gap-2 pb-10'>
        <p className='text-secondary-50 text-6xl font-semibold'>OUR</p><p className='text-primary-50 text-6xl font-semibold'>SERVICES</p>
      </div>
      <div>

      </div>
      <div className='grid place-items-center'>


      <div className='grid grid-cols-3 place-items-center  place-content-center z-20  gap-x-6 !gap-6'>
  {ServiceArray.map((element ,key)=>{
      return <div key={key} className='bg-[#000000] px-10 py-5 w-[400px] h-[250px] shadow-2xl cursor-pointer flex flex-col gap-4 items-center rounded-[12px] shadow-lg
      '>
        <div className='w-14 h-14 rounded-[50%] bg-[#00A885] flex items-center  justify-center'>
          {element?.icon}
          </div>
          <p className='text-xl font-semibold text-secondary-50'>{element?.name}</p>
          <p className='text-md font-medium text-secondary-50 text-center'>{element?.desc}</p>
          </div>
  })}
  
      </div>
      </div>
    
    </div>
)}

export default Service