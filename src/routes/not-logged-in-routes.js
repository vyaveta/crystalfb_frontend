import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function NotLoggedInRoute(){
    const userData = useSelector((state) => state.auth.userData)
    return userData ? <Navigate to={"/"} /> : <Outlet />
}