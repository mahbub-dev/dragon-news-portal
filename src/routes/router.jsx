import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Login, Register, Home, News } from "../pages";
import NewsList from "../components/NewsList";
import { changeBgColor } from "../utils";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: async () => {
					const category = await fetch('https://dragon-news-server-kappa-hazel.vercel.app/categories')
					const catData = await category.json()
					return catData
				},
				children: [
					{
						path: '/:category',
						element: <NewsList />,
						loader: async ({ params }) => {
							const category = await fetch('https://dragon-news-server-kappa-hazel.vercel.app/categories')
							const catData = await category.json()
							let selectedCatId = '0'
							catData.forEach(i => {
								const name = i.name.replace(' ', '_').toLowerCase()
								name === params.category && (selectedCatId = i.id)
							})
							const res = await fetch(`https://dragon-news-server-kappa-hazel.vercel.app/categories/${selectedCatId}`)
							const data = await res.json()
							return data
						},
					}
				]
			},
			{
				path: "/news/:id",
				element: <News />,
				loader: async ({ params
				}) => {
					const res = await fetch(`https://dragon-news-server-kappa-hazel.vercel.app/news/${params.id}`)
					const news = await res.json()
					const category = await fetch('https://dragon-news-server-kappa-hazel.vercel.app/categories')
					const catData = await category.json()
					catData.forEach(i => i.id === news.category_id && (news.category_name = i.name.replace(' ', '_').toLowerCase()))
					return news
				}
			},
			{
				path: "/login",
				element: <PrivateRoutes><Login /></PrivateRoutes>,
				loader: changeBgColor
			},
			{
				path: "/register",
				element: <PrivateRoutes><Register /></PrivateRoutes>,
				loader: changeBgColor
			},
		],
	},
]);

export default router;
