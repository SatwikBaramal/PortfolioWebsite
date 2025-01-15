import React from 'react'
import SpellChecker from '../assets/portfolio/spellchecker.jpg'
import etch from '../assets/portfolio/etch.jpg'
import schoolwebsite from '../assets/portfolio/schoolwebsite.jpg'
import geolocation from '../assets/portfolio/geolocation.png'
import tictactoe from '../assets/portfolio/tictactoe.jpg'
import rockpaperscissors from '../assets/portfolio/rockpaperscissors.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            name:'Spell Checker',
            src:SpellChecker,
            code:'https://github.com/SatwikBaramal/SpellChecker'
        },
        {
            id:2,
            src:schoolwebsite,
            name: 'Government School Website',
            code: 'https://github.com/himanshulodha2002/Government_Schools_Rajanakunte_Website',
        },
        {
            id:3,
            src:geolocation,
            name:'Geolocation-Based Attendance Tracking Application',
            code:'https://github.com/SatwikBaramal/MiniProject3',
        },
        {
            id:4,
            src:etch,
            name: 'Etch a Sketch',
            demo:'https://satwikbaramal.github.io/Etch-a-Sketch/',
            code:'https://github.com/SatwikBaramal/Etch-a-Sketch',
        },
        {
            id:5,
            src:tictactoe,
            name:'Tic Tac Toe',
            code:'https://github.com/SatwikBaramal/TOP-JSProj2',
            demo:'https://satwikbaramal.github.io/TOP-JSProj2/'
        },
        {
            id:6,
            src:rockpaperscissors,
            name:'Rock Paper Scissors',
            code:'https://github.com/SatwikBaramal/TOPProject3RockPaperScissors',
            demo:'https://satwikbaramal.github.io/TOPProject3RockPaperScissors/',
        },
    ]

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pb-16">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        portfolios.map(({name, id, src, demo, code}) => (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                                <div className="flex flex-col items-center justify-center p-4">
                                    <p className="text-center font-bold">{name}</p>
                                    <div className="flex justify-center mt-4 space-x-4">
                                        {demo && (
                                            <button className="w-full px-6 py-3 duration-200 hover:scale-105 bg-gray-700 rounded-md text-white">
                                                <a href={demo} target="_blank" rel="noreferrer">Demo</a>
                                            </button>
                                        )}
                                        <button className="w-full px-6 py-3 duration-200 hover:scale-105 bg-gray-700 rounded-md text-white">
                                            <a href={code} target="_blank" rel="noreferrer">Code</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio
