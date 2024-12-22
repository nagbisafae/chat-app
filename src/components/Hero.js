import React from 'react'
import Carousel from './Carousel'

function Hero() {
  return (
    <>
    <section className='text-center m-10'>
        <h1 className="font-libre text-4xl font-semibold text-customBlue mb-3">Discover Haven</h1>
        <p className="font-libre text-2xl text-customBlue font-medium">Specialized AIs to support you in all areas of your life</p>
    </section>
    <div>
      <Carousel />
    </div>
    </>
  )
}

export default Hero
