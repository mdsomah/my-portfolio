import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import App from "./App"; //Root Component
import AllProjects from "./routes/AllProjects";
import ClientsProjects from "./routes/ClientsProjects";
import PersonalProjects from "./routes/PersonalProjects";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="all-projects" element={<AllProjects />} />
        <Route exact path="clients-projects" element={<ClientsProjects />} />
        <Route exact path="personal-projects" element={<PersonalProjects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
