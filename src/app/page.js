import PageClientComponent from './page.client';
import Navbar from '@/components/Navbar';
import MarqueeHeader from '@/components/MarqueeHeader';
import SnapCarousel from '@/components/SnapCarousel';
import BottomNavbar from '@/components/BottomNavbar';
import PostButton from '@/components/PostButton';

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden p-0">
      <Navbar />
      <MarqueeHeader />
      <SnapCarousel />
      <PageClientComponent />
      <PostButton />
      <BottomNavbar />
    </main>
  )
}
