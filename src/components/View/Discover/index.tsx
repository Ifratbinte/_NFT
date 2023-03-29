import React from 'react'
import discoverData from '#mocks/discover.json'
import Card from '#/components/common/Card'

const Discover = () => {
  const discover = discoverData.discover
  return (
    <div className='section-gap-s bg-grayPrimary'>
      <div className="container mx-auto">
        <h2 className="text-3xl font-integralCF">{discover.title}</h2>
        <div className="grid grid-cols-4 gap-10 mt-6">
          {
            discover.items.map((items:any, i:number) => {
              return (
                <Card thumb={items.thumb} author={items.avatar} title={items.title} amount={items.amount} stock={items.stock} time={items.time} btn={items.btn} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Discover