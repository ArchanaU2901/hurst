import Link from "next/link";

const Second_sec = () => {
  return (
    <div>
      <h1 className="text-center tracking-wide font-serif mt-8 mr-auto ml-auto text-[30px]">CHOOSE YOUR DEMO</h1>

      <div className='md:flex flex-row m-auto justify-center items-center mb-[30px] flex flex-wrap md:mb-[30px] '>
        <div className='space-x-[2em] space-y-[1em] ml-[2.5rem] contents'>
          <Link href="/" className='border-[2px] pb-[1px] pt-[1px] md:pb-1 md:pt-1 pr-3 pl-3 mt-[19px] text-center text-[#fff]  hover: bg-[#C8A165] shadow-gray-100 border-[#C8A165]'>All</Link>
          <Link href="/home" className='border-[2px] pb-1 pt-1 pr-2 pl-2 text-center text-black hover:text-[#fff] border-white bg-[#eee] hover: border-[#C8A165] hover:bg-[#C8A165]'>HOME</Link>
          <Link href="/shop" className='border-[2px] pb-1 pt-1 pr-2 pl-2 text-center text-black hover:text-[#fff] border-white bg-[#eee] hover: border-[#C8A165] hover:bg-[#C8A165]'>SHOP</Link>
          <Link href="/boxes" className='border-[2px] pb-1 pt-1 pr-2 pl-2 text-center text-black hover:text-[#fff] border-white bg-[#eee] hover: border-[#C8A165] hover:bg-[#C8A165]'>BLOG</Link>
          <Link href="/other" className='border-[2px] pb-1 pt-1 pr-2 pl-2 text-center text-black hover:text-[#fff] border-white bg-[#eee] hover: border-[#C8A165] hover:bg-[#C8A165]'>OTHER</Link>
        </div>
      </div>
    </div>
  );
}

export default Second_sec;
