import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "../../pages/home/Home";
import Programs from "../../pages/programs/Programs";
import Error404 from "../../pages/Error404/Error404";
import Apply from "../../pages/Apply/Apply";
import AppliationFailled from "../../pages/applicationFaill/ApplicationFailled";
import ApplicationSuccess from "../../pages/applicationSuccess/ApplicationSuccess";
import RolesAndResponsibility from "../../pages/rolesAndResponsibilyty/RolesAndResponsibility";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/programs" element={<Programs />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/apply/success" element={<ApplicationSuccess />} />
        <Route path="/apply/networkError" element={<AppliationFailled />} />
        <Route
          path="/apply/roles-and-responsibility"
          element={<RolesAndResponsibility />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
