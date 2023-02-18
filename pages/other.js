import React from 'react';
import Navbar from '../components/Navbar';
import First from '../components/First';
import Second_sec from '../components/Second_sec';
import other_card from '../components/cards/other_card';
import OtherCard from '../components/OtherCard';
import OtherCardDetail from '../components/OtherCardDetail';

const other = () => {
  return (
    <div>
      <Navbar />
      <First />
      <Second_sec />
      <OtherCard />
      <OtherCardDetail />
    </div>
  );
}

export default other;
