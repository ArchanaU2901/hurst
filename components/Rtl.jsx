import Link from 'next/link';
import React from 'react';

const Rtl = () => {
    return (
        <div>
            <div className='bg-[#C8A165] pt-[20vh] mb-8 mt-[-8rem] md:mt-0'>
                <div className='flex flex-col text-center justify-between md:flex-row md:m-auto '>
                    <div className=' relative bottom-[59px]' >
                        <h1 className='text-[36px] text-white font-bold ml-[12px] '>RTL Version Included</h1>
                    </div>
                    <div className='bg-[#fafafa] relative bottom-[24px] md:bottom-[57px] 
                         md:mr-[100px] md:pr-[55px] md:pl-[55px] md:leading-[52px] pl-[25px]
                          pr-[25px] pt-[4px] pb-[4px] text-center m-auto '>
                        <Link href="#" >
                          <p className='uppercase text-[19px] text-center '> see rtl demo</p> 
                            </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Rtl;
