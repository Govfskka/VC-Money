// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import HowItWorks from '../components/HowItWorks';
import LiveEarnings from '../components/LiveEarnings';
import Leaderboard from '../components/Leaderboard';

const Home = () => {
  return (
    <div>
      <Header />
      <section className="hero-section">
        <h1>Earn Real Money by Playing Games & Watching Ads!</h1>
        <button className="cta-button">Join & Start Earning Now!</button>
      </section>
      <HowItWorks />
      <LiveEarnings />
      <Leaderboard />
    </div>
  );
};

export default Home;
