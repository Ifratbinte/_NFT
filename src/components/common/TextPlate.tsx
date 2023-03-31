import React from 'react'

interface Props{
  title : string
  icon: string
  content:string
}

const TextPlate:React.FC<Props> = ({icon, title, content}) => {
  return (
    <div className="md:1/2 lg:w-4/12 flex lg:px-14 px-8 pb-6 lg:pb-0">
      <div className="block">
        <img src={icon} alt={title} className="w-20"/>
      </div>
      <div className="ml-4">
        <div className="text-xl font-bold font-DmSans mb-4">{title}</div>
        <p className="text-base text-paragraph font-DmSans">{content}</p>
      </div>
    </div>
  )
}

export default TextPlate