import { useLoaderData } from "react-router-dom"
import NewsCard from "./NewsCard"
const NewsList = () => {
    const data = useLoaderData()
    return (
        <>
            {
                data && data.map(i => <NewsCard key={i._id} item={i} />)
            }
        </>
    )
}

export default NewsList