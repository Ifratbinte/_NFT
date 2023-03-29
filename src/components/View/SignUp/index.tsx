import Thumb from '#/components/common/Thumb'
import React from 'react'
import SignIndata from "#mocks/signIn.json"
import styles from "#components/common/thumb.module.css"

const CTA = () => {
  const cta = SignIndata.signin
  return (
    <div className='container mx-auto section-gap-s relative my-6'>
      <div className="flex">
        <div className={`${styles.signup} flex w-3/5`}>
          {
            cta.thumb.map((cta:any, i:number)=> {
              return (
                <Thumb thumb={cta.thumbnail} person={cta.person}/>
              )
            })
          }
        </div>
        <div className='w-2/5'>
          <h2 className='font-bold text-3xl font-integralCF w-3/5 mb-8'>{cta.title}</h2>
          <p className='text-paragraph font-DmSans text-base pr-20 pb-8'>{cta.content}</p>
          <button className='border border-1 border-primary rounded-full px-8 py-3 bg-primary text-white'>{cta.btn}</button>
        </div>
      </div>
    </div>
  )
}

export default CTA