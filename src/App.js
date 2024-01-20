import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import { useSelector } from "react-redux";
import Home from "./pages/home/Home";
import LoggedInRoutes from "./routes/logged-in-routes";
import NotLoggedInRoute from "./routes/not-logged-in-routes";
import { HashLoaderComponent } from "./components/ui/loaders/loaders";
import Reset from "./pages/reset/reset";

function App() {
  const isLoading = useSelector((state) => state.auth.isLoading);

  return (
    <div className={isLoading ? "no_interactions" : ""}>

      <HashLoaderComponent size={40} color={"#1876f2"} loading={isLoading} />

      <Routes>
        
        {/* LoggedInRoutes */}
        <Route element={<LoggedInRoutes />}>
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/" element={<Home />} exact />
          <Route path="/activate/:token" element={<Home activate={true} />} exact/>
        </Route>
        
        {/* NotLoggedInRoute */}
        <Route element={<NotLoggedInRoute />}>
          <Route path="/login" element={<Login />} exact />
        </Route>

        {/* Routes who doesnt care about wheather the user is loggedin or not */}
        <Route path="/reset" element={<Reset />} />

      </Routes>
    </div>
  );
}

export default App;
