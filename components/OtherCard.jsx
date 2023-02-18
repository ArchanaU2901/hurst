import React from 'react';
import other_card from './cards/other_card';
import OtherCardDetail from './OtherCardDetail';
import Link from 'next/link';

const OtherCard = () => {
    return (
        <div className="flex flex-col md:flex-row items-center 
            justify-center md:mt:[30px] 
            mt:[42px] pt-[20vh] sm:pb-[30vh]
            md:m-25 md:pt-[6vh] pl-[42px] pr-[42px]">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
                {other_card.map(box => (
                    <OtherCardDetail
                        imgUrl={box.imgUrl}
                        title={box.title}
                        // link={box.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default OtherCard;
