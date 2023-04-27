import { Link, useLoaderData } from 'react-router-dom'
import leftArrow from '../assets/leftArrow.png'
import RelateNewsCard from './RelateNewsCard'

const FullNews = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='text-left'>
            <p className="text-[20px] text-[#403F3F] mb-[20px] mt-[20px] md:mt-0">Dragon News</p>
            <div className="flex flex-col gap-[20px] p-[16px] md:p-[30px] border-solid border-[1px] border-[#E7E7E7]">
                <div className="max-h-[411px] mb-[20px]">
                    <img src={data.image_url} height={'100%'} width={'100%'} alt="banner" />
                </div>
                <p className='text-[#403F3F] text-[25px] font-[700] '>
                    {data?.title}
                </p>
                <p className='text-[#706F6F] font-[400]'>
                    {data?.details}
                </p>
                <Link to={`/${data?.category_name}`} className='bg-[#D72050] text-[#FFFFFF] text-[20px] flex items-center gap-2 w-[fit-content] py-[9px] ps-[53px] pe-[26px]'>
                    <img src={leftArrow} alt="arrow" className='' />
                    <span>All news in this category</span>
                </Link>
            </div>

            <div className='mt-[60px]'>
                <h1 className='mb-[20px] text-[25px]' >Editors Insight</h1>
                <div className='flex gap-[24px]'>
                    <RelateNewsCard />
                    <RelateNewsCard />
                    <RelateNewsCard />
                </div>
            </div>
        </div>
    )
}

export default FullNews