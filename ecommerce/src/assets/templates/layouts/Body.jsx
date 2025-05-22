import React from 'react'
import { Link } from 'react-router-dom'
// import ShreeshantPhoto from '../assets/images/ShreeshantPhoto.jpg';
const Body = () => {
    const course= [
    {
      name:"MERN Stack",
      duration:"3 month",
      price:"20 k",
      image:"https://www.mindrisers.com.np/static/Images/courses/Mernstack.webp"
    },
    {
      name:"Python Django",
      duration:"2.5 month",
      price:"18 k",
      image:"https://www.mindrisers.com.np/static/Images/courses/Python_with_Django.webp"
    },
    {
      name:"UI/Ux",
      duration:"2.5 month",
      price:"18 k",
      image:"https://www.mindrisers.com.np/static/Images/courses/UI-ux.webp"
    }
  ]
   
  console.log(course)
  return (
    <>
    
    {/* Syntax of Map Function */}
    {/* {data?.map((data)=())} */}
    {course?.map((data)=> (

        
<div className='flex-col'>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={data.image} alt="" />
    </a>
    <div class="p-5 ">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price:{data.price}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Duration:{data.duration}</p>
        <Link to="/cart" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </Link>
    </div>
</div>
</div>



        // <div className='flex'>
        // <div className=' flex-col  border-1 h-56 w-64 text-2xl capitalize  '>
        // name:{data.name} <br />
        // duration:{data.duration} <br />
        // price:{data.price} <br />
        // <div className='flex'>
        // image: <img className='h-24 ' src={data.image} alt="" />
        // </div>
        // </div>
        // </div>
    ))}
    <div>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M60.9,-19.7C66.2,-3.5,48.9,20.1,28.8,33.2C8.6,46.3,-14.5,49,-30.4,38.3C-46.2,27.6,-54.9,3.5,-48.6,-14C-42.3,-31.5,-21.2,-42.4,3.3,-43.5C27.8,-44.6,55.6,-35.8,60.9,-19.7Z" transform="translate(100 100)" />
</svg>
    </div>


    </>
  )
}

export default Body
