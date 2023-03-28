import React from 'react'
interface Props{
  author: string
  author_name: string
  stock?:string
  bid_title?: string
  bid_amount?:string
  btn?:string
  isBtn?:boolean
}

const AuthBid:React.FC<Props> = ({author,author_name, stock, bid_title, bid_amount, btn}) => {
  return (
    <div className='flex justify-between items-center'>
      <div className="flex">
        <div className='mr-2'>
          <img src={author} alt={author_name}/>
        </div>
        <div>
          <h5 className="text-lg font-semibold font-DmSans">{author_name}</h5>
          <span className="text-sm">{stock}</span>
        </div>
      </div>
      <div>
        <div className="text-sm">{bid_title}</div>
        <span className='text-md'>{bid_amount}</span>
      </div>
    </div>
  )
}

export default AuthBid