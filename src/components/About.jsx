import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About and Education</p>
            </div>

            <p className="text-xl mt-2"> 
            EDUCATION <br /> <br />School  <br />
            Vikhe Patil Memorial School, Pune <br />
                10th CBSE Grade: 92.2% <br />
                12th CBSE Grade: 87.6% <br /> <br />
                College <br />
                Current CGPA:- 9.54
            </p>

            <br/>
            
            <p className="text-xl"> <br />

            </p>
        </div>
    </div>
  )
}

export default About