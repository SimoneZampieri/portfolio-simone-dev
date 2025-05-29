import React from "react";
import DefLayout from "./layout/DefLayout";
import Home from "./pages/Home";
import DevDetailPage from "./pages/DevDetailPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <DefLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<DevDetailPage />} />
        </Routes>
      </DefLayout>
    </Router>
  );
};

export default App;
