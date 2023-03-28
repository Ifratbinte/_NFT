import React from 'react'

interface Props {
    id: number
    image:string
    title: string
    amount:string
    in_sell?: string
    de_sell?: string

}

const TopCollection:React.FC<Props> = ({id, image, title, amount, in_sell, de_sell}) => {
  return (
    <div className='flex items-center'>
        <div className='text-2xl font-bold'>{id}</div>
        
    </div>
  )
}

export default TopCollection