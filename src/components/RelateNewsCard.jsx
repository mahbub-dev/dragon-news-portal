
import relateNewsBanner from '../assets/editorsInsight1.png'
import dateIcon from '../assets/dateicon.png'
const RelateNewsCard = () => {
    return (
        <div className="max-w-[267px] flex flex-col max-h-[316px] gap-[20px]">
            <img src={relateNewsBanner} alt="banner" />
            <p className='text-[#403F3F] text-[20px]'>21 The Most Stylish Wedding Guest Dresses For Spring</p>
            <p className='flex items-center gap-2'>
                <img src={dateIcon} alt="dateIcon" />
                <span className='text-[#9F9F9F]'>Jan 4, 2022</span>
            </p>
        </div>
    )
}

export default RelateNewsCard