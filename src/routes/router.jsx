import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Login, Register, Home, News } from "../pages";
import NewsList from "../components/NewsList";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
				children: [
					{
						path: '/:category',
						loader: ({ params }) => { return params.category },
						element: <NewsList />
					}
				]
			},
			{
				path: "/news/:id",
				element: <News />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
		],
	},
]);

export default router;
