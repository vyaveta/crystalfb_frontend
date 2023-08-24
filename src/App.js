import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import { useSelector } from "react-redux";
import Home from "./pages/home/Home";
import LoggedInRoutes from "./routes/logged-in-routes";
import NotLoggedInRoute from "./routes/not-logged-in-routes";
import { HashLoaderComponent } from "./components/ui/loaders/loaders";

function App() {
  const isLoading = useSelector((state) => state.auth.isLoading);

  return (
    <div className={isLoading ? "no_interactions" : ""}>
      <HashLoaderComponent size={30} color={"#1876f2"} loading={isLoading} />
      <Routes>

        <Route element={<LoggedInRoutes />} >
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/" element={<Home />} exact />
          <Route path="/activate/:id" element={<Home activate={true} />} exact />
        </Route>
        
        <Route element={<NotLoggedInRoute />} >
        <Route path="/login" element={<Login />} exact />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
