import { AiOutlineAppstore } from 'react-icons/ai';
import { BiHomeCircle } from 'react-icons/bi';
import { CiGrid42 } from 'react-icons/ci';
import { FaRegCommentDots } from 'react-icons/fa';
import { BsCardChecklist, BsUiRadiosGrid } from 'react-icons/bs';

export default function BottomNavbar(){
    return (
        <div className='absolute bottom-0 bg-blue-900 w-full h-10 text-white flex flex-row justify-evenly items-center lg:hidden'>
        <div className='w-1/5 h-10 flex justify-center items-center'>
          <CiGrid42 className='w-5 h-5'/>
        </div>
        <div className='w-1/5 h-10 flex justify-center items-center'>
          <BsUiRadiosGrid className='w-5 h-5' />
        </div>
        <div className='w-1/5 h-10 flex justify-center items-center border border-solid border-transparent border-b-red-500'>
          <BiHomeCircle className='w-5 h-5' />
        </div>
        <div className='w-1/5 h-10 flex justify-center items-center'>
          <FaRegCommentDots className='w-5 h-5' />
        </div>
        <div className='w-1/5 h-10 flex justify-center items-center'>
          <BsCardChecklist className='w-5 h-5' />
        </div>
      </div>
    )
}