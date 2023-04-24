import banner from '../assets/editorsInsight2.png'

const FullNews = () => {
    return (
        <div className='text-left'>
            <p className="text-[20px] text-[#403F3F] mb-[20px] mt-[20px] md:mt-0">Dragon News</p>
            <div className="flex flex-col gap-[20px] p-[16px] md:p-[30px] border-solid border-[1px] border-[#E7E7E7]">
                <div className="max-h-[411px]">
                    <img src={banner} height={'100%'} width={'100%'} alt="banner" />
                </div>
                <p className='text-[#403F3F] text-[25px] font-[700] '>
                    Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
                </p>
                <p className='text-[#706F6F] font-[400]'>
                Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2. Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2.
                </p>
            </div>
        </div>
    )
}

export default FullNews