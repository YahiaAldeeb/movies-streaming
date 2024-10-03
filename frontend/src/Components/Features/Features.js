import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import './Features.css'; // Import feature-specific styles

const Features = () => {
  const featuresData = [
    {
      title: 'Enjoy on your TV',
      description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    },
    {
      title: 'Download your shows to watch offline',
      description: 'Save your favorites easily and always have something to watch.',
    },
    {
      title: 'Watch everywhere',
      description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
    },
    {
      title: 'Create profiles for kids',
      description: 'Send kids on adventures with their favorite characters in a space made just for them — free with your membership.',
    }
  ];

  return (
    <div className="features-container">
      <h2>More Reasons to Sign In</h2>
      <div className="features">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
