import React from 'react'
import Html from '../Assets/html.png'
import CSS from '../Assets/css.png'
import Javascript from '../Assets/javascript.png'
import ReactImg from '../Assets/react.png'
import Telwind from '../Assets/tailwind.png'
import Bootstrap from '../Assets/bootstrap.png'
import Nodejs from '../Assets/node js.png'


const Skills = () => {
  return (
    <div className='w-full h-full bg-gradient-to-b from-black to-gray-800 text-white px-20 py-10'>
        <div className='pb-8 px-20 flex justify-center md:flex md:justify-start'>
            <p className='text-4xl text-white mx-auto border-b-4 border-gray-500 inline font-bold uppercase'>Skills</p>
        </div>

        <div className='flex w-64 justify-between flex-wrap gap-10 md:justify-between md:w-full'>
            <div className='flex flex-col  justify-evenly items-center hover:scale-110 duration-200' >
                <img src={Html} style={{width:'100px',height:'100px'}} alt='html' className=' rounded-full'/>
                <p className='text-xl font-medium pt-4'>HTML</p>
            </div>
            <div className='flex flex-col justify-center items-center hover:scale-110 duration-200' >
                <img src={CSS} style={{width:'100px',height:'100px'}} alt='html' className=' rounded-full'/>
                <p className='text-xl font-medium pt-4'>CSS</p>
            </div>
            <div className='flex flex-col justify-center items-center hover:scale-110 duration-200' >
                <img src={Javascript} style={{width:'100px',height:'100px'}} alt='html' className=' rounded-full'/>
                <p className='text-xl font-medium pt-4'>JavaScript</p>
            </div>
            <div className='flex flex-col justify-center items-center hover:scale-110 duration-200' >
                <img src={ReactImg} style={{width:'100px',height:'100px'}} alt='html' className=' rounded-full'/>
                <p className='text-xl font-medium pt-4'>React</p>
            </div>
            <div className='flex flex-col justify-center items-center  hover:scale-110 duration-200' >
                <img src={Nodejs} style={{width:'100px',height:'100px'}} alt='html' className=' rounded-full'/>
                <p className='text-xl font-medium pt-4'>Node.Js</p>
            </div>
            <div className='flex flex-col justify-center items-center hover:scale-110 duration-200' >
                <img src={Telwind} style={{width:'100px',height:'100px'}} alt='html' className=' rounded-full'/>
                <p className='text-xl font-medium pt-4'>Telwind CSS</p>
            </div>
            <div className='flex flex-col justify-center items-center hover:scale-110 duration-200' >
                <img src={Bootstrap} style={{width:'100px',height:'100px'}} alt='html' className=' rounded-full'/>
                <p className='text-xl font-medium pt-4'>BootStrap</p>
            </div>
           
        </div>
    </div>
  )
}

export default Skills