import Image from 'next/image';

const Companies_info = [
    {
        image_url: '/images/capri.jpg',
        alt_text: 'capri'
    },{
        image_url: '/images/ganeshhousing.jpg',
        alt_text: 'ganeshhousing'
    },{
        image_url: '/images/fino.png',
        alt_text: 'fino'
    },{
        image_url: '/images/gravita.jpg',
        alt_text: 'gravita'
    },{
        image_url: '/images/godawari.jpg',
        alt_text: 'godawari'
    },{
        image_url: '/images/deepind.png',
        alt_text: 'deepind'
    },{
        image_url: '/images/dtpatten1.png',
        alt_text: 'dtpatten1'
    },{
        image_url: '/images/capri.jpg',
        alt_text: 'capri'
    },{
        image_url: '/images/ganeshhousing.jpg',
        alt_text: 'ganeshhousing'
    },{
        image_url: '/images/fino.png',
        alt_text: 'fino'
    },{
        image_url: '/images/gravita.jpg',
        alt_text: 'gravita'
    },{
        image_url: '/images/godawari.jpg',
        alt_text: 'godawari'
    }
];
  
export default function SnapCarousel(){
    return (
        <>
            <p className='uppercase text-sm lg:text-xl font-bold text-red-400 bg-white h-8 pl-5 flex items-center'>Featured Companies</p>
            <div className="overflow-x-auto snap-x scroll-smooth flex relative bg-cyan-50 px-3 webkit-scrollbar" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', '-ms-overflow-style': 'none' }} >
                <div className="flex flex-nowrap">
                {Companies_info.map((company, i)=>(
                    <Image
                        key={i}
                        className="relative snap-start object-cover w-14 h-14 lg:w-40 lg:h-14 border lg:border-none border-solid border-red-500 rounded-full lg:rounded-none px-1 mx-2 lg:px-3"
                        src={company.image_url}
                        alt={company.alt_text}
                        width={110}
                        height={11}
                        priority
                    />
                ))}
                </div>
            </div>
        </>
    )
}