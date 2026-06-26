import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ComplaintForm from "./components/ComplaintForm";
import ThankYou from "./components/ThankYou";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/complaint"
          element={<ComplaintForm />}
        />
        <Route 
           path="/thankyou" 
           element={<ThankYou />} 
         />

      </Routes>

    </BrowserRouter>
  );
}

export default App;