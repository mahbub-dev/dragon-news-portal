import FullNews from "../components/FullNews"
import RightSideBar from "../components/RightSideBar"

const News = () => {
    return (
        <div className="container grid md:grid-cols-[3fr_1fr] gap-5">
            <FullNews />
            <RightSideBar/>
        </div>
    )
}

export default News