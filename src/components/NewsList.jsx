import { useLoaderData } from "react-router-dom"
import NewsCard from "./NewsCard"
const NewsList = () => {
    const data = useLoaderData()
    return (
        <>
            <NewsCard item={data} />
        </>
    )
}

export default NewsList