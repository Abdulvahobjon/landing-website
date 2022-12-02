import React from 'react'

function Hero() {
  return (
    <div className='text-white'>
        <div className="max-w-[840px] px-5 mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className='text-[#00df9a] font-bold p-2'>Eligendi facere rerum omnis placeat</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 '> Corrupti et  commodi!</h1>
            <div>
                <p className='md:text-5xl text-gray-500 mb-5 sm:text-4xl text-bold '>Consectetur adipisicing elit <span className='text-[#00df9a] '>Hi</span></p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md mx-auto font-bold px-6 py-3'>Get started</button>

        </div>
    </div>
  )
}

export default Hero