import card from './cards/card';
import CardDetail from "./CardDetail";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = () => {
    return (
        <div className="flex flex-col md:flex-row items-center 
        justify-center md:mt:[32px] 
        mt:[42px] pb-[40vh] sm:pb-[30vh]
         md:m-25 md:pb-[20vh] pl-[42px] pr-[42px]">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
                {card.map(box => (
                    <CardDetail
                        imgUrl={box.imgUrl}
                        title={box.title} data-aos="fade-down"
                        // link={box.link} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Card;
