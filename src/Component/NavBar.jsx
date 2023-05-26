import React ,{useState}from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll';

const NavBar = () => {

    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    // const [sticky,setSticky]=useState(false);
    // const handleScroll = () => {
    //     if (window.scrollY >10) {
    //       setSticky(true);
    //     } else {
    //       setSticky(false);
    //     }
    //   };
    
    //   window.addEventListener("scroll", handleScroll);

      const goTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

    
  return (
    // 
    <div className={`flex flex-row bg-transparent h-20 items-center justify-between bg-black py-8 px-12 text-white fixed  top-0 left-0 right-0 w-full z-50 `}>
        <div ><a href='/' className='font-bold text-2xl' onClick={goTop}>Rahul.dev</a></div>
        
            <ul className='hidden md:flex'>
                <li 
          className=" px-4 capitalize font-medium text-gray-500  cursor-pointer hover:scale-105 duration-200">
            <Link to='Home' duration={500}>Home</Link>
          </li>
                <li   
         className=" px-4 capitalize font-medium text-gray-500  cursor-pointer hover:scale-105 duration-200">
            <Link to='About' smooth duration={500}>About</Link>
          </li>
                <li   
className=" px-4 capitalize font-medium text-gray-500  cursor-pointer hover:scale-105 duration-200">
                    <Link to='Project' smooth duration={900}>Portifolio</Link></li>
                <li   
        className=" px-4 capitalize font-medium text-gray-500  cursor-pointer hover:scale-105 duration-200">
                    <Link to='Contact' smooth duration={1200}>Contact</Link></li>
            </ul>

            <div onClick={()=>setHamburgerMenu(!hamburgerMenu)} className=' cursor-pointer p-4 z-10  text-white md:hidden '>
              {
                hamburgerMenu?<FaTimes size={30}/>:  <FaBars size={30}/>
              }
              {
                hamburgerMenu &&(
                    <ul className='flex flex-col  justify-center  items-center absolute top-20 left-0 w-full h-screen
                    text-gray-500  bg-gradient-to-b from-black to-gray-800 '>
                       <li className='px-4 cursor-pointer capitalize py-6  text-4xl'><a href='#Home'>Home</a></li>
                       <li className='px-4 cursor-pointer capitalize py-6  text-4xl'><a href='#About'>About</a></li>
                       <li className='px-4 cursor-pointer capitalize py-6  text-4xl'><a href='#Project'>Portifolio</a></li>
                       <li className='px-4 cursor-pointer capitalize py-6  text-4xl'><a href='#Contact'>Contact</a></li>
       
                     </ul>
                )
              }
            
            </div>
        </div>

  )
}

export default NavBar