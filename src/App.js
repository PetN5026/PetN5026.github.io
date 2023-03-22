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
      <div className="bg-slate-200 h-screen flex-col flex overflow-y-auto">
        <NavBar />
        <Router basename="/PetN5026.github.io">
          <Routes>
            <Route
              basename="/PetN5026.github.io"
              path="/"
              element={<HomePage />}
            />
            <Route
              basename="/PetN5026.github.io"
              path="/AboutMe"
              element={<AboutMe />}
            />
            <Route
              basename="//PetN5026.github.io"
              path="/Foodie"
              element={<FoodiPage />}
            />
            <Route
              basename="/PetN5026.github.io"
              path="/FSATravels"
              element={<FSATravelsPage />}
            />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
