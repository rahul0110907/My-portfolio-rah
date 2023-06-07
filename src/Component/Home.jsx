import React from 'react'
import rahulPP from '../Assets/rahulPP.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'
import Resume from '../Assets/RahulCV.pdf'


const Home = () => {
  return (
    <div id='Home' name='home' className='h-screen  w-full  bg-gradient-to-b from-black to-gray-800  pb-10 '>
        <div className='max-w-screen-lg mx-auto flex flex-col  items-center justify-center h-full px-4  md:flex-row'>
            <div className='flex flex-col  justify-center  h-full px-20 pt-28 md:pt-0'>
                <h1 className=' text-5xl sm:10xl font-bold text-white ' >Front-End React Developer</h1>
                <p className='text-gray-500 py-4 font-medium'>Hi, I'm Rahul Kumar Gupta. A passionate Front-end React Developer based in Jaipur, Rajasthan. </p>
                <div className='flex justify-center px-16 items-center w-[30%]'>
                <a href={Resume} download={true} className='group text-white flex justify-center items-center bg-violet-600 px-4 py-2 rounded-xl cursor-pointer'>Portifolio <span className='group-hover:rotate-90 duration-200'><MdKeyboardArrowRight size={25}/></span></a>
            </div>
            </div>
           
            <div className='py-20 '>
                <img src={rahulPP} alt='hero' className='rounded-2xl mx-auto w-2/3 md:w-2/3 '/>
            </div>
        </div>
    </div>
  )
}

export default Home