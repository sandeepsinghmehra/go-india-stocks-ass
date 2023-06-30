'use client'
import React from 'react';
import { FaUser, FaBell } from 'react-icons/fa';
import { BiSolidRightArrow } from 'react-icons/bi';

function PageClientComponent() {
  const [isSidebarVisible, setSidebarVisible] = React.useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className={`flex-1 relative h-full flex bg-white`}>
        {isSidebarVisible && (
        <aside className='bg-blue-900 w-40 h-full flex-shrink-0 transition-all duration-300'>
          {/* <div className="flex flex-col h-full"> */}
          <ul>
            <li className='relative'>
              <div>
                <FaUser size={20} color='white' className='inline-block' />
                <span className=''>Hello, User</span>
                <FaBell size={20} color='white' className='inline-block absolute right-0' />
              </div>
            </li>
            <li>
              <span>Discussion Fourm</span>
            </li>
            <li>
              <span>Market Stories</span>
            </li>
            <li>
              Sentiment
            </li>
            <li>
              Market
            </li>
            <li>
              Sector
            </li>
            <li>
              Watchlist
            </li>
            <li>
              Events
            </li>
            <li>
              News/Interview
            </li>
          </ul>
          {/* </div> */}
        </aside>
        )}
        <section className={`flex-1 w-full h-full relative ${
          isSidebarVisible ? 'ml-1' : 'ml-0'
        } bg-white transition-all duration-300`}>
            <button onClick={toggleSidebar} className='absolute top-64 origin-center h-20 bg-blue-900'>
                <BiSolidRightArrow size={20} color={'white'} />
            </button>
            <div className="h-full flex flex-row">
              <div className={`flex-grow bg-red-500 ${isSidebarVisible ? 'w-3/4' : 'w-full'}`}>
                Section1
              </div>
              <div className={`flex-grow bg-blue-500 ${isSidebarVisible ? 'w-1/4' : 'w-full'}`}>
                Section2
              </div>
            </div>
        </section>
    </div>
  )
}

export default PageClientComponent;
