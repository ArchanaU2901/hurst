import React from 'react';
import shop_card from './cards/shop_card';
import ShopCardDetail from './HomeCardDetail';
import Link from 'next/link';
const ShopCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center 
                    justify-center md:mt:[30px] 
                    mt:[42px] pt-[20vh] sm:pb-[30vh]
                    md:m-25 md:pt-[6vh] pl-[42px] pr-[42px]">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {shop_card.map(box => (
          <ShopCardDetail
            imgUrl={box.imgUrl}
            title={box.title}
            // link={box.link}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopCard;