import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Birthday from "./pages/Birthday";
import GoodMorning from "./pages/GoodMorning";
import GoodNight from "./pages/GoodNight";
import Congratulations from "./pages/Congratulations";
import Motivation from "./pages/Motivation";
import Friendship from "./pages/Friendship";
import Love from "./pages/Love";
import Anniversary from "./pages/Anniversary";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday-wishes" element={<Birthday />} />
        <Route path="/good-morning" element={<GoodMorning />} />
        <Route path="/good-night" element={<GoodNight />} />
        <Route path="/congratulations" element={<Congratulations />} />
        <Route path="/motivation" element={<Motivation />} />
        <Route path="/friendship" element={<Friendship />} />
        <Route path="/love" element={<Love />} />
        <Route path="/anniversary" element={<Anniversary />} />
        
      </Routes>
  );
}

export default App;
