import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { RiArrowRightSLine } from "react-icons/ri";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl text-white font-medium">
                    I'm a CS Undergrad
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                Currently pursuing a Bachelor of Technology (B.Tech) degree in Computer Science at BMS Institute of Technology
                and Management (BMSIT'M), Bengaluru, and am in my fifth semester. 
                I have a strong understanding of fundamental computer science concepts, excel in problem-solving, 
                and am highly effective at accomplishing tasks efficiently.

                    
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
                    bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <RiArrowRightSLine size={20} className="ml-1"/>
                        </span>
                    </Link >
                </div>

            </div>
            <div>
                <img src={HeroImage} alt="mypic" className="rounded-2xl mx-auto w-2/3 md:w-full" />
            </div>
        </div>
    </div>
  )
}

export default Home