import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import reactimg from '../assets/react.png'
import github from '../assets/github.png'
import mongo from '../assets/mongo.png'
import c from '../assets/c.png'
import java from '../assets/java.png'



const Experience = () => {

    const techs = [
        {
            id:1,
            src:c,
            title:'C++',
            style:'shadow-blue-700',
        },
        {
            id:2,
            src:java,
            title:'Java',
            style:'shadow-red-400',
        },
        // {
        //     id:3,
        //     src:python,
        //     title:'Python',
        //     style:'shadow-yellow-700',
        // },
        {
            id:4,
            src:html,
            title:'HTML',
            style:'shadow-orange-500',
        },
        {
            id:5,
            src:css,
            title:'CSS',
            style:'shadow-blue-500',
        },
        {
            id:6,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500',
        },
        {
            id:7,
            src:reactimg,
            title:'React',
            style:'shadow-blue-600',
        },
        {
            id:8,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400',
        },
        // {
        //     id:9,
        //     src:nextjs,
        //     title:'Next JS',
        //     style:'shadow-white',
        // },
        {
            id:10,
            src:github,
            title:'Github',
            style:'shadow-gray-500',
        },
        {
            id:11,
            src:mongo,
            title:'MongoDB',
            style:'shadow-green-500',
        },
    ]

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen ">

        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                <p className="py-6">These are the technologies I have worked with</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                {
                    techs.map(({id,src,title,style})=>(
                        <div key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}` }>
                            <img src={src} alt="" className="w-20 mx-auto"/>
                            <p className="mt-4">{title}</p>
                        </div>
                    ))
                }

                
            </div>
        </div>

    </div>
  )
}

export default Experience