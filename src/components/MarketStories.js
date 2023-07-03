import Image from 'next/image';

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
export default function MarketStories(){
    return (
        <div id={"market-stories"} className='flex flex-wrap justify-between custom-height-market-story-mobile lg:custom-height-market-story gap-5 overflow-auto p-5'>
            {market_stories.map((story,i)=>(
                <div key={i} className="relative w-fit max-w-full h-fit flex flex-grow place-items-center rounded-lg">
                  <Image
                    className="relative object-cover w-80 max-w-full flex-grow h-44 rounded-lg"
                    src={story.image_url}
                    alt={story.alt}
                    width={180}
                    height={180}
                    priority
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center rounded-lg">
                    <h2 className="text-white line-clamp-3 text-sm h-20 font-light bg-black bg-opacity-50 p-4 rounded-lg">
                      {story.text}
                    </h2>
                  </div>
                </div>
            ))}
        </div>
    )
}