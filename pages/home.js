import React from 'react';
import Navbar from '../components/Navbar';
import First from '../components/First';
import Second_sec from '../components/Second_sec';
import home_card from '../components/cards/home_card';
import HomeCard from '../components/HomeCard';
import HomeCardDetail from '../components/HomeCardDetail';


const home = () => {
  return (
    <div>
      <Navbar />
      <First />
      <Second_sec />
      <HomeCard />
      <HomeCardDetail />
    </div>
  );
}

export default home;
