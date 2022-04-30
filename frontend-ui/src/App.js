import { Route, Routes } from "react-router-dom";
import ChartsVisualization from "./pages/ChartsVisualization";
import Error from "./pages/Error";
import Home from "./pages/Home";
import StudentProfile from "./pages/StudentProfile";
import LandingPage from "./pages/LandingPage"

import ContactPage from "./pages/Contact";
import ProfileCard from "./components/ProfileCard";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<LandingPage />}></Route>
        <Route path="/students" exact element={<Home />}></Route>
        <Route path="/charts" exact element={<ChartsVisualization />}></Route>

        <Route path="/students/:id" exact element={<ProfileCard />}></Route>

        <Route path="/contact" exact element={<ContactPage />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
