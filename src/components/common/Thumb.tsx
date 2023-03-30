import React from 'react'
import styles from "./thumb.module.css"
interface Props{
    thumb : string
    person: string
    id: number
}

const Thumb:React.FC<Props> = ({thumb, person, id}) => {
  return (
    <div className={`${styles.thumb} relative`}>
        <img src={thumb} alt="" className='' />
        {/* <div className={`${styles.person} absolute right-0 bottom-0`}><img src={person} alt="" /></div> */}
        <div className={`${id %  2 === 1 ? "right-0 bottom-14" : ''} absolute`}><img src={person} alt="" /></div>
    </div>
  )
}

export default Thumb