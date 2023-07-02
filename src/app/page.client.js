'use client'
import React from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';
import Sidebar from '@/components/Sidebar';
import MarketStories from '@/components/MarketStories';
import DiscussionFourm from '@/components/DiscussionFourm';
import Tabs from '@/components/TabContainer';

function PageClientComponent() {
  const [isSidebarVisible, setSidebarVisible] = React.useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className={`flex-1 relative height-main-section flex bg-white`}>
        {isSidebarVisible && (
        <aside className='bg-blue-900 w-44 lg:w-60 h-full flex-shrink-0 transition-all duration-300'>
          <Sidebar />
        </aside>
        )}
        <section className={`flex-1 w-full h-full relative ${isSidebarVisible ? 'ml-0' : 'ml-0'} bg-white transition-all duration-300`}>
            <button onClick={toggleSidebar} className='absolute top-64 origin-center h-20 bg-blue-900'>
                <BiSolidRightArrow size={20} color={'white'} />
            </button>
            <div className="hidden lg:flex h-full flex-row bg-gray-100">
              <div className={`h-full w-full md:${isSidebarVisible ? 'w-2/3' : 'w-full'} p-3 lg:p-5`}>
                <h1 className='hidden lg:block uppercase text-xl font-bold text-red-400 h-8'>Discussion Fourm</h1>
                <DiscussionFourm />
              </div>
              <div className={`h-full hidden md:block ${isSidebarVisible ? 'w-1/3' : 'w-full'} p-5`}>
              <h1 className='hidden lg:block uppercase text-xl font-bold text-red-400 bg-gray-100 h-8 pl-5'>Market Stories</h1>
              <MarketStories />
              </div>
            </div>
            <div className='flex lg:hidden h-full flex-row bg-gray-100'>
              <Tabs />
            </div>
        </section>
    </div>
  )
}

export default PageClientComponent;
