import { Routes,Route } from "react-router-dom"
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import { useSelector } from "react-redux";
import { HashLoaderComponent } from "./components/smallComponents/loaders/loaders";

function App() {
  const isLoading = useSelector((state) => state.auth.isLoading)

  return <div className={isLoading ? 'no_interactions': ''}>
    <HashLoaderComponent size={30} color={"#1876f2"} loading={isLoading} />
    <Routes>
      <Route path="/login" element={<Login />} exact />
      <Route path="/profile" element={<Profile />} exact />
      <Route path="/" element={<Home />} exact />
    </Routes>
  </div>;
}

export default App;
