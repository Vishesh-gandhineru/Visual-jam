import React from 'react'
import { Link } from 'react-router-dom'

export default function Iconbox(props) {
  return (    
    <div className="flex flex-col gap-5 bg-[#f8f8f8] p-4 md:p-10 sticky top-10 ">
        <div className="imageBox flex flex-col md:flex-row items-center gap-5">
        <img src={props.icon} alt={props.iconAlt} className='w-[40%] md:w-[20%]'/>
          <h3 className="text-mob-h2 font-normal md:text-[32px] text-center md:text-left">{props.title}</h3>
        </div>
        <p className="text-center md:text-left text-mob-p md:text-desk-p">{props.content}</p>
        <Link to={props.link} className="p-3 border-b-2 w-fit m-auto font-bold text-mob-a text-[#01adef] border-[#000] md:ml-[1px]">See Applications</Link>
      </div>
  )
}
