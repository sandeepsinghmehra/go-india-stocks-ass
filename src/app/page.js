import { AiOutlinePlus } from 'react-icons/ai';
import PageClientComponent from './page.client';
import Navbar from '@/components/Navbar';
import MarqueeHeader from '@/components/MarqueeHeader';
import SnapCarousel from '@/components/SnapCarousel';

export default function Home() {
  
  return (
    <main className="relative w-full h-screen overflow-hidden p-0">
        <Navbar />
        <MarqueeHeader />
        <SnapCarousel />
        <PageClientComponent />
        <div className='absolute bottom-10 right-10 bg-blue-900 rounded-full p-3'>
          <AiOutlinePlus size={40} color='white' />
        </div>
    </main>
  )
}
