import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-bleck/40 flex flex-col justify-center'>
            <h1 className='p-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className="text-orange-600">Best</span></h1>
            <h1 className='p-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Foods <span className="text-orange-600">Delivery</span></h1>
        </div>
        <img src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-full max-h-[500px] object-cover'  alt="/"/>
      </div>
    </div>
  )
}

export default Hero
