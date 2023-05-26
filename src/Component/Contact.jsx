import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' name='About' className='w-full h-full  bg-gradient-to-b from-black to-gray-800 text-white  py-10'>
      <div className='flex flex-col p-4  max-w-screen-lg mx-auto h-full '>
      <div className='pb-8  '>
        <p className='text-4xl text-white border-b-4 border-gray-500 inline font-bold uppercase px-20'>Contact</p>
        <p className='text-xl  text-white py-6'>Submit the form below to get in touch</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <form action='https://getform.io/f/9b1d5f9f-b067-4df1-8981-bcc712c54f18' method='POST' className='flex flex-col w-full md:w-1/2'> 
          <input type='text' name='name' placeholder='Enter your name' 
          className='p-2  bg-transparent border-2  rounded-md text-white focus:outline-none' />

        <input type='email' name='email' placeholder='Enter your Email' 
          className='p-2 my-4 bg-transparent border-2  rounded-md text-white focus:outline-none' />

          <textarea placeholder='Enter your Message' name='message' rows='10'  className='p-2  bg-transparent border-2  rounded-md text-white focus:outline-none' />
      
      <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex  items-center rounded-md hover:scale-105 duration-200 '>Let's talk</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Contact