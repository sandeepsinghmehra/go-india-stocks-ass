import { useState } from 'react';
import DiscussionFourm from './DiscussionFourm';
import MarketStories from './MarketStories';

const TabButtons = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex flex-row h-10">
      <button
        className={`px-4 py-2 mr-2 ${
          activeTab === 'discussion-fourm' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => handleTabClick('discussion-fourm')}
      >
        Discussion Fourm
      </button>
      <button
        className={`px-4 py-2 ${
          activeTab === 'market-stories' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
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
        <div className='flex flex-col'>
            <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="mt-4">
                {activeTab === 'discussion-fourm' && <DiscussionFourm />}
                {activeTab === 'market-stories' && <MarketStories />}
            </div>
        </div>
    );
};

export default Tabs;
