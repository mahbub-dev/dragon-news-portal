import { useEffect, useState } from "react"
import RightSideBar from "../components/RightSideBar"
import { Outlet, useNavigate, useLocation } from "react-router-dom"
const Home = () => {
    const navigate = useNavigate()
    const location = useLocation().pathname.split('/')[1].replace('_', ' ')
    const [activeBtn, setActiveBtn] = useState(location || 'National News')
    const handleCategory = (category) => {
        setActiveBtn(category)
        navigate(`/${category.replace(' ', '_').toLowerCase()}`)
    }
    useEffect(() => {
        setActiveBtn(location)
    }, [location])
    const category = [
        'National News',
        'Breaking News',
        'International News',
        'Sports',
        'Entertainment',
        'Culture',
        'Arts',
        'All News'
    ]
    return (
        <main className="container grid md:grid-cols-[_1fr_2fr_1fr]  text-left gap-[24px] ">
            <aside>
                <p className="text-[20px] text-[#403F3F] mb-[20px]">All Caterogy</p>
                <div className="category-list flex flex-col">
                    {category.map(i =>
                        <button
                            className={`text-[20px]  ps-[30px] py-[16px] pe-[70px] text-left rounded ${activeBtn.toLowerCase() === i.toLowerCase() ? 'bg-[#E7E7E7] text-[#403F3F]' : 'bg-transparent text-[#9F9F9F]'}`}
                            onClick={() => handleCategory(i)} key={i}>{i}
                        </button>
                    )}
                </div>
            </aside>
            <div>
                <p className="text-[20px] text-[#403F3F] mb-[20px]">Dragon News Home</p>
                <Outlet />
            </div>
            <RightSideBar />
        </main>
    )
}

export default Home