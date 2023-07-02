import { FaUser, FaBell } from 'react-icons/fa';
import { BiSolidMessageAltDetail, BiSolidDollarCircle, BiSolidDownArrow } from 'react-icons/bi';

export default function Sidebar(){
    return (
        <ul className='text-white'>
            <li className='px-5 py-4 mb-2 w-full flex item-center justify-between border border-solid border-transparent border-b-slate-100'>
                <div>
                    <FaUser size={20} color='white' className='inline-block' />
                    <span className='pl-4'>Hello, User</span>
                </div>
                <div className='relative'>
                    <FaBell size={20} color='white' className='relative' />
                    <span className='absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full'></span>
                </div>
            </li>
            <li className='px-5 py-2 flex items-center bg-blue-950'>
              <BiSolidMessageAltDetail size={20} color='white' />
              <span className='px-4'>Discussion Fourm</span>
              <BiSolidDownArrow size={5} color='white' />
            </li>
            <li className='px-5 py-2 flex items-center'>
              <BiSolidDollarCircle size={20} color='white' className='inline-block' />
              <span className='pl-4'>Market Stories</span>
            </li>
            <li className="px-5 py-2 flex items-center indent-9">
              Sentiment
            </li>
            <li className='px-5 py-2 flex items-center indent-9'>
              Market
            </li>
            <li className='px-5 py-2 flex items-center indent-9'>
              Sector
            </li>
            <li className='px-5 py-2 flex items-center indent-9'>
              Watchlist
            </li>
            <li className='px-5 py-2 flex items-center indent-9'>
              Events
            </li>
            <li className='px-5 py-2 flex items-center indent-9'>
              News/Interview
            </li>
        </ul>
    )
}