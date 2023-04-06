import React from 'react'

interface Props{
  title : string
  icon: string
  content:string
}

const TextPlate:React.FC<Props> = ({icon, title, content}) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-2/3 flex px-4 pb-6 lg:pb-0">
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