import Image from 'next/image'
import { AiOutlinePlus } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import PageClientComponent from './page.client';

export default function Home() {
  
  return (
    <main className="relative h-screen overflow-hidden p-0">
      <div className="flex flex-col h-full">
        <nav className={`flex items-center justify-between w-full h-16 bg-white`}>
          <p>Logo</p>
          <div className='w-96 h-8 bg-gray-300 flex justify-end items-center border border-solid border-gray-500 rounded'>
            <FiSearch size={20} color='black' className='inline-block mr-2' />
          </div>
          <div className='space-x-4'>
            <span className='pl-4 text-gray-500'>Contact Us</span>
            <button className='border text-gray-500 px-3 py-1 border-solid border-gray-500 rounded'>SIGN UP</button>
            <button className='border text-gray-500 px-3 py-1 border-solid border-gray-500 rounded'>SIGN IN</button>
          </div>
        </nav>
        <marquee className={'bg-black text-white h-6'} behavior="scroll" direction="right" scrollamount="1">Slow Scrolling</marquee>
        <p className='capitalize text-black h-8'>Featured Companies</p>
        <div className='h-14 bg-cyan-100'></div>
        <PageClientComponent />
        <div className='absolute bottom-10 right-10 bg-blue-900 rounded-full p-3'>
          <AiOutlinePlus size={40} color='white' />
        </div>
      </div>
    </main>
  )
}
