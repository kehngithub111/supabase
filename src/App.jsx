import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// pages
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Smoothie</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
