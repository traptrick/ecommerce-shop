import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Loader from "./utils/Loader";
import { Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Cart from "./screens/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
