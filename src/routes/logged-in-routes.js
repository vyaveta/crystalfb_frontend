import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/login";

export default function LoggedInRoutes() {
    const userData = useSelector((state) => state.auth.userData)
    return userData ? <Outlet /> : <Login />
}