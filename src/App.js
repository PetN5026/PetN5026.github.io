import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import FoodiPage from "./components/FoodiPage";
import FSATravelsPage from "./components/FSATravelsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative ">
      <div
        id="all-container"
        className="bg-slate-200 h-screen flex-col flex overflow-y-auto items-center"
      >
        <NavBar />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Foodie" element={<FoodiPage />} />
            <Route path="/FSATravels" element={<FSATravelsPage />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
