import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import { FcBusinessman } from 'react-icons/fc';

export default function Navbar(){
    return (
        <nav className={`flex items-center justify-between w-full h-16 px-4 lg:px-8 bg-white`}>
          <div className="relative w-fit flex place-items-center ">
                  <Image
                    className="relative w-24 h-16 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/images/company_logo.jpeg"
                    alt="Company Logo"
                    width={180}
                    height={20}
                    priority
                  />  
                </div>
          <div className='w-96 h-8 mx-5 bg-gray-300 flex justify-end items-center border border-solid border-gray-500 rounded'>
            <FiSearch size={20} color='black' className='inline-block mr-2' />
          </div>
          <div className='hidden lg:block space-x-4'>
            <span className='pl-4 text-gray-500'>Contact Us</span>
            <button className='uppercase border text-gray-500 px-3 py-1 border-solid border-gray-500 rounded'>SIGN UP</button>
            <button className='uppercase border text-gray-500 px-3 py-1 border-solid border-gray-500 rounded'>SIGN IN</button>
          </div>
          <div className='lg:hidden '>
            <FcBusinessman size={40} className='bg-red-950 rounded-full' />
          </div>
        </nav>
    )
}