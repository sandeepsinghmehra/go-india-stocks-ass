import { useState } from 'react';
import DiscussionFourm from './DiscussionFourm';
import MarketStories from './MarketStories';

const TabButtons = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex flex-row h-10 w-full">
      <button
        className={`px-4 py-2 w-1/2 ${
          activeTab === 'discussion-fourm' ? `bg-blue-950 text-white border border-solid border-b-red-600 border-transparent` : 'bg-blue-900 text-white'
        }`}
        onClick={() => handleTabClick('discussion-fourm')}
      >
        Discussion Fourm
      </button>
      <button
        className={`px-4 py-2 w-1/2 ${
          activeTab === 'market-stories' ? 'bg-blue-950 text-white border border-solid border-b-red-600 border-transparent' : 'bg-blue-900 text-white'
        }`}
        onClick={() => handleTabClick('market-stories')}
      >
        Market Stories
      </button>
    </div>
  );
};

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('discussion-fourm');
    return (
        <div className='flex flex-col w-full'>
            <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="mt-4">
                {activeTab === 'discussion-fourm' && <DiscussionFourm />}
                {activeTab === 'market-stories' && <MarketStories />}
            </div>
        </div>
    );
};

export default Tabs;
