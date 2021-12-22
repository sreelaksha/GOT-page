import { Routes, Route } from "react-router-dom"
import HouseComponent from "./components/HouseComponent"
import './App.css';

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<HouseComponent />} />
      </Routes>
    </div>
  );
}

export default App;
