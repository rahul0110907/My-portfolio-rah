import React from "react";
import AboutImg from "../Assets/aboutImage.jpg";

const About = () => {
  return (
    <div
      id="About"
      name="About"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 text-white px-20 py-10"
    >
      <div className="pb-8 px-20 flex justify-center md:flex md:justify-start">
        <p className="text-4xl text-white border-b-4 border-gray-500 inline font-bold uppercase">
          About
        </p>
      </div>
      <div className="flex flex-col w-full  md:flex-row  ">
        <div className="h-1/2 w-full flex  pr-5 pl-5 md:w-1/2">
          <img
            src={AboutImg}
            alt="about"
            style={{ height: "350px", width: "400px" }}
            className="rounded-xl"
          />
        </div>
        <div className="w-full pt-12 md:w-1/2  md:pt-0 ">
          <h2 className="font-bold text-3xl pb-4 w-full">
            A dedicated Front-end Developer based in Jaipur, Rajasthan{" "}
          </h2>
          <p className="text-xl text-gray-500 pb-10 w-full">
            As a Fresher Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
