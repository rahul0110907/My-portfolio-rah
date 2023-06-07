import React from "react";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import Project1 from "../Assets/project-1.jpg";
import Project2 from "../Assets/Project-2.jpeg";
import Project3 from "../Assets/Project-3.png";
import Project4 from "../Assets/Project4.jpg";

const Project = () => {
  return (
    <div
      id="Project"
      name="Project"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 text-white px-10 py-10"
    >
      <div className="pb-6 px-20 flex justify-center md:flex md:justify-start">
        <p className=" uppercase inline mx-auto border-b-4 font-bold text-3xl border-gray-500 ">
          Portfolio
        </p>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row pb-20">
        <div className="w-full h-full md:w-1/2 px-10  ">
          <img
            src={Project1}
            alt="project-1"
            className="rounded-xl h-64 w-72 mx-auto mt-20"
          />
        </div>
        <div className="w-full h-full md:w-1/2 px-10 ">
          <h2 className="flex justify-center items-center text-2xl text-blue-500 font-bold pb-10 pt-5 md:pt-0">
            Quiz-App
          </h2>
          <p className="flex justify-center items-center text-xl text-gray-500 ">
            A Quiz-App website is an online platform that allows users to play
            Quiz . The website provides an interface for Randomize questions with Quiz Timer
            ,Outcomes screen at the end of quiz, view correct answer options and
            view question results .
            <br/>
            Stack Used : React , JavaScript , Venila CSS , HTML
          </p>
    
        
          <div className=" flex justify-center  gap-20 items-center  py-10">
            <a
              href="https://github.com/rahul011097/KBC-Quiz"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 justify-center items-center text-xl text-white  bg-violet-600 px-4 py-2 rounded-xl cursor-pointer hover:scale-110 duration-200"
            >
              Code{" "}
              <>
                <BsGithub size={20} />
              </>
            </a>
            <a
              href="https://clinquant-buttercream-24375b.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 justify-center items-center text-xl text-white  bg-violet-600 px-4 py-2 rounded-xl cursor-pointer hover:scale-110 duration-200"
            >
              Demo{" "}
              <>
                <BsBoxArrowUpRight size={20} />
              </>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col md:flex-row pb-20">
        <div className="w-full h-full md:w-1/2 px-10 ">
          <h2 className="flex justify-center items-center text-2xl text-blue-500 font-bold pb-10 pt-5">
            Travel World
          </h2>
          <p className="flex justify-center items-center text-xl text-gray-500 ">
            A Travel website allows users to Search place , hotels for Travel in
            india accroding to there Budget . The website provides details of
            travel places in India according to session , month & festivals .
            <br/>
            Stack Used : React , JavaScript , Venila CSS , HTML
          </p>
        
          <div className=" flex justify-center  gap-20 items-center  py-10">
            <a
              href="https://github.com/rahul011097/travel.Net"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 justify-center items-center text-xl text-white  bg-violet-600 px-4 py-2 rounded-xl cursor-pointer hover:scale-110 duration-200"
            >
              Code{" "}
              <>
                <BsGithub size={20} />
              </>
            </a>
            <a
              href="https://ornate-malabi-a8b0ca.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 justify-center items-center text-xl text-white  bg-violet-600 px-4 py-2 rounded-xl cursor-pointer hover:scale-110 duration-200"
            >
              Demo{" "}
              <>
                <BsBoxArrowUpRight size={20} />
              </>
            </a>
          </div>
        </div>
        <div className="w-full h-full md:w-1/2 px-10 ">
          <img
            src={Project2}
            alt="project-2"
            className="rounded-xl h-64 w-72 mx-auto mt-20"
          />
        </div>
      </div>

      <div className="w-full h-full flex flex-col pb-20 md:flex-row">
        <div className="w-full h-full md:w-1/2 px-10 ">
          <img
            src={Project3}
            alt="project-3"
            className="rounded-xl h-64 w-72 mx-auto mt-20"
          />
        </div>
        <div className="w-full h-full md:w-1/2 px-10 ">
          <h2 className="flex justify-center items-center text-2xl text-blue-500 font-bold pb-10 pt-5">
            Simple React
          </h2>
          <p className="flex justify-center items-center text-xl text-gray-500 ">
            A Simple React website is an service Based website that allows users
            to choose our services , Brands . this website is based on React js
            with use of Caurosol . .
            <br/>
            Stack Used : React , JavaScript , SCSS , HTML
          </p>
      
          <div className=" flex justify-center  gap-20 items-center  py-10">
            <a
              href="https://github.com/rahul011097/ServiceBase-React"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 justify-center items-center text-xl text-white  bg-violet-600 px-4 py-2 rounded-xl cursor-pointer hover:scale-110 duration-200"
            >
              Code{" "}
              <>
                <BsGithub size={20} />
              </>
            </a>
            <a
              href="https://luxury-pastelito-0f82aa.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 justify-center items-center text-xl text-white  bg-violet-600 px-4 py-2 rounded-xl cursor-pointer hover:scale-110 duration-200"
            >
              Demo{" "}
              <>
                <BsBoxArrowUpRight size={20} />
              </>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row pb-20 ">
        <div className="w-full h-full md:w-1/2 px-10 ">
          <h2 className="flex justify-center items-center text-2xl text-blue-500 font-bold pb-10 pt-5">
            Ecommarce Clone App
          </h2>
          <p className="flex justify-center items-center text-xl text-gray-500 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quas
            eius ratione ipsa quibusdam! Illum perspiciatis fugit assumenda
            incidunt non iste hic corrupti doloremque, adipisci aliquid commodi
            eum nam animi cum saepe eius dicta iusto ullam tenetur vero.
            Similique neque quam, consectetur natus inventore perspiciatis. Ex
            facilis vel maiores illo.
            <br/>
            Stack Used : React , JavaScript , Telwind CSS , HTML
          </p>
          
          <div className=" flex justify-center  gap-20 items-center  py-10">
            <button
              // href="#"
              // target="_blank"
              // rel="noreferrer"
              className="flex gap-2 justify-center items-center text-xl text-white  bg-violet-600 px-4 py-2 rounded-xl cursor-pointer hover:scale-110 duration-200"
            >
              Code{" "}
              <>
                <BsGithub size={20} />
              </>
            </button>
            <button
              // href=""
              // target="_blank"
              // rel="noreferrer"
              className="flex gap-2 justify-center items-center text-xl text-white  bg-violet-600 px-4 py-2 rounded-xl cursor-pointer hover:scale-110 duration-200"
            >
              Demo{" "}
              <>
                <BsBoxArrowUpRight size={20} />
              </>
            </button>
          </div>
        </div>
        <div className="w-full h-full md:w-1/2 px-10 ">
          <img
            src={Project4}
            alt="project-4"
            className="rounded-xl h-64 w-72 mx-auto mt-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
