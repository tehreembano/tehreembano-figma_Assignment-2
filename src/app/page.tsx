import Header from './components/Header';
import HeroSection from './components/HeroSection'
import Features from './components/Features';

export default function Home() {
  return (
    <>
    <div className='bg-[#252B42] '></div>
      <Header />
      <HeroSection />
      <Features />
    </>
  );
}