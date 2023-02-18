import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomeCardDetail({ title, imgUrl, link }) {
  useEffect(() => {
      AOS.init();
    }, [])

return (
  <div className='items-center text-center shadow-2xl 
           shadow-gray-200 
              md:hover:shadow-2xl 
           md:hover:shadow-gray-400
              md:hover: transition-[4s] 
              sm:hover:shadow-2xl 
              sm: hover:shadow-black 
              sm: hover:transition-[4s] '>
      <Link href="">
          <div className='w-full '>
              <img src={imgUrl}
                  alt=""  data-aos="zoom-in-down"/>
          </div>
      </Link>

      <div className='text-[#303030] font-[600] '>
          <h3  > {title}</h3>
      </div>

  </div>
  );
}

// export default HomeCardDetail;
