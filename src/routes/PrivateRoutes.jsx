/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"
import { useContext } from "react"
const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (user) {
        return <Navigate to={'/all_news'} />
    } else return children
}

export default PrivateRoutes