import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-16 text-white'>
        <div className="max-w-[1240px] px-5 mx-auto">
            <div className="grid lg:grid-cols-2">
                <div className='lg:mb-0 mb-3'>
                <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Lorem ipsum dolor sit amet.</h2>
                <p className='text-[#00df9a] font-bold '>Lorem ipsum dolor sit.</p>
               </div>
               <div>
               <form action="#" className='mb-2'>
               <input className='p-3 lg:mb-1 mb-3  mr-2 outline-none text-black rounded-md max-w-[300px] w-full ' type="text" placeholder='Emal..' />
               <button className='bg-[#00df9a] w-[200px] rounded-md text-white  font-bold px-6 py-3'>Submid</button>

               </form>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <a className='text-[#00df9a]' href="#">link me</a>

               </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter