import { Route, Routes } from "react-router-dom";
import ChartsVisualization from "./pages/ChartsVisualization";
import Error from "./pages/Error";
import Home from "./pages/Home";
import ExperimentPage  from "./pages/experimentPage";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/charts" exact element={<ChartsVisualization />}></Route>
      <Route path="/exp" exact element={<ExperimentPage />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
