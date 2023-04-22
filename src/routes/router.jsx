import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Login, Register, Home, News } from "../pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
		children: [
			{
				path: "/",
				element: <Home />,
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
