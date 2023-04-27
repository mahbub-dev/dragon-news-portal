import { useEffect, useState } from "react"
import { Outlet, useLoaderData, useLocation, useNavigate } from "react-router-dom"
import RightSideBar from "../components/RightSideBar"
import RelateNewsCard from "../components/RelateNewsCard"
const Home = () => {
    const categories = useLoaderData()
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
    return (
        <main className="container grid md:grid-cols-[_1fr_2fr_1fr]  text-left gap-[24px] ">
            <aside>
                <p className="text-[20px] text-[#403F3F] mb-[20px]">All Caterogy</p>
                <div className="category-list flex flex-col">
                    {categories?.map(i =>
                        <button
                            className={
                                `text-[20px]  ps-[30px] py-[16px] pe-[70px] text-left rounded ${activeBtn.toLowerCase() === i.name.toLowerCase() ?
                                    'bg-[#E7E7E7] text-[#403F3F]' : 'bg-transparent text-[#9F9F9F]'}`
                            }
                            onClick={() => handleCategory(i.name)} key={i.id}>{i.name}
                        </button>
                    )}
                </div>
                <div className="flex flex-col gap-3 mt-[30px]">
                    <RelateNewsCard />
                    <RelateNewsCard />
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