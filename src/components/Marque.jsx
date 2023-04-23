import Marquee from 'react-fast-marquee'
const Marque = () => {
  return (
    <div className='marquee container p-[16px] bg-[#F3F3F3] d-flex  mt-[30px] mb-[20px]'>
      <div className="title text-[20px] py-[9px] px-[25px] bg-[#D72050] text-[white] rounded">Latest</div>
      <Marquee speed={100} className='text-[18px] text-[#403F3F]'>
        Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe,
        Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States,
        Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly
        $3 billion in new U.S. military a... Read More
      </Marquee>
    </div>
  )
}

export default Marque