import React from 'react'

interface Props{
  title : string
  icon: string
  content:string
}

const TextPlate:React.FC<Props> = ({icon, title, content}) => {
  return (
    <div className="lg:w-4/12 flex px-14">
    <div className="block">
      <img src={icon} alt={title} className="w-20"/>
    </div>
    <div className="ml-4">
      <div className="text-xl font-bold mb-4">{title}</div>
      <p className="text-base text-paragraph">{content}</p>
    </div>
  </div>
  )
}

export default TextPlate