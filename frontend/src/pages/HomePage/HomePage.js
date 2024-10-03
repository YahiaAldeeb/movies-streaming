import React from 'react'
import Header from '../../Components/Header/Header';
import HeroSection from '../../Components/HeroSection/HeroSection';
import TrendingMoviesSlider from '../../Components/TrendingMoviesSlider/TrendingMoviesSlider';
import Features from '../../Components/Features/Features';

const HomePage = () => {
  return (
     <>
     
      <HeroSection />
      <TrendingMoviesSlider/>
      <Features/>
      </>
  )
}

export default HomePage