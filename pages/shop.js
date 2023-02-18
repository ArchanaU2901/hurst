import React from 'react';
import Navbar from '../components/Navbar';
import First from '../components/First';
import Second_sec from '../components/Second_sec';
import shop_card from '../components/cards/shop_card';
import ShopCard from '../components/ShopCard';
import ShopCardDetail from '../components/ShopCardDetail';

const shop = () => {
  return (
    <div>
      <Navbar />
      <First />
      <Second_sec />
      <ShopCard />
      <ShopCardDetail />
    </div>
  );
}

export default shop;
