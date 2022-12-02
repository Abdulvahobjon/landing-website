import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
function Navbar() {
    const [nav , setNav] = useState(false)

    const handleNav = ()=>{
        setNav(!nav)
    }

    return (
        <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-5'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
            <ul className='md:flex hidden'>

                <li className='p-4  cursor-pointer' >Home</li>
                <li className='p-4  cursor-pointer' >Company</li>
                <li className='p-4  cursor-pointer' >Resources</li>
                <li className='p-4  cursor-pointer' >About</li>
                <li className='p-4  cursor-pointer' >Contact</li>
            </ul>
            <div onClick={handleNav} className='md:hidden block' >
                {!nav? <AiOutlineMenu className='cursor-pointer text-xl' /> : <AiOutlineClose className='cursor-pointer text-xl' />}
            </div>
           {nav?  <div className='fixed top-0 md:hidden block left-0 w-[60%] border-r h-full border-r-green-900 bg-[#000300]'>
            <h1 className='w-full m-5 mt-8 text-3xl font-bold text-[#00df9a]'>React.</h1>
                <ul className='p-4 uppercase '>

                    <li className='p-4 border-b border-grey-600' >Home</li>
                    <li className='p-4 border-b border-grey-600' >Company</li>
                    <li className='p-4 border-b border-grey-600' >Resources</li>
                    <li className='p-4 border-b border-grey-600' >About</li>
                    <li className='p-4' >Contact</li>
                </ul>
            </div> : null}
        </div>
    )
}

export default Navbar