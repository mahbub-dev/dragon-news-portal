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
