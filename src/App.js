import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Mac from "./pages/mac/Mac";
import Ipad from "./pages/ipad/Ipad";
import Iphone from "./pages/iphone/Iphone";
import Watch from "./pages/watch/Watch";
import Vision from "./pages/vision/Vision";
import AirPods from "./pages/airpods/Airpods";
import TvHome from "./pages/tvandhome/Tvandhome";
import Entertainment from "./pages/entertaiment/Entertaiment";
import Accessories from "./pages/accessories/Accessories";
import Support from "./pages/support/Support";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/airpods" element={<AirPods />} />
        <Route path="/tvandhome" element={<TvHome />} />
        <Route path="/entertaiment" element={<Entertainment />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  );
}

export default App;
