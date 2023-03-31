import React from 'react'
import { FaEthereum } from 'react-icons/fa'
interface Props{
    id:number
    image:string
    author : string
    author_name : string
    title: string
    ends_time: string
    badge_title:string
    bid_price: string
    bid_hour : string
    
}


const Banner:React.FC<Props> = ({id, image, author, author_name,title,ends_time, badge_title, bid_price, bid_hour}) => {
  return (
    
      <div className={`${id === 0 && "z-30 -right-36" } ${id === 1 && "z-20 -right-10" } ${id === 2 && "z-10 right-32" } relative`}>
        <img src={image} alt="" className= {`${id === 0 && "h-500 w-800" } ${id === 1 && "h-440 w-260" } ${id === 2 && "h-380 w-370" }`}/>
        <div className="absolute top-0 w-full h-full flex flex-col justify-between py-6 lg:px-10 px-5 ">
          <div>
            <h4 className="text-2xl text-white font-semibold font-DmSans">{title}</h4>
            <div className="flex items-center py-3">
              <img src={author} alt={author_name} />
              <span className="text-lg text-white pl-3 font-DmSans">{author_name}</span>
            </div>
          </div>
          <ul className="flex justify-between flex-wrap py-3 px-4 rounded-xl backdrop-blur-md bg-white/30">
            <li className="w-1/2 text-sm text-slate-50 font-DmSan pb-2">{badge_title}</li>
            <li className="w-1/2 text-sm text-slate-50 font-DmSans pb-2">{ends_time}</li>
            <li className="w-1/2 text-slate-50 flex items-center font-DmSans">
              <FaEthereum className="mr-2" />
              {bid_price}
            </li>
            <li className="w-1/2 text-slate-50 font-DmSans">{bid_hour}</li>
          </ul>
        </div>
      </div>
  )
}

export default Banner