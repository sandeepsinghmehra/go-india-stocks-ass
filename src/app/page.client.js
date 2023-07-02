'use client'
import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { FaUser, FaBell, FaRegHeart, FaHeart } from 'react-icons/fa';
import { BiSolidRightArrow, BiSolidMessageAltDetail, BiShareAlt, BiComment, BiSolidDollarCircle } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc';
import Image from 'next/image';  
import Sidebar from '@/components/Sidebar';
const market_stories = [
  {
    image_url: '/images/Borough-Market.webp',
    alt: 'Borough-Market',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },{
    image_url: '/images/mumbai-maharastraindia.jpeg',
    alt: 'Mumbai-Maharastraindia',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },{
    image_url: '/images/Borough-Market.webp',
    alt: 'Borough-Market',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },{
    image_url: '/images/mumbai-maharastraindia.jpeg',
    alt: 'Mumbai-Maharastraindia',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    image_url: '/images/Borough-Market.webp',
    alt: 'Borough-Market',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },{
    image_url: '/images/mumbai-maharastraindia.jpeg',
    alt: 'Mumbai-Maharastraindia',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
]
function PageClientComponent() {
  const [isSidebarVisible, setSidebarVisible] = React.useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className={`flex-1 relative height-main-section flex bg-white`}>
        {isSidebarVisible && (
        <aside className='bg-blue-900 w-60 h-full flex-shrink-0 transition-all duration-300'>
          <Sidebar />
        </aside>
        )}
        <section className={`flex-1 w-full h-full relative ${isSidebarVisible ? 'ml-0' : 'ml-0'} bg-white transition-all duration-300`}>
            <button onClick={toggleSidebar} className='absolute top-64 origin-center h-20 bg-blue-900'>
                <BiSolidRightArrow size={20} color={'white'} />
            </button>
            <div className="h-full flex flex-row bg-gray-100">
              <div className={`h-full ${isSidebarVisible ? 'w-2/3' : 'w-full'} p-5`}>
                <h1 className='uppercase text-xl font-bold text-red-400 h-8'>Discussion Fourm</h1>
                <div className='pl-10 pr-5 h-full'>
                  <label className='h-10 text-xl font-semibold'>Filters</label>
                  <div className='bg-white flex h-18 justify-evenly py-5 rounded-lg'>
                      <div className='w-fit h-8 px-3 py-1 bg-red-700 text-white border border-solid rounded-full'>Sector 1</div>
                      <div className='w-fit h-8 px-3 py-1 bg-blue-800 text-white border border-solid rounded-full'>Sector 2</div>
                      <div className='w-fit h-8 px-3 py-1 bg-yellow-400 text-white border border-solid rounded-full'>Sector 3</div>
                      <div className='w-fit h-8 bg-gray-300 flex justify-end items-center border border-solid border-gray-300 rounded-full'>
                        <FiSearch size={20} color='black' className='inline-block' />
                        <input type={'text'} placeholder='Search here' className='bg-inherit rounded-r-full pl-1 focus:outline-none'/>
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
              </div>
              <div className={`h-full ${isSidebarVisible ? 'w-1/3' : 'w-full'} p-5`}>
              <h1 className='uppercase text-xl font-bold text-red-400 bg-gray-100 h-8 pl-5'>Market Stories</h1>
              <div className='flex flex-wrap justify-between custom-height-market-story gap-10 overflow-auto p-5'>
                {market_stories.map((story,i)=>(
                <div key={i} className="relative w-fit h-fit flex place-items-center rounded-lg">
                  <Image
                    className="relative object-cover w-80 h-44 rounded-lg"
                    src={story.image_url}
                    alt={story.alt}
                    width={180}
                    height={30}
                    priority
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center rounded-lg">
                    <h2 className="text-white line-clamp-3 text-sm h-20 font-light bg-black bg-opacity-50 p-4 rounded-lg">
                      {story.text}
                    </h2>
                  </div>
                </div>))}

              </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default PageClientComponent;
