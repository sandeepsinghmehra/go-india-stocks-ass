import Image from 'next/image';
import { AiOutlineEye } from 'react-icons/ai';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { BiSolidMessageAltDetail, BiShareAlt, BiComment } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc';

export default function DiscussionFourm(){
    return (
        <div id={"discussion-fourm"} className='pl-2 lg:pl-10 pr-2 lg:pr-5 h-full'>
                  <label className='h-10 text-xl text-black font-semibold'>Filters</label>
                  <div className='bg-white relative flex w-full h-18 justify-evenly py-2 lg:py-5 px-1 lg:px-4 rounded-lg'>
                      <div className='w-fit h-6 lg:h-8 px-3 py-1 bg-red-700 text-[8px] lg:text-base text-white border border-solid rounded-full'>Sector 1</div>
                      <div className='w-fit h-6 lg:h-8 px-3 py-1 bg-blue-800 text-[8px] lg:text-base text-white border border-solid rounded-full'>Sector 2</div>
                      <div className='w-fit h-6 lg:h-8 px-3 py-1 bg-yellow-400 text-[8px] lg:text-base text-white border border-solid rounded-full'>Sector 3</div>
                      <div className='w-fit h-6 lg:h-8 bg-gray-300 flex justify-end items-center border border-solid border-gray-300 rounded-full'>
                        <FiSearch size={20} color='black' className='inline-block' />
                        <input type={'text'} placeholder='Search here' className='bg-inherit rounded-r-full text-[10px] lg:text-base w-16 lg:w-28 pl-1 focus:outline-none'/>
                      </div>
                  </div>
                  <div className='discussion-section-height overflow-auto'>
                    <div className='bg-white flex justify-evenly my-5 rounded-lg py-5 px-10'>
                      <div className='w-full m-auto'>
                        <p className='text-blue-400 float-right text-xs'>2 min ago</p>
                        <div className="relative mx-auto w-fit h-fit flex place-items-center rounded-lg">
                          <Image
                            className="relative object-cover w-full h-44 rounded-lg"
                            src={'/images/infibeam-logo.png'}
                            alt={'infibeam'}
                            width={180}
                            height={30}
                            priority
                          />
                        </div>
                        <div className='flex'>
                          <FcBusinessman size={40} className='bg-red-950 rounded-full' />
                          <div>
                            <span><strong>Lorum Ipsum</strong></span>
                            <span className='w-fit h-8 px-1 py-1 bg-red-700 text-white font-light border border-solid rounded-full'>Sector 1</span>
                            <div>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industy. Lorem Ipsum is</p>
                              <div className='flex justify-evenly w-full'>
                                <div className='flex flex-row items-center'>
                                  <FaHeart color='red'/>
                                  <p>2k</p>
                                </div>
                                <div className='flex flex-row items-center'>
                                  <AiOutlineEye />
                                  <p>2k</p>
                                </div>
                                <div className='flex flex-row items-center'>
                                  <BiComment />
                                  <p>2k comments</p>
                                </div>
                                <div className='flex flex-row items-center'>
                                  <BiShareAlt />
                                  <p>share</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                        
                    </div>
                    <div className='bg-white flex justify-evenly my-5 rounded-lg py-5 px-10'>
                      <div className='w-full m-auto'>
                        <p className='text-blue-400 float-right text-xs'>2 min ago</p>
                        <div className='flex'>
                          <FcBusinessman size={40} className='bg-red-950 rounded-full' />
                          <div>
                            <span><strong>Lorum Ipsum</strong></span>
                            <span className='w-fit h-8 px-1 py-1 bg-red-700 text-white font-light border border-solid rounded-full'>Sector 1</span>
                            <div>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industy. Lorem Ipsum is</p>
                              <div className='flex justify-evenly w-full'>
                                <div className='flex flex-row items-center'>
                                  <FaRegHeart color='red'/>
                                  <p>2k</p>
                                </div>
                                <div className='flex flex-row items-center'>
                                  <AiOutlineEye />
                                  <p>2k</p>
                                </div>
                                <div className='flex flex-row items-center'>
                                  <BiComment />
                                  <p>2k comments</p>
                                </div>
                                <div className='flex flex-row items-center'>
                                  <BiShareAlt />
                                  <p>share</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='bg-white flex justify-evenly my-5 rounded-lg py-5 px-10'>
                      <div className='w-full m-auto'>
                        <p className='text-blue-400 float-right text-xs'>2 min ago</p>
                        <div className='flex'>
                          <FcBusinesswoman size={40} className='bg-red-950 rounded-full' />
                          <div>
                            <span><strong>Lorum Ipsum</strong></span>
                            <span className='w-fit h-8 px-1 py-1 bg-red-700 text-white font-light border border-solid rounded-full'>Sector 1</span>
                            <div>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industy. Lorem Ipsum is</p>
                              <div className='flex justify-evenly w-full'>
                                <div className='flex flex-row items-center'>
                                  <FaHeart color='red'/>
                                  <p>2k</p>
                                </div>
                                <div className='flex flex-row items-center'>
                                  <AiOutlineEye />
                                  <p>2k</p>
                                </div>
                                <div className='flex flex-row items-center'>
                                  <BiComment />
                                  <p>2k comments</p>
                                </div>
                                <div className='flex flex-row items-center'>
                                  <BiShareAlt />
                                  <p>share</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                        
                    </div>
                  </div>
                </div>
    )
}