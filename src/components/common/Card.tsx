import Link from 'next/link'
import React from 'react'
import { FaEthereum } from 'react-icons/fa'

interface Props{
  thumb: string
  author: []
  title : string
  amount : string
  stock: string
  time : string
  btn: string
}

const Card:React.FC<Props> = ({thumb, author,title,amount,stock,time,btn}) => {
  console.log({author});
  
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-sm bg-white p-3 ">
      <img className="w-full" src={thumb} alt={title}/>
      <div className="flex">
        {author?.map((author:any, i:number) => <img key={i} src={author.avatar} alt="" />)}
      </div>
      <div className="p-2">
        <h5 className="text-lg font-semibold font-DmSans mb-3">{title}</h5>
        <div className="flex justify-between mb-5 pb-5 border-b border-b-slate-100">
          <span className='flex items-center text-green-600 text-sm font-DmSans font-semibold'><FaEthereum className='text-lg mr-1'/>{amount}</span>
          <span className='text-sm text-gray-500'>{stock}</span>
        </div>
        <div className="flex justify-between items-center pt-1">
          <button className="text-primary text-xs bg-gray-100 px-4 py-2 font-semibold rounded-full">{time}</button>
          <Link href="#" className='text-primary text-md font-DmSans  hover:border-b'>{btn}</Link>
        </div>
      </div>
    </div>
  )
}

export default Card