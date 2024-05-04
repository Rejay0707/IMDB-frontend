import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./Components/Welcome";
import LoginPage from "./Components/Login";
import Content from "./Components/Content";
import Register from "./Components/Register";
import ViewAllMovies from "./Components/ViewAllMovies";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/content" element={<Content />} />
        <Route path="/movies" element={<ViewAllMovies />} />
      </Routes>
    </Router>
  );
}

export default App;