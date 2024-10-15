import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection';
import TrendingMoviesSlider from '../../Components/TrendingMoviesSlider/TrendingMoviesSlider';
import Features from '../../Components/Features/Features';
import WatchByGenre from '../../Components/WatchByGenre/WatchByGenre';

const HomePage = () => {
  return (
     <>
     
      <HeroSection />
      
      <WatchByGenre/>
      <TrendingMoviesSlider/>
      <Features/>
      </>
  )
}

export default HomePage