import React from 'react'
import Img1 from "../images/ofes.png";
function Analytics() {
  return (
    <div className='py-16 px-4 w-full bg-white'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center">
            <img className='max-w-[500px] w-full mx-auto py-4' src={Img1}  />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold '>Lorem ipsum dolor sit.</p>
                <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Lorem ipsum dolor sit amet.</h2>
                <p className='mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quae provident in blanditiis eveniet similique. Laudantium, amet et officiis tenetur eum facilis iste?</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md text-white  font-bold px-6 py-3'>Get started</button>

            </div>
        </div>
    </div>
  )
}

export default Analytics