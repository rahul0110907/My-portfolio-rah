import React from 'react'
import { FaGithub , FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Resume from '../Assets/RahulCV.pdf'

const SocialIcon = () => {
  return (
    <div  className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className='flex justify-between  items-center  w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 '>
            <a href='https://www.linkedin.com/in/rahul-gupta-0110rrr1997/'  target='_blank' rel='noreferrer' className='flex justify-between items-center w-full text-white'> <>LInkedIn <FaLinkedin size={25}/> </> </a></li>
            <li className='flex justify-between  items-center  w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 '>
            <a href='https://github.com/rahul011097'  target='_blank' rel='noreferrer' className='flex justify-between items-center w-full text-white'> <>GitHub <FaGithub size={25}/> </> </a></li>
            <li className='flex justify-between  items-center  w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 '>
            <a href='mailto:rahul011097@gmail.com'  target='_blank' rel='noreferrer' className='flex justify-between items-center w-full text-white'> <>Email <HiOutlineMail size={25}/> </> </a></li>
            <li className='flex justify-between  items-center  w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 '>
            <a href={Resume} download={true}  target='_blank' rel='noreferrer' className='flex justify-between items-center w-full text-white'> <>Resume <BsFillPersonLinesFill size={25}/> </> </a></li>
        </ul>
    </div>
  )
}

export default SocialIcon