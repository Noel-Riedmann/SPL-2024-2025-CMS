// App.tsx
import "./App.css";
import CardManager from "./components/CardManager";
import Homework from "./components/Homework";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Card Manager</Link> | <Link to="/homework">Homework</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CardManager />} />
        <Route path="/homework" element={<Homework />} />
      </Routes>
    </Router>
  );
}

export default App;
