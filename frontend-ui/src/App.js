import { Route, Routes } from "react-router-dom";
import ChartsVisualization from "./pages/ChartsVisualization";
import Error from "./pages/Error";
import Home from "./pages/Home";
import StudentProfile from "./pages/StudentProfile";
import ContactPage from "./pages/Contact"


function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/charts" exact element={<ChartsVisualization />}></Route>

      <Route path="/students/:id" exact element={<StudentProfile />}></Route>

      <Route path='/contact' exact element={<ContactPage/ >}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
