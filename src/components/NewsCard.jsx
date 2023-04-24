/* eslint-disable react/prop-types */
import publisherImg from '../assets/publisherImg.png'
import shareIcon from '../assets/shareIcon.png'
import saveIcon from '../assets/saveIcon.png'
import editorsInsight1 from '../assets/editorsInsight1.png'
import { Link } from 'react-router-dom'
import { displayTextSize } from '../utils'
import viewIcon from '../assets/viewIcon.png'
import star from '../assets/star.png'
const NewsCard = ({ item }) => {
    return (
        <div className="news_card border-solid border-[1px] border-[#E7E7E7] rounded">
            <div className='flex rounded items-center mb-[14px] gap-2 bg-[#F3F3F3] px-[20px] py-[16px]'>
                <div>
                    <img src={publisherImg} alt="publisher" />
                </div>
                <div>
                    <p>Awlad Hossain</p>
                    <p className='text-[14px] text-[#706F6F]'>2022-08-21</p>
                </div>
                <div className='ms-auto flex gap-[10px]'>
                    <img src={saveIcon} alt="save" />
                    <img src={shareIcon} alt="share" />
                </div>
            </div>

            <div className='flex flex-col px-[20px]'>
                <p className='text-[#403F3F] text-[20px] font-[700] mb-[20px]'>
                    Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
                </p>
                <div className='mb-[32px]'>
                    <img src={editorsInsight1} className='w-100 max-h-[262px]' alt="banner" />
                </div>
                <p className='text-[#706F6F] font-[400] mb-1'>
                    {displayTextSize(`Wednesday, August 24, 2022 | Tag Cloud Tags:
                     Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia,
                      Security, UK, Ukraine, United States, Worthy News (Worthy News)
                       – U.S. President Joe Biden has announced nearly $3 billion
                        in new U.S. military a`)}
                </p>
                <Link className='text-[#FF8A54] mb-[20px]'>Read More</Link>
                <hr className='bg-[#E7E7E7] h-[1px]' />

                <div className='flex justify-between py-[20px]'>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                        </div>
                        <span>4.9</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={viewIcon} alt="viewed" />
                        <span>736</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard