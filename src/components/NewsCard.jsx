/* eslint-disable react/prop-types */
import shareIcon from '../assets/shareIcon.png'
import saveIcon from '../assets/saveIcon.png'
import { Link } from 'react-router-dom'
import { displayTextSize } from '../utils'
import viewIcon from '../assets/viewIcon.png'
import star from '../assets/star.png'
const NewsCard = ({ item }) => {
    const ratingsGen = (number) => {
        const floorNum = Math.floor(number)
        const stars = []
        for (let i = 0; i < floorNum; i++) {
            const elem = <img key={i} src={star} />
            stars.push(elem)
        }
        return stars
    }
    return (
        <div className="news_card border-solid border-[1px] mb-[30px] border-[#E7E7E7] rounded">
            <div className='flex rounded items-center mb-[14px] gap-2 bg-[#F3F3F3] px-[20px] py-[16px]'>
                <div>
                    <img src={item?.author?.img} width={'40px'} height={'40px'} className='rounded-full' alt="publisher" />
                </div>
                <div>
                    <p>{item?.author?.name}</p>
                    <p className='text-[14px] text-[#706F6F]'>{item?.author?.published_date}</p>
                </div>
                <div className='ms-auto flex gap-[10px]'>
                    <img src={saveIcon} alt="save" />
                    <img src={shareIcon} alt="share" />
                </div>
            </div>

            <div className='flex flex-col px-[20px]'>
                <p className='text-[#403F3F] text-[20px] font-[700] mb-[20px]'>
                    {item?.title}
                </p>
                <div className='mb-[32px]'>
                    <img src={item?.image_url} className='w-100 max-h-[262px]' alt="banner" />
                </div>
                <p className='text-[#706F6F] font-[400] mb-1'>
                    {displayTextSize(item?.details)}
                </p>
                <Link className='text-[#FF8A54] mb-[20px]' to={`/news/${item._id}`}>Read More</Link>
                <hr className='bg-[#E7E7E7] h-[1px]' />

                <div className='flex justify-between py-[20px]'>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            {ratingsGen(item?.rating?.number)}
                        </div>
                        <span>4.9</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={viewIcon} alt="viewed" />
                        <span>{item?.total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard